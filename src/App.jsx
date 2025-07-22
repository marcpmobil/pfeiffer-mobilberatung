import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Leistungen from "./pages/Leistungen";
import UeberMich from "./pages/UeberMich";
import Kontakt from "./pages/Kontakt";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-900 text-white">
        <header className="bg-zinc-800 px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold">Pfeiffer Mobilberatung</h1>
          <nav className="space-x-6">
            <Link to="/">Start</Link>
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/ueber-mich">Über mich</Link>
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/ueber-mich" element={<UeberMich />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
    </Router>
  );
}
