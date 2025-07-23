import React, { useEffect, useState } from "react";
import './index.css';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCarSide, FaTools, FaTrailer, FaClipboardCheck, FaSearchDollar, FaPumpSoap } from "react-icons/fa";

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 font-raleway">

    {/* Header */}
      <header className="bg-zinc-800 shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">

          {/* Logo mit Link zur Startseite */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/logo.svg"
                alt="Pfeiffer Mobilberatung Logo"
                className="h-auto max-h-[80px] w-auto object-contain"
                loading="eager"
              />
            </a>
          </div>


      {/* Navigation mittig mit Hintergrundkästchen */}
          <div className="flex-grow flex justify-center">
            <div className="flex space-x-6">
              <a href="#leistungen" className="bg-zinc-700 px-5 py-2 rounded-lg text-white text-lg font-semibold hover:text-green-400 transition">
                Leistungen
              </a>
              <a href="#ueber" className="bg-zinc-700 px-5 py-2 rounded-lg text-white text-lg font-semibold hover:text-green-400 transition">
                Über mich
              </a>
              <a href="#kontakt" className="bg-zinc-700 px-5 py-2 rounded-lg text-white text-lg font-semibold hover:text-green-400 transition">
                Kontakt
              </a>
            </div>
          </div>

          {/* WhatsApp Button rechts */}
          <div className="flex-shrink-0 text-right">
            <div className="flex flex-col items-end">
              <a
                href="https://wa.me/491714242377?text=Hallo%20Marc%2C%20ich%20m%C3%B6chte%20mein%20Fahrzeug%20bewerten%20lassen.%20Hier%20sind%20meine%20Infos%3A%0A%0A%E2%9C%8F%EF%B8%8F%20Baujahr%20%2F%20Erstzulassung%3A%20...%0A%E2%9C%8F%EF%B8%8F%20Kilometerstand%3A%20...%0A%E2%9C%8F%EF%B8%8F%20Vorbesitzer%3A%20...%0A%E2%9C%8F%EF%B8%8F%20Ausstattung%2F%20Umbauten%3A%20...%0A%E2%9C%8F%EF%B8%8F%20Vorsch%C3%A4den%20%2F%20Reparaturen%3A%20...%0A%E2%9C%8F%EF%B8%8F%20Bekannte%20M%C3%A4ngel%3A%20...%0A%E2%9C%8F%EF%B8%8F%20Fahrgestellnummer%20%28VIN%29%3A%20...%0A%F0%9F%93%B7%20Optional%3A%20Fotos%20als%20Anhang"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition whitespace-nowrap"
              >
                Fahrzeugbewertung
              </a>
              <span className="text-xs text-gray-400 mt-1">29,- € Servicepauschale</span>
            </div>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl font-extrabold mb-8 leading-tight tracking-tight text-white">Individuelle Mobilitätslösungen für Sie</h2>
        <p className="text-xl mb-10 leading-relaxed text-gray-300 max-w-3xl mx-auto">
          Von der Fahrzeugsuche bis zur Zulassung: persönliche Begleitung, professionelle Abwicklung, volle Entlastung – damit Sie entspannt ankommen, bevor Sie losfahren.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg hover:opacity-90 transition font-semibold"
        >
          Jetzt unverbindlich beraten lassen
        </button>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white text-black p-8 rounded-lg w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">Kontaktformular</h3>
            <form action="https://formspree.io/f/yourformid" method="POST" className="space-y-4">
              <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" required />
              <input type="email" name="email" placeholder="E-Mail" className="w-full p-2 border rounded" required />
              <textarea name="message" placeholder="Ihre Nachricht" rows="4" className="w-full p-2 border rounded" required></textarea>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded hover:opacity-80"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      )}
      
<section id="leistungen" className="bg-zinc-800 py-28 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl font-semibold mb-16 text-white">Leistungen</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
      {/* 1 */}
      <div className="bg-zinc-700 p-6 rounded-2xl text-gray-300 shadow-md hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4 text-white text-2xl">
          <FaSearchDollar />
          <h4 className="font-semibold text-xl">Kauf- & Verkaufsbegleitung</h4>
        </div>
        <p>
          Marktgerechte Preisbewertung, individuelle Beratung & Begleitung beim Kauf oder Verkauf.
        </p>
      </div>

      {/* 2 */}
      <div className="bg-zinc-700 p-6 rounded-2xl text-gray-300 shadow-md hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4 text-white text-2xl">
          <FaTools />
          <h4 className="font-semibold text-xl">Werkstattservice</h4>
        </div>
        <p>
          Hol- & Bringservice, Ersatzwagen-Organisation, Werkstattkommunikation – alles stressfrei aus einer Hand.
        </p>
      </div>

      {/* 3 */}
      <div className="bg-zinc-700 p-6 rounded-2xl text-gray-300 shadow-md hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4 text-white text-2xl">
          <FaTrailer />
          <h4 className="font-semibold text-xl">Fahrzeugüberführungen</h4>
        </div>
        <p>
          Per Achse oder Anhänger – offen oder geschlossen. Regional & bundesweit organisiert.
        </p>
      </div>

      {/* 4 */}
      <div className="bg-zinc-700 p-6 rounded-2xl text-gray-300 shadow-md hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4 text-white text-2xl">
          <FaClipboardCheck />
          <h4 className="font-semibold text-xl">Zulassungsdienste</h4>
        </div>
        <p>
          An-, Um- & Abmeldung inkl. Wunschkennzeichen, Kurzzeitkennzeichen & BO-Kraft – deutschlandweit.
        </p>
      </div>

      {/* 5 */}
      <div className="bg-zinc-700 p-6 rounded-2xl text-gray-300 shadow-md hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4 text-white text-2xl">
          <FaCarSide />
          <h4 className="font-semibold text-xl">Gutachtenservice</h4>
        </div>
        <p>
          Unfall- und Schadengutachten sowie Wertgutachten für Verkauf & Versicherung – über zertifizierte Partner.
        </p>
      </div>

      {/* 6 */}
      <div className="bg-zinc-700 p-6 rounded-2xl text-gray-300 shadow-md hover:shadow-xl transition">
        <div className="flex items-center gap-4 mb-4 text-white text-2xl">
          <FaPumpSoap />
          <h4 className="font-semibold text-xl">Fahrzeugaufbereitung</h4>
        </div>
        <p>
          Innen- & Außenreinigung, Lackpflege & professionelle Aufbereitung durch spezialisierte Partnerbetriebe.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Über mich */}
      <section id="ueber" className="py-28 px-6 bg-zinc-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-semibold mb-10 text-white"> Individuelle Betreuung mit System.</h3>
          <img
  src="/marc.svg"
  alt="Marc Pfeiffer"
  className="mx-auto mb-6 w-48 object-contain"
/>
          <p className="text-gray-300 leading-relaxed text-lg">
ㅤIch bin Marc Pfeiffer – Automobilkaufmann mit klarem Ziel: Ihnen Zeit, Nerven und Fehler zu ersparen.ㅤㅤ
ㅤㅤㅤEgal ob Fahrzeugwechsel, Reparatur oder Zulassung – ich übernehme die komplette Abwicklung.ㅤㅤ
ㅤㅤㅤSchnell, professionell und auf den Punkt.
Keine Warteschleifen, kein Papierkram, keine Unsicherheit.ㅤㅤ
ㅤㅤDafür Klarheit, Effizienz und ein Service, der wirklich funktioniert.ㅤㅤ
          </p>
        </div>
      </section>
  <section id="kontakt" className="w-full bg-zinc-800 py-28 px-0 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-4xl font-semibold mb-10 text-white">Kontakt aufnehmen</h3>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">Sie haben Fragen oder möchten direkt eine Beratung anfragen?</p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="mailto:info@pfeiffer-mobilberatung.de"
              className="flex items-center gap-3 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition"
            >
              <FaEnvelope className="text-lg" />
              info@pfeiffer-mobilberatung.de
            </a>

            <a
              href="tel:+491714242377"
              className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full hover:bg-gray-900 transition"
            >
              <FaPhoneAlt className="text-lg" />
              +49 171 4242377
            </a>

            <a
              href="https://wa.me/491714242377"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>

            <p className="text-white mt-6 text-base">
              📍 Raum Rostock & Umgebung
            </p>
          </div>
        </div>
      </section>

{/* Footer */}
<footer className="py-10 px-6 text-center text-sm text-gray-400 border-t border-zinc-700 bg-zinc-900">
  © {new Date().getFullYear()} Pfeiffer Mobilberatung. Alle Rechte vorbehalten.
</footer>


    </div>
  );
}
