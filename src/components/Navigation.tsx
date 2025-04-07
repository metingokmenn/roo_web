import React, { useState } from 'react';
import rooLogo from '../assets/images/roo-logo.png';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="nav-logo">
          <img src={rooLogo} alt="Roo" />
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features">Özellikler</a>
          <a href="#premium">Premium</a>
          <a href="#about">Hakkımızda</a>
          <a href="#contact">İletişim</a>
          <button className="download-button">
            Uygulamayı İndir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 