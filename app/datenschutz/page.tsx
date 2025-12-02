import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | KIZHEART",
  robots: "noindex, nofollow",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black py-16 px-4 pb-24">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8"
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website:
            </p>
            <p>
              Dave Di Napoli
              <br />
              Memminger Str. 41
              <br />
              89257 Illertissen
              <br />
              Telefon: +49 176 36137039
              <br />
              E-Mail: dave.dinapoli@me.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Zweck dieser Website
            </h2>
            <p>
              Diese Website dient ausschließlich als Weiterleitungsseite. Sie
              informiert Besucher darüber, dass die Domain kizheart.com zu
              daveandtabea.de umgezogen ist und leitet automatisch auf die neue
              Website weiter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Hosting
            </h2>
            <p>Diese Website wird bei Vercel Inc. gehostet:</p>
            <p>
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789, USA
            </p>
            <p>
              Vercel verarbeitet zur Bereitstellung der Website automatisch
              technische Daten (Server-Logs), darunter:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP-Adresse</li>
              <li>Browsertyp und -version</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Diese Daten werden zur Sicherstellung des Betriebs der Website
              erhoben und nach kurzer Zeit automatisch gelöscht. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
              sicheren Websitebetrieb).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Keine Cookies
            </h2>
            <p>
              <strong className="text-white">
                Diese Website verwendet keine Cookies.
              </strong>{" "}
              Es werden keine Tracking-, Analyse- oder Marketing-Cookies
              gesetzt. Ein Cookie-Banner ist daher nicht erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Keine Analysetools
            </h2>
            <p>
              Auf dieser Website werden keine Analysetools wie Google Analytics
              oder ähnliche Dienste eingesetzt. Es findet kein Tracking Ihres
              Nutzerverhaltens statt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Externe Links
            </h2>
            <p>
              Diese Website enthält einen Link zur neuen Website
              daveandtabea.de. Für die Datenverarbeitung auf der Zielseite gilt
              die dortige Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie
              das Recht auf Datenübertragbarkeit und Widerspruch. Bei Fragen
              wenden Sie sich bitte an die oben genannte Kontaktadresse.
            </p>
            <p>
              Darüber hinaus haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Aktualität
            </h2>
            <p>Stand dieser Datenschutzerklärung: Dezember 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
