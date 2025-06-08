import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <img src="/images/footer-logo.png" alt="FoodPrep Logo" className="footer-logo" />
          <h2 className="footer-title">FOODPREP</h2>
          <p className="footer-desc">
            Food Prep is a full-stack project designed for hands-on teaching, helping students learn full-stack development. It's used by FACEPrep, an ed-tech company focused on equipping students with the skills to achieve their career aspirations.
          </p>
          <div className="footer-socials">
            <a href="#"><img src="/images/footer-social.png" alt="Facebook" /></a>
            <a href="#"><img src="/images/footer-social.png" alt="Twitter" /></a>
            <a href="#"><img src="/images/footer-social.png" alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer-company">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <ul>
            <li>+91 8765777021</li>
            <li>yoyo@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright 2025 © FoodPrep. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer; 