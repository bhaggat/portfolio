import { useState } from "react";
import { myDetails } from "../constants/constants";
import {
  MdEmail,
  MdLocationOn,
} from "react-icons/md";
import {
  FaLinkedin,
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
          <h2 className="section-title">Let's Connect &amp; Collaborate</h2>
          <p className="contact-subtitle">
            Open for technical leadership, full-stack development, architecture consulting, or full-time roles. Get in touch directly via email or LinkedIn!
          </p>
        </div>

        {/* Dedicated Contact Cards Grid */}
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

          {/* LinkedIn Profile Card */}
          <div className="contact-card">
            <div className="contact-card-icon linkedin-icon">
              <FaLinkedin size={26} />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">LinkedIn Profile</span>
              <a
                href={myDetails.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-value"
              >
                in/bhagatdhruv
              </a>
            </div>
            <div className="contact-card-actions">
              <a
                href={myDetails.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-action-btn primary linkedin-btn"
              >
                <FiSend size={14} />
                <span>Connect</span>
              </a>
              <button
                type="button"
                className="contact-action-btn icon-only"
                onClick={() => handleCopy(myDetails.linkedinLink, "linkedin")}
                title="Copy LinkedIn URL"
                aria-label="Copy LinkedIn URL"
              >
                {copiedField === "linkedin" ? (
                  <FaCheck size={14} style={{ color: "#34d399" }} />
                ) : (
                  <FaCopy size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="contact-card">
            <div className="contact-card-icon location-icon">
              <MdLocationOn size={26} />
            </div>
            <div className="contact-card-body">
              <span className="contact-card-label">Location &amp; Status</span>
              <span className="contact-card-value-static">
                {myDetails.location}
              </span>
            </div>
            <div className="contact-card-status">
              <span className="status-dot" />
              <span>Available for Remote &amp; Worldwide Roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
