import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | KIZHEART",
  robots: "noindex, nofollow",
};

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Dave Di Napoli
              <br />
              Kizomba Tanzschule
              <br />
              Memminger Str. 41
              <br />
              89257 Illertissen
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">Kontakt</h2>
            <p>
              Telefon: +49 176 36137039
              <br />
              E-Mail: dave.dinapoli@me.com
              <br />
              Website:{" "}
              <a
                href="https://daveandtabea.de"
                className="text-purple-400 hover:text-purple-300"
              >
                https://daveandtabea.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE329593084
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Dave Di Napoli
              <br />
              Memminger Str. 41
              <br />
              89257 Illertissen
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              EU-Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
