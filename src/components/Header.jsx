import React, { useState, useEffect } from "react";
import themeConfig from "../config/theme.json";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { name: brandName, tagline } = themeConfig.branding;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "services", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection("home")}>
          <div className="logo-icon-wrapper">
            <i className="bi bi-lightning-charge-fill logo-icon"></i>
          </div>
          <div className="logo-content">
            <span className="logo-text">{brandName}</span>
            <span className="logo-tagline">{tagline}</span>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <a
            href="#home"
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <i className="bi bi-house-fill"></i>
            <span>Home</span>
          </a>
          <a
            href="#services"
            className={`nav-link ${
              activeSection === "services" ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("services");
            }}
          >
            <i className="bi bi-grid-fill"></i>
            <span>Services</span>
          </a>
          <a
            href="#contact"
            className={`nav-link ${
              activeSection === "contact" ? "active" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            <i className="bi bi-envelope-fill"></i>
            <span>Contact</span>
          </a>
          <button
            className="nav-cta"
            onClick={() => scrollToSection("contact")}
          >
            <span>Get Started</span>
          </button>
        </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
