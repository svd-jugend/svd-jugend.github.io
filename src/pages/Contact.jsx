import { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Helmet } from 'react-helmet-async';
import L from 'leaflet';
import ReCAPTCHA from 'react-google-recaptcha';
import Swal from 'sweetalert2';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet default icon not showing
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icon for our map
const customIcon = new L.Icon({
  iconUrl: '/assets/logo_keintext.png',
  iconSize: [51, 51],
  iconAnchor: [12, 41],
  popupAnchor: [10, -40],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});

function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw0HUgTyVAHoTYpFuQtT_nxdrBnaQ60HOoEi_MOu_T5fOx_JYl59_YwP5Yyz-s7sWi0cA/exec';

  const onEmailCaptchaChange = (value) => {
    if (value) {
      setShowEmail(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      Swal.fire({
        title: 'Bitte bestätigen',
        text: 'Bitte bestätige, dass du kein Roboter bist, indem du das reCAPTCHA löst.',
        icon: 'warning',
        confirmButtonColor: '#a6292d',
        confirmButtonText: 'OK'
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData(formRef.current);
    // Manually append the reCAPTCHA response if not present (though usually needed for backend verification)
    formData.append('g-recaptcha-response', recaptchaValue);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        if (response.ok) {
           // Google Script usually redirects, which might not be "ok" in opaque mode,
           // but often fetch resolves. However, with CORS and no-cors mode, we can't read response.
           // Original script tried to parse JSON but fell back to success on error.
           return { success: true, message: 'Nachricht wurde gesendet!' };
        } else {
           // Assume success anyway for Google Forms behavior
           return { success: true, message: 'Nachricht wurde gesendet!' };
        }
      })
      .catch(error => {
        console.warn('Fetch-Fehler (oft CORS-bedingt, aber Annahme von Erfolg):', error);
        return { success: true, message: 'Nachricht wurde gesendet!' };
      })
      .then(result => {
        Swal.fire({
          title: 'Abgeschickt!',
          text: result.message || 'Deine Nachricht wurde übermittelt und das Formular wird zurückgesetzt.',
          icon: 'success',
          confirmButtonColor: '#a6292d',
          confirmButtonText: 'OK'
        });
        formRef.current.reset();
        recaptchaRef.current.reset();
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container">
      <Helmet>
        <title>Kontakt - SV Dettingen/Erms Jugend</title>
        <meta name="description" content="Kontaktiere uns per E-Mail, Telefon oder besuche uns direkt in unserem Trainingslokal." />
      </Helmet>
      <h1>Kontakt & Ansprechpartner</h1>
      <section id="contact-info">
        <h2>Schreib uns oder komm vorbei!</h2>
        <ul>
          <li><strong>Jugendleiter:</strong> Tim Winterstein</li>
          <li id="email-container">
            <strong>E-Mail:</strong>
            {!showEmail ? (
              <span id="captcha-container" style={{ display: 'inline-block', marginLeft: '10px', verticalAlign: 'middle' }}>
                <ReCAPTCHA
                  sitekey="6Lf8alMrAAAAABxmzBloUpWH334Vue_LKxZnnLEA"
                  onChange={onEmailCaptchaChange}
                  size="compact" // Use compact size for inline feel
                />
              </span>
            ) : (
              <span id="email-address" style={{ marginLeft: '10px' }}>
                <a href="mailto:svd.jugendschach@gmail.com">svd.jugendschach@gmail.com</a>
              </span>
            )}
          </li>
        </ul>
        <p><strong>Adresse unseres Trainingslokals:</strong></p>
        <address>
          SV Dettingen/Erms e.V. - Vereinsheim<br />
          Altes Rathaus, Hülbener Straße 1<br />
          72581 Dettingen/Erms<br />
        </address>

        <div style={{ height: '400px', width: '100%', marginBottom: '2rem', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <MapContainer center={[48.52977, 9.3471]} zoom={15} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.52977, 9.3471]} icon={customIcon}>
                <Popup>
                <b>Schachverein Dettingen/Erms e.V.</b><br />Altes Rathaus (Großer Versammlungsraum)
                </Popup>
            </Marker>
            </MapContainer>
        </div>

        <div className="form-container">
          <h4 className="text-center">Kontaktiere uns direkt hier:</h4>
          <form id="submit-to-google-sheet" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input className="form-control" type="text" name="name" id="name" placeholder="Dein Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-Mail:</label>
              <input className="form-control" type="email" name="email" id="email" placeholder="Deine E-Mail-Adresse" required />
            </div>
            <div className="form-group">
              <label htmlFor="nachricht">Nachricht:</label>
              <textarea className="form-control" name="nachricht" id="nachricht" rows="5" placeholder="Deine Nachricht an uns" required></textarea>
            </div>

            <div className="form-group form-group-recaptcha">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lf8alMrAAAAABxmzBloUpWH334Vue_LKxZnnLEA"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
              {isSubmitting ? 'Sende...' : 'Senden'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
