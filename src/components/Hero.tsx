import { myDetails } from "../constants/constants";
import { getAssetUrl } from "../utils/assets";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p
              className="hero-greeting animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, my name is
            </p>
            <h1
              className="hero-name animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              {myDetails.name}
            </h1>
            <h2
              className="hero-title animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {myDetails.title}
            </h2>
            <div
              className="hero-summary animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {myDetails.summary.map((paragraph, index) => (
                <p key={`summary-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div
              className="hero-actions animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={myDetails.linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-btn hero-linkedin"
                aria-label="Connect on LinkedIn"
                title="Connect on LinkedIn"
              >
                <span className="hero-link-icon">
                  <FaLinkedin size={20} />
                </span>
                <span className="hero-link-text">Connect on LinkedIn</span>
                <FiExternalLink className="hero-link-arrow" size={14} />
              </a>

              <a
                href={getAssetUrl(`assets/${myDetails.resume}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-btn hero-resume"
                download
                aria-label="Download Resume"
                title="Download Resume"
              >
                <span className="hero-link-icon resume-download-icon">
                  <FaDownload size={17} />
                </span>
                <span className="hero-link-text">Download Resume</span>
              </a>

              <a
                href={myDetails.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-link-btn hero-github"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <span className="hero-link-icon">
                  <FaGithub size={20} />
                </span>
                <span className="hero-link-text">GitHub</span>
                <FiExternalLink className="hero-link-arrow" size={14} />
              </a>
            </div>
          </div>

          <div
            className="hero-avatar-container animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="hero-avatar-wrapper">
              <img
                src={getAssetUrl(`assets/${myDetails.avatar}`)}
                alt={myDetails.name}
                className="hero-avatar"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
