import { myDetails } from "../constants/constants";
import { getAssetUrl } from "../utils/assets";
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-socials">
          <a
            href={myDetails.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={myDetails.gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={`mailto:${myDetails.email}`}
            className="footer-social-link"
            aria-label="Send Email"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a
            href={getAssetUrl(`assets/${myDetails.resume}`)}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="footer-social-link"
            aria-label="Download Resume"
            title="Download Resume"
          >
            <FaDownload size={17} />
          </a>
        </div>
        <div className="footer-text">
          <p>
            Designed & Built by{" "}
            <span className="footer-author">{myDetails.name}</span>
          </p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
