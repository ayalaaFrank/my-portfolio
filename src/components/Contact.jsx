import React from "react";
import "../style/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Feel free to reach out – I’ll be happy to connect!
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <a href="mailto:ayalafrank2183@gmail.com">
            ayalafrank2183@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <span className="label">Phone:</span>
          <a href="tel:+972548422183">054-842-2183</a>
        </div>
      </div>
    </section>
  );
}
