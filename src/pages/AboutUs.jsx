import { Helmet } from 'react-helmet-async';

function AboutUs() {
  return (
    <div className="container">
      <Helmet>
        <title>Über Uns - SV Dettingen/Erms Jugend</title>
        <meta name="description" content="Lerne unsere Jugendabteilung, unsere Philosophie und unsere Trainer kennen." />
      </Helmet>
      <h1>Wer wir sind – Die Schachjugend des SV Dettingen/Erms</h1>
      <section id="philosophy">
        <h2>Unsere Philosophie: Schach macht Spaß!</h2>
        <p>
          Der SV Dettingen/Erms e.V. legt großen Wert auf die Förderung des
          Jugendschachs. Wir möchten Kindern und Jugendlichen nicht nur das
          Schachspiel beibringen, sondern auch wichtige Werte wie
          <a href="https://www.deutsche-schachjugend.de/fileadmin/dsj_image/wir/FAIRPLAY/FAIRPLAY-Kodex_WERTE-des-SchachSPORTS_DSJ.pdf"
            target="_blank" rel="noopener noreferrer"> Fairness, Respekt und Teamgeist</a> vermitteln.
        </p>
        <p>
          Unser Ziel ist es, eine positive und unterstützende Umgebung zu
          schaffen, in der junge Talente wachsen und ihre Leidenschaft für
          Schach entdecken können. Schach fördert die
          <strong> Konzentration, das strategische Denken und die Kreativität</strong>
          – Fähigkeiten, die auch abseits des Bretts von großem Nutzen sind.
        </p>
        <p>
          Bei uns steht der Spaß am Spiel im Vordergrund, kombiniert mit der
          Möglichkeit, sich kontinuierlich zu verbessern und neue
          Freundschaften zu schließen.
        </p>
      </section>
      <section id="club-info">
        <h2>Unser Verein: Mehr als nur Schach</h2>
        <p>
          Unsere Jugendabteilung ist ein lebendiger und engagierter Teil des SV Dettingen/Erms e.V. Neben der intensiven
          Jugendförderung haben wir auch erfolgreiche Erwachsenenmannschaften, die auf regionaler Ebene an Wettkämpfen
          teilnehmen.
          Viele unserer Mitglieder fahren regelmäßig auf Turniere, um ihr Können weiter zu verbessern und neue
          Erfahrungen zu
          sammeln.
        </p>
        <p>
          Wir bieten eine lebendige Vereinsgemeinschaft, in der Generationen
          zusammenkommen und die Faszination für das königliche Spiel teilen.
          Erfahre mehr über den
          <a href="https://svdettingen.schachvereine.de/" target="_blank" rel="noopener noreferrer"> Gesamtverein</a>
          oder besuche uns, um Teil unserer Schachfamilie zu werden.
        </p>
      </section>
      <section id="team">
        <h2>Unsere Jugendtrainer</h2>
        <p>
          Unsere engagierten Trainer setzen sich mit Leidenschaft für die
          Förderung unserer Nachwuchstalente ein:
        </p>
        <ul>
          <li>
            <strong>Tim Winterstein:</strong> Hauptjugendtrainer und Leiter
            der Trainingsgruppen
          </li>
          <li>
            <strong>Sebastian Wezel:</strong> Co-Trainer und Unterstützung bei
            der individuellen Förderung
          </li>
        </ul>
      </section>
    </div>
  );
}

export default AboutUs;
