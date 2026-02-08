import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <section className="hero-intro">
        <h2>Schön, dass du hier bist!</h2>
        <p>
          Entdecke die Welt des Schachs mit uns. Auf dieser Seite findest du
          alle Informationen rund um unsere Jugendabteilung.
          <br /> Das Training findet immer <strong>Freitags von 18:00 bis 19:30 Uhr </strong> statt!
          <br /> <em>Trainingslokal: Altes Rathaus 1, Dettingen/Erms</em>
        </p>
      </section>

      <div className="features-grid">
        <section id="about-us-intro" className="feature-card">
          <img src="/assets/logo_keintext.png" alt="Über Uns Icon" className="feature-icon" />
          <h3>Über uns</h3>
          <p>
            Wir sind die Jugendabteilung des Schachvereins <br /> Dettingen/Erms e.V. – ein Ort, an dem Kinder und
            Jugendliche
            Schach lernen,
            ihre Fähigkeiten gezielt weiterentwickeln und dabei jede Menge Spaß am Spiel entdecken.
            <br /> <br />
            Jetzt reinschnuppern und mitspielen – <br />wir freuen uns auf neue Talente!
          </p>
          <Link to="/ueber_uns" className="btn btn-secondary">Mehr erfahren</Link>
        </section>

        <section id="what-we-offer" className="feature-card">
          <img src="/assets/waswirbieten.png" alt="Angebot Icon" className="feature-icon" />
          <h3>Was wir bieten</h3>
          <ul>
            <li>
              Regelmäßiges Schachtraining für Anfänger und Fortgeschrittene
            </li>
            <li>Teilnahme an Turnieren und Meisterschaften</li>
            <li>Eine tolle Gemeinschaft und viel Spaß am Spiel</li>
            <li>Förderung von Konzentration und strategischem Denken</li>
          </ul>
          <Link to="/training" className="btn btn-secondary">Zum Training</Link>
        </section>
      </div>

      <section className="cta-section fade-in">
        <h2>Bereit für deinen nächsten Zug?</h2>
        <p>
          Werde Teil unserer Schachfamilie und entdecke dein volles
          Potenzial!<br />
          Scanne den QR-Code oder klicke auf den Link, um unserem
          WhatsApp-Kanal beizutreten und keine wichtigen Infos mehr zu
          verpassen!
        </p>

        <div className="qr-codes-container">
          <div className="qr-code-item">
            <a href="https://whatsapp.com/channel/0029VaswjkC8PgsFsFQNHB3G" target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp Kanal SV Dettingen Jugendschach öffnen (QR-Code)">
              <img src="/assets/qr-jugendschach.png" alt="QR-Code für WhatsApp Kanal SV Dettingen Jugendschach"
                className="qr-code-image" />
            </a>
            <p>
              <strong><a href="https://whatsapp.com/channel/0029VaswjkC8PgsFsFQNHB3G" target="_blank"
                  rel="noopener noreferrer">Jugendschach</a></strong>
            </p>
            <p className="qr-description">
              für Neuigkeiten und wichtige Ankündigungen!
            </p>
          </div>
          <div className="qr-code-item">
            <a href="https://whatsapp.com/channel/0029VbAt84O4tRryIvqp7V2t" target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp Kanal SV Dettingen Schachkurse öffnen (QR-Code)">
              <img src="/assets/qr-schachkurse.png" alt="QR-Code für WhatsApp Kanal SV Dettingen Schachkurse"
                className="qr-code-image" />
            </a>
            <p>
              <strong><a href="https://whatsapp.com/channel/0029VbAt84O4tRryIvqp7V2t" target="_blank"
                  rel="noopener noreferrer">Schachkurse</a></strong>
            </p>
            <p className="qr-description">
              für News über unsere Diplomschachkurse!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
