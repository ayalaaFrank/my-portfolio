import React from "react";
import "../style/Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ayala Frank</span> <br />
            Software Developer
          </h1>
          <p className="hero-subtitle">
            Passionate about creating modern, efficient, and user-friendly web
            applications.
          </p>
          <div className="hero-buttons">
            <a className="btn btn-outline" href="#contact">
              Contact Me
            </a>
            <a className="btn btn-primary" href="#projects">
              My Projects
            </a>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="illustration-card">
            <div className="card-header">
              <div className="play-button" aria-label="Play video">
                ▶
              </div>
              <div className="lines">
                <div className="line"></div>
                <div className="line short"></div>
              </div>
            </div>
            <div className="card-grid">
              <div className="grid-item large"></div>
              <div className="grid-column">
                <div className="grid-item small"></div>
                <div className="grid-item medium"></div>
              </div>
            </div>
            <div className="card-footer">
              <div className="footer-icon"></div>
              <div className="footer-bar"></div>
            </div>
            <div className="floating-gear">⚙</div>
          </div>
          <div className="background-circle"></div>
        </div>
      </div>
    </section>
  );
}
