import React from 'react';
import './LoginModal.css';

function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2 className="modal-title">Log In</h2>
        <form className="modal-form">
          <input type="email" placeholder="Your Email" className="modal-input" />
          <input type="password" placeholder="Password" className="modal-input" />
          <button type="submit" className="modal-login-btn">Log In</button>
          <div className="modal-terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">By continuing, I agree to terms & privacy policy</label>
          </div>
        </form>
        <div className="modal-create-account">
          Create a new account? <a href="#">Click here</a>
        </div>
        <div className="modal-divider"></div>
        <button className="modal-google-btn">
          <span className="google-icon">G</span> Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginModal; 