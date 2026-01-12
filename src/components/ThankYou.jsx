import React, { useEffect, useState } from "react";
import themeConfig from "../config/theme.json";
import "./ThankYou.css";

const ThankYou = () => {
  const [currentTime, setCurrentTime] = useState("");
  const { email, whatsapp } = themeConfig.contact;

  useEffect(() => {
    const now = new Date();
    const timeString = now.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    setCurrentTime(timeString);
  }, []);

  const whatsappMessage = `Hi! I've just completed my payment at ${currentTime}. I'm excited to get started on my project. Could you please confirm receipt and let me know the next steps? Looking forward to working with you!`;

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsapp}?text=${encodedMessage}`, "_blank");
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Payment Confirmation - Ready to Start");
    const body = encodeURIComponent(
      `Hi,\n\nI've just completed my payment at ${currentTime}.\n\nI'm excited to get started on my project. Could you please confirm receipt and let me know the next steps?\n\nLooking forward to working with you!\n\nBest regards`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="thankyou">
      <div className="thankyou-container">
        <div className="thankyou-card">
          {/* Success Icon */}
          <div className="success-icon-wrapper">
            <div className="success-icon">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <div className="success-particles">
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
              <span className="particle"></span>
            </div>
          </div>

          {/* Title */}
          <h1 className="thankyou-title">Payment Successful!</h1>
          <p className="thankyou-subtitle">
            Your payment has been received and confirmed. We're excited to start
            working with you! Let's make your project a reality.
          </p>

          {/* Call to Action */}
          <h3 className="contact-heading">Contact Us Immediately</h3>
          <p className="contact-subheading">
            Get in touch now to kick off your project
          </p>

          {/* Contact Buttons */}
          <div className="contact-buttons">
            <button className="contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <i className="bi bi-whatsapp"></i>
              <div className="btn-info">
                <span className="btn-title">Message on WhatsApp</span>
                <span className="btn-badge">Recommended</span>
              </div>
            </button>

            <button className="contact-btn email-btn" onClick={handleEmailClick}>
              <i className="bi bi-envelope-fill"></i>
              <div className="btn-info">
                <span className="btn-title">Send Email</span>
              </div>
            </button>
          </div>

          {/* Contact Info */}
          <div className="contact-details">
            <div className="detail-item">
              <i className="bi bi-whatsapp"></i>
              <span>{whatsapp}</span>
            </div>
            <div className="detail-item">
              <i className="bi bi-envelope"></i>
              <span>{email}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
