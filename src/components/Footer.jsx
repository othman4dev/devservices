import React from "react";
import themeConfig from "../config/theme.json";
import "./Footer.css";

const Footer = () => {
  const { name: brandName, tagline } = themeConfig.branding;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">
              <i className="bi bi-lightning-charge-fill footer-icon"></i>
              {brandName}
            </h3>
            <p className="footer-description">
              {tagline}. Professional development services that transform ideas
              into reality.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">Web Development</a>
              </li>
              <li>
                <a href="#services">Mobile Development</a>
              </li>
              <li>
                <a href="#services">Web Design</a>
              </li>
              <li>
                <a href="#services">API Development</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#contact">Get in Touch</a>
              </li>
              <li>
                <a href="#about">About the Team</a>
              </li>
              <li>
                <a href="#blog">Blog & Insights</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#portfolio">Case Studies</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="bi bi-github"></i> GitHub
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-dribbble"></i> Dribbble
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 {brandName}. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
