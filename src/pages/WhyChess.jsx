import { Helmet } from 'react-helmet-async';

function WhyChess() {
  return (
    <div className="container">
      <Helmet>
        <title>Warum Schach? - SV Dettingen/Erms Jugend</title>
        <meta name="description" content="Erfahre, warum Schach mehr als nur ein Spiel ist und welche Vorteile es für Kinder und Jugendliche bietet." />
      </Helmet>
      <h1>Warum Schach? Die Vorteile des königlichen Spiels</h1>
      <section id="schach-erklaerung">
        <h2>Mehr als nur ein Spiel</h2>
        <p>
          Schach ist weit mehr als nur ein Brettspiel. Es ist eine faszinierende Mischung aus Sport, Wissenschaft und
          Kunst, die zahlreiche positive Auswirkungen auf die Entwicklung von Kindern und Jugendlichen hat. Beim SV
          Dettingen/Erms legen wir großen Wert darauf, diese Vorteile spielerisch zu vermitteln.
        </p>
      </section>

      <section id="schach-intro-bild">
        <h2>Auf einen Blick:</h2>
        <img src="/assets/SchachInfografik.png" alt="Kinder spielen konzentriert Schach" className="content-image" />
      </section>

      <section id="kognitive-faehigkeiten">
        <h2>Schärfen der kognitiven Fähigkeiten</h2>
        <ul>
          <li>
            <strong>Konzentration und Geduld:</strong> Lange Partien erfordern Ausdauer und die Fähigkeit, sich über
            einen längeren Zeitraum zu fokussieren.
          </li>
          <li>
            <strong>Problemlösungskompetenz:</strong> Jede Stellung ist ein neues Rätsel, das kreative Lösungsansätze
            erfordert.
          </li>
          <li>
            <strong>Strategisches Denken und Vorausplanung:</strong> Spieler lernen, Züge im Voraus zu planen und die
            Konsequenzen ihrer Entscheidungen abzuwägen.
          </li>
          <li>
            <strong>Gedächtnistraining:</strong> Das Merken von Eröffnungsvarianten, Mustern und typischen Mattbildern
            schult das Gedächtnis.
          </li>
          <li>
            <strong>Entscheidungsfindung:</strong> Unter Zeitdruck müssen oft schwierige Entscheidungen getroffen
            werden, was die Urteilskraft stärkt.
          </li>
        </ul>
      </section>

      <section id="charakter-entwicklung">
        <h2>Förderung der charakterlichen Entwicklung</h2>
        <ul>
          <li>
            <strong>Umgang mit Sieg und Niederlage:</strong> Schach lehrt Fairness, Respekt vor dem Gegner und die
            Fähigkeit, aus Fehlern zu lernen.
          </li>
          <li>
            <strong>Selbstvertrauen:</strong> Erfolge im Schach stärken das Selbstbewusstsein und das Vertrauen in die
            eigenen Fähigkeiten.
          </li>
          <li>
            <strong>Disziplin:</strong> Regelmäßiges Training und die Vorbereitung auf Partien erfordern Disziplin und
            Engagement.
          </li>
        </ul>
      </section>

      <section id="soziale-aspekte">
        <h2>Soziale Aspekte</h2>
        <ul>
          <li>Im Verein treffen Kinder und Jugendliche auf Gleichgesinnte, knüpfen Freundschaften und lernen, sich in
            einer Gemeinschaft zu bewegen.</li>
          <li>Turniere und Mannschaftskämpfe fördern den Teamgeist und bieten spannende Erlebnisse.</li>
        </ul>
      </section>

      <section id="broschuere-download">
        <h2>Weitere Informationen</h2>
        <p>
          Hier eine Veröffentlichung des Deutschen Schachbundes, die die Vorteile von Schach für Kinder und Jugendliche
          zusammenfasst.
        </p>
        <a href="/assets/downloads/SchachMachtSchlau.pdf" target="_blank" rel="noopener noreferrer"
          className="btn btn-primary" download="Warum_Schach_SV_Dettingen.pdf">
          Vorteile durch Schach (PDF-Download)
        </a>
      </section>
    </div>
  );
}

export default WhyChess;
