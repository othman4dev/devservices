import React from "react";
import "./ContactModal.css";
import themeConfig from "../config/theme.json";

const ContactModal = ({ isOpen, onClose, serviceTitle }) => {
  if (!isOpen) return null;

  const { email, phone, whatsapp } = themeConfig.contact;
  const message = `Hi, I want to know more about ${serviceTitle}`;
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
        <h3 className="modal-title">Get in Touch</h3>
        <p className="modal-subtitle">
          Choose your preferred way to contact us
        </p>

        <div className="contact-options">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option whatsapp"
          >
            <div className="option-icon">
              <i className="bi bi-whatsapp"></i>
            </div>
            <div className="option-content">
              <h4>WhatsApp</h4>
              <p>Quick chat about this service</p>
            </div>
          </a>

          <a
            href={`mailto:${email}?subject=Inquiry about ${serviceTitle}`}
            className="contact-option email"
          >
            <div className="option-icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <div className="option-content">
              <h4>Email</h4>
              <p>{email}</p>
            </div>
          </a>

          <a href={`tel:${phone}`} className="contact-option phone">
            <div className="option-icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <div className="option-content">
              <h4>Phone</h4>
              <p>{phone}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
