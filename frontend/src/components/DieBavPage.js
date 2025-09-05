import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Shield, Users, TrendingUp, ArrowRight, Building2, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Play } from "lucide-react";

const DieBavPage = () => {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(false);
  const location = useLocation();
  const [autoplay, setAutoplay] = useState(false);
  const [showVideoOverlay, setShowVideoOverlay] = useState(false);
  const [player, setPlayer] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for autoplay parameter
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('autoplay') === 'true') {
      setAutoplay(true);
    }
    
    // Check if URL has hash for challenges section
    if (window.location.hash === '#herausforderungen') {
      setTimeout(() => {
        setIsChallengesExpanded(true);
        // Scroll to challenges section after a short delay
        setTimeout(() => {
          const challengesElement = document.getElementById('herausforderungen');
          if (challengesElement) {
            challengesElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }, 500);
    }
  }, [location]);

  useEffect(() => {
    // Load YouTube Player API if autoplay is enabled
    if (autoplay) {
      const loadYouTubeAPI = () => {
        if (window.YT && window.YT.Player) {
          initializePlayer();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
          initializePlayer();
        };
      };

      const initializePlayer = () => {
        setTimeout(() => {
          try {
            const ytPlayer = new window.YT.Player('youtube-player', {
              videoId: 'Dw1XYzzPTkY',
              events: {
                onReady: (event) => {
                  setPlayer(event.target);
                  event.target.playVideo();
                },
                onStateChange: (event) => {
                  if (event.data === window.YT.PlayerState.ENDED) {
                    setShowVideoOverlay(true);
                  }
                }
              }
            });
          } catch (error) {
            console.error('Error initializing YouTube player:', error);
          }
        }, 500);
      };

      loadYouTubeAPI();
    }
  }, [autoplay]);

  const challenges = [
    {
      title: "Komplexe Verwaltung",
      description: "bAV-Verwaltung ist administrativ sehr komplex und fehleranfällig"
    },
    {
      title: "Zeitaufwand", 
      description: "Manuelle Prozesse binden wertvolle HR-Ressourcen"
    },
    {
      title: "Rechtsunsicherheit",
      description: "Ständige Gesetzesänderungen erfordern permanente Überwachung"
    },
    {
      title: "Systembrüche",
      description: "Fehlende Integration führt zu Medienbrüchen und Doppelerfassung"
    }
  ];

  const solutions = [
    {
      title: "Digitale Automatisierung",
      description: "Vollautomatisierte Abwicklung eliminiert Fehlerquellen"
    },
    {
      title: "HR-Entlastung",
      description: "Bis zu 80% Zeitersparnis durch intelligente Automatisierung" 
    },
    {
      title: "Compliance-Sicherheit",
      description: "Immer aktuell und rechtssicher durch permanente Updates"
    },
    {
      title: "Nahtlose Integration", 
      description: "Durchgängiger Datenfluss in bestehende HR-Systeme"
    }
  ];

  const moreInfoBoxes = [
    {
      title: "Für Unternehmen",
      description: "Alles Wichtige über Pflichten, Herausforderungen, Chancen und Vorteile der bAV für Arbeitgeber.",
      icon: <Building2 className="w-6 h-6" />,
      link: "/die-bav/x"
    },
    {
      title: "Für Arbeitnehmer", 
      description: "Erfahren Sie, wie Sie von steuerlichen Vorteilen profitieren und Ihre Altersvorsorge optimieren.",
      icon: <Users className="w-6 h-6" />,
      link: "/die-bav/y"
    },
    {
      title: "Aktuelles",
      description: "Bleiben Sie informiert über die neuesten Entwicklungen, Gesetze und Trends in der bAV.",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/die-bav/aktuelles"
    }
  ];

  return (
    <div className="min-h-screen bg-acencia">
      <Header />
      
      {/* Hero Section - Dark Corporate Theme */}
      <section className="bg-acencia py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column - 7/12 */}
            <div className="lg:col-span-7">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight font-heading">
                Wir machen <span className="text-acencia-orange">bAV einfach!</span>
              </h1>
              
              <p className="text-xl text-acencia-blue mb-8 leading-relaxed">
                Entlasten Sie Ihr HR-Team mit unserer vollautomatisierten, digitalen All-in-One-Plattform für die betriebliche Altersvorsorge.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">100% digitale Verwaltung</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">Vollautomatisierte Prozesse</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-acencia-orange rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-white text-base">DSGVO-konform & rechtssicher</span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <Button 
                  className="bg-acencia-orange hover:bg-acencia-orange/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-150 flex items-center justify-center space-x-2 focus:ring-2 focus:ring-acencia-orange focus:ring-offset-2 focus:ring-offset-acencia"
                  onClick={() => window.open('https://outlook.office365.com/owa/calendar/ACENCIAde@acencia.de/bookings/', '_blank')}
                >
                  <span>Jetzt starten</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-sm text-acencia-blue">
                Informationen aus dem Geschäftsbetrieb gemäß §93 HGB
              </p>
            </div>

            {/* Right Column - 5/12 */}
            <div className="lg:col-span-5">
              {/* Video Player */}
              <div className="bg-white/10 border border-acencia-blue/30 rounded-lg mb-8 relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                {autoplay ? (
                  <div className="relative w-full h-full">
                    <div id="youtube-player" className="absolute inset-0 w-full h-full"></div>
                    
                    {showVideoOverlay && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-6 text-center max-w-xs">
                          <h3 className="font-semibold text-gray-900 mb-4 font-heading">Video beendet</h3>
                          <div className="space-y-3">
                            <Button 
                              className="w-full bg-acencia-orange hover:bg-acencia-orange/90 text-white px-4 py-2 rounded-lg font-medium"
                              onClick={() => {
                                if (player) {
                                  player.playVideo();
                                  setShowVideoOverlay(false);
                                }
                              }}
                            >
                              Erneut ansehen
                            </Button>
                            <Button 
                              className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium"
                              onClick={() => window.location.href = '/gesetzliche-pflichten'}
                            >
                              Gesetzliche Pflichten - bAV
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-acencia-blue">
                    <div className="text-center">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-sm">Video wird geladen...</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Onboarding Card - White Card */}
              <div className="bg-white border border-gray-100 rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 font-heading">
                        <span className="text-green-600">0,00 €</span> Onboarding
                      </h3>
                      <p className="text-sm text-gray-600">
                        Bis zum <span className="font-medium">01.01.2027</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                      Kostenfrei
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions Section */}
      <section className="bg-acencia py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight font-heading">
              Herausforderungen & Lösungen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Von komplexen Problemen zu eleganten Lösungen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-red-600 mb-6 font-heading">Herausforderungen</h3>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900 font-heading">{challenge.title}</h4>
                        <p className="text-gray-600 text-sm">{challenge.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-green-600 mb-6 font-heading">Unsere Lösungen</h3>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900 font-heading">{solution.title}</h4>
                        <p className="text-gray-600 text-sm">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
              Weitere Informationen
            </h2>
            <p className="text-lg text-acencia-blue max-w-2xl mx-auto leading-relaxed">
              Vertiefen Sie Ihr Wissen über die betriebliche Altersvorsorge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreInfoBoxes.map((box, index) => (
              <Link 
                key={index}
                to={box.link}
                className="group bg-white border border-gray-100 rounded-lg p-8 hover:bg-gray-50 hover:shadow-sm transition-all duration-150 ease-out"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-acencia-orange/10 to-acencia-orange/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-acencia-orange/20 group-hover:to-acencia-orange/30 transition-all duration-150">
                  <div className="text-acencia-orange">
                    {box.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-heading">
                  {box.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {box.description}
                </p>
                
                <div className="flex items-center space-x-2 text-acencia-orange group-hover:text-acencia-orange/80 transition-colors duration-150">
                  <span className="font-medium text-sm">Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DieBavPage;