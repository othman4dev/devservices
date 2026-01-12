import React from "react";
import themeConfig from "../config/theme.json";
import "./Contact.css";

const Contact = () => {
  const { email, phone, whatsapp } = themeConfig.contact;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsapp}`, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-badge">Let's Chat</span>
          <h2 className="section-title">
            Coffee's On Us
            <span className="gradient-text"> (Virtually, Anyway)</span>
          </h2>
          <p className="section-description">
            Got a project in mind? Questions about pricing? Just want to say hi?
            We're pretty friendly and usually respond within a few hours (during
            business hours, we promise).
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card" onClick={handleEmailClick}>
            <div className="contact-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <h3 className="contact-title">Email Us</h3>
            <p className="contact-value">{email}</p>
            <p className="contact-description">Best for detailed inquiries</p>
          </div>

          <div className="contact-card" onClick={handlePhoneClick}>
            <div className="contact-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <h3 className="contact-title">Call Us</h3>
            <p className="contact-value">{phone}</p>
            <p className="contact-description">Mon-Fri, 9am-5pm EST</p>
          </div>

          <div className="contact-card" onClick={handleWhatsAppClick}>
            <div className="contact-icon whatsapp">
              <i className="bi bi-whatsapp"></i>
            </div>
            <h3 className="contact-title">WhatsApp</h3>
            <p className="contact-value">Quick Chat</p>
            <p className="contact-description">Usually reply in ~15 min</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
