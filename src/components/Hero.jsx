import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <i className="bi bi-lock badge-icon"></i>
          <span>Trusted by 200+ Companies</span>
        </div>
        <h1 className="hero-title">
          We Build Apps That People
          <span className="gradient-text"> Actually Want to Use</span>
        </h1>
        <p className="hero-description">
          Forget the jargon. We're a team of developers and designers who love
          creating digital products that solve real problems. From that first
          wireframe to your product going live, we've got your back.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Let's Talk</button>
          <button className="btn-secondary">See Our Work</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">247</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat">
            <div className="stat-number">6 Years</div>
            <div className="stat-label">In Business</div>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
