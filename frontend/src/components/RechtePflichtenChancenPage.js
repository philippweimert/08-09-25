import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { ArrowRight, Scale, Landmark, Star, BrainCircuit } from "lucide-react";

const RechtePflichtenChancenPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-acencia">
      <Header />

      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight tracking-tight font-heading">
            bAV – Pflichten, Chancen, Vorteile
          </h1>
          <p className="text-xl text-acencia-blue leading-relaxed">
            Ihre gesetzlich sichere und steuerlich optimierte Altersvorsorge
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Section 1: Gesetzliche Pflichten */}
            <div className="bg-acencia-dark p-8 rounded-lg">
              <div className="flex items-center text-acencia-orange mb-4">
                <Scale className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-semibold text-white font-heading">Gesetzliche Pflichten für Arbeitgeber</h2>
              </div>
              <ul className="list-disc list-inside text-acencia-blue space-y-2">
                <li>Anspruch auf Entgeltumwandlung gemäß § 1a Abs. 1 BetrAVG</li>
                <li>Pflichtzuschuss von 15 % gemäß § 1a Abs. 1a BetrAVG</li>
                <li>Haftung und Informationspflicht bei bAV-Zusagen</li>
              </ul>
            </div>

            {/* Section 2: Steuerliche Vorteile */}
            <div className="bg-acencia-dark p-8 rounded-lg">
              <div className="flex items-center text-acencia-orange mb-4">
                <Landmark className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-semibold text-white font-heading">Steuerliche Vorteile</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-acencia-blue">
                <div>
                  <h3 className="font-semibold text-white mb-2">Arbeitgeber:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Beiträge als Betriebsausgaben absetzbar</li>
                    <li>Sozialversicherungsersparnis durch Entgeltumwandlung</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Arbeitnehmer:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Steuerfreiheit nach § 3 Nr. 63 EStG bis 8 % der BBG</li>
                    <li>Sozialversicherungsfreiheit bis 4 % der BBG</li>
                    <li>Verlagerung der Steuerlast in die Rentenphase</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3: Vorteile für Unternehmen und Mitarbeitende */}
            <div className="bg-acencia-dark p-8 rounded-lg">
              <div className="flex items-center text-acencia-orange mb-4">
                <Star className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-semibold text-white font-heading">Vorteile für alle Beteiligten</h2>
              </div>
              <p className="text-acencia-blue">
                <strong>Arbeitgeber:</strong> Mitarbeiterbindung, Liquiditätsvorteile, Imagegewinn
                <br />
                <strong>Arbeitnehmer:</strong> Zusatzvorsorge, Zuschüsse, soziale Sicherheit
              </p>
            </div>

            {/* Section 4: Automatisierte Verwaltung */}
            <div className="bg-acencia-dark p-8 rounded-lg">
              <div className="flex items-center text-acencia-orange mb-4">
                <BrainCircuit className="w-8 h-8 mr-4" />
                <h2 className="text-2xl font-semibold text-white font-heading">Digitale Verwaltung durch externe Dienstleister</h2>
              </div>
              <ul className="list-disc list-inside text-acencia-blue space-y-2">
                <li>Effizienz und Rechtssicherheit durch Automatisierung</li>
                <li>DSGVO-konforme Portale für Mitarbeitende</li>
                <li>Entlastung der HR-Abteilung</li>
                <li>Rechtliche Grundlage: BaFin-Rundschreiben 08/2020 (MaGo für EbAV)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RechtePflichtenChancenPage;
