function Imprint() {
  return (
    <div className="container">
      <h1>Impressum</h1>

      <div id="impressum-content">
        <section>
          <h2>Angaben gemäß § 5 DDG (ehemals TMG)</h2>
          <p>
            <strong>SV Dettingen/Erms e.V.</strong><br />
            Jugendabteilung Schach<br />
            [Straße Hausnummer des Vereins]<br />
            [PLZ Ort des Vereins]
          </p>

          <dl>
            <dt>Vertreten durch (Vorstand des Hauptvereins):</dt>
            <dd>[Max Mustermann - 1. Vorsitzender]</dd>

            <dt>Ansprechpartner Jugendabteilung Schach:</dt>
            <dd>Tim Winterstein (Jugendleiter)</dd>

            <dt>Kontakt (Jugendabteilung):</dt>
            <dd>E-Mail: <a href='mailto:svd.jugendschach@gmail.com'>svd.jugendschach@gmail.com</a></dd>

            <dt>Kontakt (Hauptverein):</dt>
            <dd>Telefon: [Telefon Hauptverein]</dd>
            <dd>Fax: [Fax Hauptverein, falls vorhanden]</dd>
            <dd>E-Mail: [E-Mail Hauptverein]</dd>

            <dt>Registereintrag:</dt>
            <dd>Eintragung im Vereinsregister</dd>
            <dd>Registergericht: [Amtsgericht Musterstadt]</dd>
            <dd>Registernummer: [VR 12345]</dd>

            <dt>Umsatzsteuer-ID:</dt>
            <dd>
              <em>Hinweis: Klären, ob für Ihren Verein eine USt-IdNr. erforderlich ist. Oft bei
                gemeinnützigen Vereinen nicht der Fall. Falls nicht, diesen Punkt weglassen oder "Nicht
                vorhanden" schreiben.</em>
            </dd>
          </dl>
        </section>

        <section>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
          <p>
            Tim Winterstein<br />
            [Anschrift Tim Winterstein, ODER: c/o SV Dettingen/Erms e.V., Vereinsanschrift]<br />
            [PLZ Ort]
          </p>
        </section>

        <section>
          <h2>Haftungsausschluss (Disclaimer)</h2>

          <p><strong className="sub-heading">Haftung für Inhalte</strong></p>
          <p>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
            Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch
            nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
            hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
            einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
            Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>

          <p><strong className="sub-heading">Haftung für Links</strong></p>
          <p>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
            Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
            Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Links umgehend entfernen.
          </p>

          <p><strong className="sub-heading">Urheberrecht</strong></p>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
            nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
            erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
            als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
            werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          <h2>Hinweis zur Online-Streitbeilegung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie
            unter <a href="https://ec.europa.eu/consumers/odr/" target="_blank"
              rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a> finden.
            Unsere E-Mail-Adresse finden Sie oben im Impressum bzw. bei den Kontaktdaten.
          </p>
          <p>
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            <em>(Diese Formulierung ist üblich, bitte für euren Verein prüfen.)</em>
          </p>
        </section>

        <section>
          <p className="generator-hinweis">
            Impressum teilweise erstellt mit dem <a href="https://impressum-generator.de"
              rel="nofollow">Impressum-Generator</a> von WebsiteWissen.com.
            Rechtstexte ggf. angepasst und ergänzt. Keine Rechtsberatung.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Imprint;
