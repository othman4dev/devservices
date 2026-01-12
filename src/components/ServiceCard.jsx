import React, { useState } from "react";
import "./ServiceCard.css";
import ContactModal from "./ContactModal";

const ServiceCard = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="service-card">
        <div className="service-icon">
          <i className={service.icon}></i>
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index} className="service-feature">
              <span className="feature-dot">•</span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="service-button" onClick={() => setIsModalOpen(true)}>
          Get Started
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceTitle={service.title}
      />
    </>
  );
};

export default ServiceCard;
