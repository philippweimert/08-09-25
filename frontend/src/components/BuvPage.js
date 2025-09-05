import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Shield, Users, Building2, TrendingUp, ArrowRight, CheckCircle, Activity, AlertTriangle, Heart, Clock } from "lucide-react";

const BuvPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Erweiterte Absicherung",
      description: "Schutz über die gesetzliche Unfallversicherung hinaus"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Fürsorge für Mitarbeiter",
      description: "Zeigen Sie Verantwortung für das Wohlergehen Ihrer Mitarbeiter"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mitarbeiterbindung",
      description: "Stärken Sie die Bindung durch umfassenden Versicherungsschutz"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Unternehmensschutz",
      description: "Reduzieren Sie finanzielle Risiken für Ihr Unternehmen"
    }
  ];

  const coverageAreas = [
    {
      title: "Arbeitsunfälle",
      description: "Erweiterter Schutz bei Unfällen am Arbeitsplatz",
      features: ["24h-Schutz", "Erweiterte Leistungen", "Schnelle Hilfe", "Rehabilitation"]
    },
    {
      title: "Freizeitunfälle", 
      description: "Schutz auch außerhalb der Arbeitszeit",
      features: ["Freizeitaktivitäten", "Sport und Hobby", "Haushaltsunfälle", "Reiseunfälle"]
    },
    {
      title: "Berufskrankheiten",
      description: "Absicherung gegen berufsspezifische Gesundheitsrisiken",
      features: ["Präventive Maßnahmen", "Früherkennung", "Behandlungskosten", "Nachsorge"]
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
                Wir machen <span className="text-acencia-orange">bUV einfach!</span>
              </h1>
              
              <p className="text-xl text-acencia-blue mb-8 leading-relaxed">
                Erweitern Sie den Versicherungsschutz Ihrer Mitarbeiter mit unserer digitalen Lösung für die betriebliche Unfallversicherung.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">24h-Unfallschutz für Mitarbeiter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Erweiterte Leistungen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Digitale Verwaltung</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <button 
                  className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt informieren</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-acencia-blue">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Coming Soon Card */}
              <div className="bg-white border border-gray-100 rounded-lg p-8 text-center">
                <Activity className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Coming Soon
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wir entwickeln unsere digitale bUV-Lösung. Lassen Sie sich kostenfrei beraten und erfahren Sie als Erster von unserem Launch.
                </p>
                <button 
                  className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  Vormerken lassen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Vorteile der betrieblichen Unfallversicherung
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Mehr Sicherheit für Ihre Mitarbeiter und Ihr Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:bg-gray-50 transition-colors duration-150">
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-acencia-orange">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Unsere bUV-Leistungen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Umfassender Unfallschutz in allen Lebensbereichen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coverageAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors duration-150">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>
                
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-acencia-orange flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Prevention */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
                Prävention & Sicherheit
              </h2>
              <p className="text-lg text-acencia-blue mb-8 leading-relaxed">
                Mehr als nur Versicherung - wir helfen Ihnen dabei, Unfälle zu vermeiden und eine sichere Arbeitsumgebung zu schaffen.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Sicherheitsschulungen für Mitarbeiter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Risikobewertung am Arbeitsplatz</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Präventionsmaßnahmen</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-acencia-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white text-base">Notfallmanagement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-acencia-orange mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                  Unfallstatistiken
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Arbeitsunfälle pro Jahr</span>
                    <span className="font-semibold text-gray-900">871.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Wegeunfälle</span>
                    <span className="font-semibold text-gray-900">186.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Berufskrankheiten</span>
                    <span className="font-semibold text-gray-900">73.000</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-6">
                  Quelle: Deutsche Gesetzliche Unfallversicherung (DGUV)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Information Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Mehr zur betrieblichen Unfallversicherung
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Erfahren Sie alles Wichtige über die bUV für Ihr Unternehmen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link 
              to="/buv/x"
              className="group bg-white border border-gray-100 rounded-lg p-8 hover:bg-gray-50 hover:shadow-sm transition-all duration-150 ease-out"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-acencia-orange/20 group-hover:to-acencia-orange/30 transition-all duration-150">
                <Building2 className="w-6 h-6 text-acencia-orange" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                Für Unternehmen
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Alles Wichtige über die Vorteile, Leistungen und Umsetzung der bUV für Arbeitgeber.
              </p>
              
              <div className="flex items-center space-x-2 text-acencia-orange group-hover:text-acencia-orange/80 transition-colors duration-150">
                <span className="font-medium text-sm">Mehr erfahren</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </div>
            </Link>

            <div className="bg-white border border-gray-100 rounded-lg p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-gray-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                Für Arbeitnehmer
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                Informationen für Mitarbeiter folgen in Kürze. Lassen Sie sich über Updates informieren.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="font-medium text-sm">Coming Soon</span>
                <Clock className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 font-heading">
              Interessiert an unserer bUV-Lösung?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für eine unverbindliche Beratung zur betrieblichen Unfallversicherung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
              >
                <span>Kostenlose Beratung</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/kontakt"
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Kontakt aufnehmen</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuvPage;