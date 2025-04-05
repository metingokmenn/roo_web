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
      {/* The Navigation component is imported and rendered here */}
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
            Elektrikli aracınızla yolculuk yaparken şarj istasyonu aramak veya en uygun rotayı belirlemek zaman kaybına dönüşmesin. 
            Roo ile Türkiye genelindeki tüm şarj istasyonlarına kolayca erişebilir, tek dokunuşla en iyi rota planlamasını yapabilirsiniz. 
            Harici bir harita sağlayıcısına ihtiyaç duymadan, adım adım yönlendirme ile en konforlu rotayı keşfedin. Sağ dön, sola dön komutlarıyla güvenle ilerleyin.
            Fiyat karşılaştırmaları ve tasarruf ipuçlarıyla yolculuğunuzu en verimli şekilde planlayın!
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
            Roo, standart kullanımın yanı sıra premium avantajlar da sunuyor.
            Kesintisiz navigasyon, özel indirimler ve gelişmiş özelliklerle yolculuğunuzu daha konforlu hale getirmek için premium üyelik seçeneklerimizi keşfedin.
            Planlarımızı görüntülemek ve detaylı bilgi almak için
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="navigation-section">
        <h2>Akıllı Navigasyon, Sorunsuz Şarj.</h2>
        <img className='navigation-preview' src={navigationPreview} alt="navigationPreview" />
        <div className="mission-vision">
          <div className="mission">
            <h3>Misyonumuz</h3>
            <p>
              Elektrikli araç sahipleri ve şarj istasyonları için entegre, kullanıcı dostu ve verimli bir platform sunarak, sürdürülebilir ulaşımın yaygınlaşmasına katkı sağlamak. Teknolojiyi ve inovasyonu ile şarj süreçlerini daha kolay ve erişilebilir hale getirmek.
            </p>
          </div>
          <div className="separator"></div>
          <div className="vision">
            <h3>Vizyonumuz</h3>
            <p>
              Elektrikli araç kullanıcılarının yolculuklarını daha akıllı, verimli ve kesintisiz hale getiren bir ekosistem oluşturmak. Türkiye'de ve globalde sürdürülebilir mobilite çözümleri geliştirerek şarj altyapısını güçlendirmek ve kullanıcı deneyimini en üst seviyeye taşımak.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={rooLogo} alt="Roo Logo" style={{ height: '40px' }} />
            <span style={{ fontSize: '32px', color: 'white', marginLeft: '10px' }}>Roo</span>
          </div>
          <div className="footer-address">
            <p>Rootech Yazılım Donanım Ltd. Şti.</p>
            <p>Hatun Mah. 1.Mezra Sk. No:1</p>
            <p>Soma, Manisa 45500</p>
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