import React, { useEffect, useState } from "react";
import './index.css';

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-900 text-gray-100 font-raleway">

      {/* Header */}
      <header className="bg-zinc-800 shadow-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.svg"
              alt="Pfeiffer Mobilberatung Logo"
              className="h-[90px] w-auto object-contain"
              loading="eager"
              
            />
          </div>
          <nav className="space-x-8 text-base">
            <a href="#leistungen" className="hover:text-white transition">Leistungen</a>
            <a href="#ueber" className="hover:text-white transition">Über mich</a>
            <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h2 className="text-5xl font-extrabold mb-8 leading-tight tracking-tight text-white">Individuelle Mobilitätslösungen für Sie</h2>
        <p className="text-xl mb-10 leading-relaxed text-gray-300 max-w-3xl mx-auto">
          Persönlicher Auto-Concierge für Fahrzeugsuche, Werkstattservice, Überführungen und mehr – diskret, zuverlässig und professionell.
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

      {/* Leistungsübersicht */}
      <section id="leistungen" className="bg-zinc-800 py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-semibold mb-16 text-center text-white">Unsere Leistungen</h3>
          <ul className="space-y-8 text-gray-300 text-base">
            <li>
              <strong className="text-white">Fahrzeugberatung & Verkaufsservice</strong><br />
              Marktgerechte Preisbewertung, individuelle Beratung & Begleitung beim Kauf oder Verkauf.
            </li>
            <li>
              <strong className="text-white">Werkstattservice</strong><br />
              Hol- & Bringservice, Organisation von Ersatzwagen, Kommunikation mit der Werkstatt – alles stressfrei aus einer Hand.
            </li>
            <li>
              <strong className="text-white">Fahrzeugüberführungen</strong><br />
              Überführungen per Achse oder Anhänger, offen oder geschlossen – regional und bundesweit organisiert.
            </li>
            <li>
              <strong className="text-white">Zulassungsdienste</strong><br />
              Bundesweite An-, Um- und Abmeldung, Wunschkennzeichen, Kurzzeitkennzeichen und BO-Kraft inklusive.
            </li>
            <li>
              <strong className="text-white">Gutachtenservice</strong><br />
              Unfall- und Schadengutachten sowie Wertgutachten für Verkauf und Versicherung – durch zertifizierte Partner.
            </li>
            <li>
              <strong className="text-white">Fahrzeugaufbereitung</strong><br />
              Innen- & Außenreinigung, Lackpflege und professionelle Aufbereitung durch spezialisierte Partnerbetriebe.
            </li>
          </ul>
        </div>
      </section>

      {/* Über mich */}
      <section id="ueber" className="py-28 px-6 bg-zinc-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-semibold mb-10 text-white">Über Marc Pfeiffer</h3>
          <img
  src="/marc.svg"
  alt="Marc Pfeiffer"
  className="mx-auto mb-6 w-48 object-contain"
/>
          <p className="text-gray-300 leading-relaxed text-lg">
            Ich bin Marc Pfeiffer, leidenschaftlicher Automobilkaufmann mit dem Blick fürs Wesentliche. Mit meiner Mobilberatung helfe ich Menschen, bessere Entscheidungen rund ums Auto zu treffen – ob beim Kauf, Verkauf oder im laufenden Betrieb. Mein Anspruch: verlässlich, diskret und auf Augenhöhe.
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-28 px-6 bg-zinc-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-semibold mb-10 text-white">Kontakt aufnehmen</h3>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">Sie haben Fragen oder möchten direkt eine Beratung anfragen?</p>
          <div className="text-base text-white space-y-2">
            <p><strong>📧</strong> kontakt@pfeiffer-mobilberatung.de</p>
            <p><strong>📱</strong> +49 [Deine Nummer]</p>
            <p><strong>📍</strong> Raum Rostock & Umgebung</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 text-center text-sm text-gray-400 border-t border-zinc-700">
        © {new Date().getFullYear()} Pfeiffer Mobilberatung. Alle Rechte vorbehalten.
      </footer>

    </div>
  );
}
