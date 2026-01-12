import React from "react";
import ServiceCard from "./ServiceCard";
import { servicesData } from "../data/services";
import "./Services.css";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="section-badge">What We Do</span>
          <h2 className="section-title">
            We're Really Good at
            <span className="gradient-text"> These Things</span>
          </h2>
          <p className="section-description">
            Whether you need a sleek new website, a mobile app that doesn't
            crash, or just someone to fix that WordPress mess—we've done it all.
            Here's what we're best at.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
