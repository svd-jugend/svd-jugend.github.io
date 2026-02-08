import { Link } from 'react-router-dom';

function Training() {
  return (
    <div className="container">
      <h1>Trainingszeiten & Ort</h1>
      <section id="wann-und-wo">
        <h2>Wann und Wo findet unser Training statt?</h2>
        <p>
          Unser Jugendtraining findet regelmäßig statt und bietet eine tolle
          Möglichkeit, Schach zu lernen oder deine Fähigkeiten zu verbessern:
        </p>
        <ul>
          <li>
            <strong>Freitags:</strong> 18:00 - 19:30 Uhr (Anfänger und
            Fortgeschrittene gemeinsam, individuelle Betreuung)
          </li>
        </ul>
        <p><strong>Unser Trainingsort:</strong></p>
        <p>
          Im Vereinsheim des SV Dettingen/Erms<br />
          <em>Altes Rathaus 1, Dettingen/Erms</em>
        </p>
        <p>
          Interessierte Kinder und Jugendliche sind jederzeit herzlich
          eingeladen, bei einem
          <strong>Probetraining</strong> vorbeizuschauen! Komm
          einfach vorbei oder melde dich kurz vorher an (siehe <Link to="/kontakt">Kontakt</Link>).
        </p>
      </section>

      <section id="training-ablauf">
        <h2>Was erwartet dich im Training?</h2>
        <p>Unser Training ist abwechslungsreich gestaltet und beinhaltet:</p>
        <ul>
          <li>Erlernen der Schachregeln und Grundlagen</li>
          <li>Taktikaufgaben und Eröffnungstheorie</li>
          <li>Analyse von Partien</li>
          <li>Freies Spiel und kleine Turniere</li>
          <li>Vorbereitung auf Wettkämpfe</li>
          <li>Und natürlich viel Spaß am Spiel!</li>
        </ul>
      </section>
    </div>
  );
}

export default Training;
