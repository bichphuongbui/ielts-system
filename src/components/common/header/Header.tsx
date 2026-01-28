import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../../assets/images/logo.png';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <div className="logo-content">
              <img src={logoImage} alt="Thầy Bảo IELTS Center" className="logo-image" />
              <span className="logo-text">Thầy Bảo IELTS CENTER</span>
            </div>
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="hamburger-menu" onClick={toggleMobileMenu} aria-label="Toggle menu">
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Navigation Menu */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMobileMenu}>
            Trang chủ
          </Link>
          <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
            Giới thiệu
          </Link>
          <Link to="/knowledge" className="nav-link" onClick={closeMobileMenu}>
            Kiến thức
          </Link>
          <Link to="/courses" className="nav-link" onClick={closeMobileMenu}>
            Khóa học
          </Link>
          <Link to="/news" className="nav-link" onClick={closeMobileMenu}>
            Tin tức
          </Link>
          {/* Mobile Auth Buttons */}
          <div className="nav-auth-mobile">
            <Link to="/login" className="btn-login-mobile" onClick={closeMobileMenu}>
              Đăng nhập
            </Link>
            <Link to="/register" className="btn-register-mobile" onClick={closeMobileMenu}>
              Đăng ký
            </Link>
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="header-auth">
          <Link to="/login" className="btn-login">
            Đăng nhập
          </Link>
          <Link to="/register" className="btn-register">
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
