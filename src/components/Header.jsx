import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src="/images/header-logo.png" alt="FoodPrep Logo" className="header-logo" />
        <span className="header-title">FOODPREP</span>
      </div>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <a href="#menu-section" className="nav-link">Menu</a>
        <a href="#" className="nav-link">Contact Us</a>
      </nav>
      <div className="header-right">
        <Link to="/cart">
          <img src="/images/basket_icon.png" alt="Cart" className="cart-icon" />
        </Link>
        <button className="sign-in-btn" onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </header>
  );
}

export default Header; 