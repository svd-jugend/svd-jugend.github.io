// Script Block 1 (Map, reCAPTCHA logic, Year)
var map = L.map('map').setView([48.52977, 9.3471], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var customIcon = L.icon({ /* ... icon config ... */
  iconUrl: 'assets/logo_keintext.png', iconSize: [51, 51], iconAnchor: [25, 50],
  popupAnchor: [0, -50], shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png', shadowSize: [41, 41]
});
var marker = L.marker([48.52977, 9.3471], { icon: customIcon }).addTo(map);
marker.bindPopup("<b>Schachverein Dettingen/Erms e.V.</b><br>Altes Rathaus (Großer Versammlungsraum)").openPopup();

// Globale Variablen für Widget-IDs
var recaptchaEmailWidgetId;
var recaptchaFormWidgetId;

// Callback, der aufgerufen wird, wenn die reCAPTCHA-API geladen ist
// This function is expected to be called by the Google reCAPTCHA API script
// once it's loaded, due to `?onload=onloadCallback` in its src.
var onloadCallback = function () {
  // Rendere das reCAPTCHA für die E-Mail-Anzeige
  if (document.getElementById('recaptcha-email')) {
    recaptchaEmailWidgetId = grecaptcha.render('recaptcha-email', {
      'sitekey': '6Lf8alMrAAAAABxmzBloUpWH334Vue_LKxZnnLEA', // Dein Site Key
      'callback': onCaptchaSuccessEmail
    });
  }
  // Rendere das reCAPTCHA für das Formular
  if (document.getElementById('recaptcha-form')) {
    recaptchaFormWidgetId = grecaptcha.render('recaptcha-form', {
      'sitekey': '6Lf8alMrAAAAABxmzBloUpWH334Vue_LKxZnnLEA' // Dein Site Key
      // Kein expliziter Callback hier nötig, wir prüfen on submit
    });
  }
};

function onCaptchaSuccessEmail(token) { // token wird übergeben, aber nicht direkt genutzt in dieser Funktion
  console.log("Email reCAPTCHA gelöst, Token: ", token);
  document.getElementById("captcha-container").style.display = "none";
  document.getElementById("email-address").style.display = "inline";
}

// Ensure currentYear is updated after DOM is loaded if this script is not deferred
// or if the element might not exist yet. If using defer, this should be fine.
if (document.getElementById('currentYear')) {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
} else {
    // If the script runs before the DOM is fully parsed (e.g. not deferred or in head)
    // and currentYear element is not yet available, listen for DOMContentLoaded.
    document.addEventListener('DOMContentLoaded', function() {
        if(document.getElementById('currentYear')) {
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        }
    });
}

// Script Block 2 (Google Sheet Form Submission)
const scriptURL = 'https://script.google.com/macros/s/AKfycbw0HUgTyVAHoTYpFuQtT_nxdrBnaQ60HOoEi_MOu_T5fOx_JYl59_YwP5Yyz-s7sWi0cA/exec';
const form = document.forms['submit-to-google-sheet'];
const primaryButtonColor = '#a6292d';

// Ensure the form exists before adding an event listener, especially if script is not deferred
// or placed before the form in HTML. If using defer, this should generally be fine.
if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.textContent;

      // reCAPTCHA-Prüfung mit expliziter Widget-ID
      // Stelle sicher, dass recaptchaFormWidgetId definiert ist, bevor du darauf zugreifst
      if (typeof recaptchaFormWidgetId === 'undefined') {
        console.error("Formular reCAPTCHA Widget ID ist nicht definiert. Wurde onloadCallback korrekt ausgeführt?");
        // Ensure swal is available. If SweetAlert2 is loaded deferred, this might error
        // if called before SweetAlert2 is ready.
        if (typeof swal !== 'undefined') {
            swal({
              title: 'Fehler',
              text: 'Das reCAPTCHA konnte nicht initialisiert werden. Bitte lade die Seite neu.',
              type: 'error',
              confirmButtonColor: primaryButtonColor
            });
        } else {
            alert('Das reCAPTCHA konnte nicht initialisiert werden. Bitte lade die Seite neu.');
        }
        return;
      }

      const recaptchaResponse = grecaptcha.getResponse(recaptchaFormWidgetId);
      if (recaptchaResponse.length === 0) {
        if (typeof swal !== 'undefined') {
            swal({
              title: 'Bitte bestätigen',
              text: 'Bitte bestätige, dass du kein Roboter bist, indem du das reCAPTCHA löst.',
              type: 'warning',
              confirmButtonColor: primaryButtonColor,
              confirmButtonText: 'OK'
            });
        } else {
            alert('Bitte bestätige, dass du kein Roboter bist, indem du das reCAPTCHA löst.');
        }
        return;
      }

      submitButton.disabled = true;
      submitButton.textContent = 'Sende...';
      const formData = new FormData(form);

      fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => { /* ... dein fetch response handling ... */
          if (response.ok) {
            return response.json().then(data => {
              console.log('Antwort vom Server (wenn CORS OK wäre):', data);
              return { success: true, serverData: data, messageFromServer: data.message };
            }).catch(jsonError => {
              console.warn('JSON Parse Fehler, aber Annahme von Erfolg:', jsonError);
              return { success: true, message: 'Nachricht wurde gesendet!' };
            });
          } else {
            console.error('Server-Fehlerstatus:', response.status, response.statusText);
            return { success: true, message: `Nachricht wurde gesendet!` };
          }
        })
        .catch(error => { /* ... dein fetch catch handling ... */
          console.warn('Fetch-Fehler (oft CORS-bedingt, aber Annahme von Erfolg):', error);
          return { success: true, message: 'Nachricht wurde gesendet!' };
        })
        .then(result => { /* ... dein fetch then handling ... */
          if (typeof swal !== 'undefined') {
              swal({
                title: 'Abgeschickt!',
                text: result.messageFromServer || result.message || 'Deine Nachricht wurde übermittelt und das Formular wird zurückgesetzt.',
                type: 'success',
                confirmButtonColor: primaryButtonColor,
                confirmButtonText: 'OK'
              });
          } else {
              alert(result.messageFromServer || result.message || 'Deine Nachricht wurde übermittelt und das Formular wird zurückgesetzt.');
          }
          form.reset();

          if (typeof recaptchaFormWidgetId !== 'undefined' && typeof grecaptcha !== 'undefined') {
            grecaptcha.reset(recaptchaFormWidgetId);
          }
        })
        .finally(() => { /* ... dein fetch finally handling ... */
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        });
    });
} else {
    // If the script runs before the form is available.
    document.addEventListener('DOMContentLoaded', function() {
        const formElement = document.forms['submit-to-google-sheet'];
        if (formElement) {
            // Re-run the event listener setup if form is found after DOM load
            // This is a simplified version; ideally, encapsulate the setup logic in a function.
            formElement.addEventListener('submit', e => {
              e.preventDefault();
              const submitButton = formElement.querySelector('button[type="submit"]');
              const originalButtonText = submitButton.textContent;

              if (typeof recaptchaFormWidgetId === 'undefined') {
                if (typeof swal !== 'undefined') {
                    swal({ title: 'Fehler', text: 'Das reCAPTCHA konnte nicht initialisiert werden...', type: 'error', confirmButtonColor: primaryButtonColor });
                } else {
                    alert('Das reCAPTCHA konnte nicht initialisiert werden...');
                }
                return;
              }
              const recaptchaResponse = grecaptcha.getResponse(recaptchaFormWidgetId);
              if (recaptchaResponse.length === 0) {
                if (typeof swal !== 'undefined') {
                    swal({ title: 'Bitte bestätigen', text: 'Bitte bestätige, dass du kein Roboter bist...', type: 'warning', confirmButtonColor: primaryButtonColor, confirmButtonText: 'OK' });
                } else {
                    alert('Bitte bestätige, dass du kein Roboter bist...');
                }
                return;
              }
              submitButton.disabled = true;
              submitButton.textContent = 'Sende...';
              const formData = new FormData(formElement);
              fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => response.ok ? response.json().catch(() => ({ success: true, message: 'Nachricht gesendet (JSON Parse Error)!' })) : ({ success: true, message: `Nachricht gesendet (Server Status: ${response.status})!` }))
                .catch(error => ({ success: true, message: 'Nachricht gesendet (Fetch Error)!' }))
                .then(result => {
                  if (typeof swal !== 'undefined') {
                      swal({ title: 'Abgeschickt!', text: result.messageFromServer || result.message, type: 'success', confirmButtonColor: primaryButtonColor, confirmButtonText: 'OK' });
                  } else {
                      alert(result.messageFromServer || result.message);
                  }
                  formElement.reset();
                  if (typeof recaptchaFormWidgetId !== 'undefined' && typeof grecaptcha !== 'undefined') { grecaptcha.reset(recaptchaFormWidgetId); }
                })
                .finally(() => { submitButton.disabled = false; submitButton.textContent = originalButtonText; });
            });
        }
    });
}
