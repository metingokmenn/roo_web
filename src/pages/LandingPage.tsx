import React from 'react';
import Navigation from '../components/Navigation';
import '../assets/styles/landing.css';
import '../assets/styles/navigation.css';

// Import images
import phoneMockup1 from '../assets/images/phone-mockup-1.png';
import phoneMockup2 from '../assets/images/phone-mockup-2.png';
import navigationPreview from '../assets/images/navigation-preview.jpg';
import rooLogo from '../assets/images/roo-logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <p>ELEKTRİKLİ ARAÇ KULLANICILARI İÇİN YOL ARKADAŞINIZ</p>
          <h1>Yolculuk Hiç Bu Kadar Kolay Olmamıştı</h1>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-text">
            <h2>Elektrikli Araç Yolculuklarınızı Kolaylaştırın</h2>
            <p>
              Elektrikli araçlarınızla yolculuğa çıkarken tüm şarj noktalarını kolayca planlayın.
              Roo ile Türkiye'nin her yerinde güvenli ve kesintisiz seyahat edin.
            </p>
          </div>
          <div className="app-preview">
            <img 
              src={phoneMockup1}
              alt="Roo App Preview" 
              className="phone-mockup"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="feature-section">
        <div className="feature-content">
          <div className="app-preview">
            <img 
              src={phoneMockup2}
              alt="Roo Navigation Preview" 
              className="phone-mockup"
            />
          </div>
          <div className="feature-text">
            <h2>Roo Premium ile Ayrıcalıkları Keşfedin</h2>
            <p>
              Roo, elektrikli araçlarınız için yeni premium özellikleri ile karşınızda. Daha
              detaylı analitik, özelleştirilmiş rota planlaması ve çok daha fazlası!
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="navigation-section">
        <h2>Akıllı Navigasyon, Sorunsuz Şarj.</h2>
        <img 
          src={navigationPreview}
          alt="Navigation Preview" 
          style={{ maxWidth: '100%', borderRadius: '10px' }}
        />
      </section>

      {/* Mission & Vision Section */}
      <div className="mission-vision">
        <div className="mission">
          <h3>Misyonumuz</h3>
          <p>
            Elektrikli araç kullanıcılarının seyahat deneyimini en üst düzeye çıkarmak için
            yenilikçi çözümler sunmak ve sürdürülebilir ulaşımı desteklemek.
          </p>
        </div>
        <div className="vision">
          <h3>Vizyonumuz</h3>
          <p>
            Elektrikli araç ekosisteminde öncü bir platform olarak, kullanıcılarımıza
            en iyi deneyimi sunmak ve sürdürülebilir ulaşımın geleceğini şekillendirmek.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={rooLogo} alt="Roo Logo" style={{ height: '40px' }} />
            <p>Türkiye'nin En İyi Elektrikli Araç Yol Arkadaşı</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 