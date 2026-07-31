import { useState } from "react";
import { myDetails } from "../constants/constants";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { FiSend, FiStar } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header-wrapper">
          <div className="section-badge-pill">
            <FiStar className="badge-sparkle-icon" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="section-title">Let's Connect &amp; Work Together</h2>
          <p className="contact-subtitle">
            I'm always open to discussing new opportunities, technical architecture, consulting, or project collaborations. Reach out via any of the channels below!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid">
          {/* Email Card */}
          <div className="contact-card">
            <div className="contact-card-icon email-icon">
              <MdEmail size={26} />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Direct Email</span>
              <a
                href={`mailto:${myDetails.email}`}
                className="contact-card-value"
              >
                {myDetails.email}
              </a>
            </div>
            <div className="contact-card-actions">
              <a
                href={`mailto:${myDetails.email}?subject=Portfolio%20Inquiry%20-%20Dhruv%20Bhagat`}
                className="contact-action-btn primary"
              >
                <FiSend size={14} />
                <span>Send Email</span>
              </a>
              <button
                type="button"
                className="contact-action-btn icon-only"
                onClick={() => handleCopy(myDetails.email, "email")}
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedField === "email" ? (
                  <FaCheck size={14} style={{ color: "#34d399" }} />
                ) : (
                  <FaCopy size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="contact-card">
            <div className="contact-card-icon phone-icon">
              <MdPhone size={26} />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Phone &amp; WhatsApp</span>
              <a href={`tel:${myDetails.phone}`} className="contact-card-value">
                {myDetails.phone}
              </a>
            </div>
            <div className="contact-card-actions">
              <a
                href={myDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn whatsapp-btn"
              >
                <FaWhatsapp size={14} />
                <span>WhatsApp</span>
              </a>
              <button
                type="button"
                className="contact-action-btn icon-only"
                onClick={() => handleCopy(myDetails.phone, "phone")}
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedField === "phone" ? (
                  <FaCheck size={14} style={{ color: "#34d399" }} />
                ) : (
                  <FaCopy size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <div className="contact-card-icon location-icon">
              <MdLocationOn size={26} />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Location</span>
              <span className="contact-card-value-static">
                {myDetails.location}
              </span>
            </div>
            <div className="contact-card-status">
              <span className="status-dot" />
              <span>Open to Remote &amp; Worldwide Work</span>
            </div>
          </div>
        </div>

        {/* Social Profiles Banner */}
        <div className="contact-social-banner">
          <h3 className="social-banner-title">Connect Across Networks</h3>
          <div className="social-banner-links">
            <a
              href={myDetails.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-banner-btn github"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
              <span className="social-handle">@bhaggat</span>
            </a>

            <a
              href={myDetails.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-banner-btn linkedin"
            >
              <FaLinkedin size={18} />
              <span>LinkedIn</span>
              <span className="social-handle">in/bhagatdhruv</span>
            </a>

            <a
              href={`mailto:${myDetails.email}`}
              className="social-banner-btn email"
            >
              <MdEmail size={18} />
              <span>Email</span>
              <span className="social-handle">{myDetails.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
