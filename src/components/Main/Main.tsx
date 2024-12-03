import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import "./Main.scss";
import { myDetails } from "../../constants/constants";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export const socialLinks = (
  <>
    <a
      href={myDetails.gitLink}
      title={myDetails.gitLink}
      target="_blank"
      rel="noreferrer"
    >
      <GitHubIcon />
    </a>
    <a
      href={myDetails.linkedinLink}
      title={myDetails.linkedinLink}
      target="_blank"
      rel="noreferrer"
    >
      <LinkedInIcon />
    </a>
    <a
      href={`mailto:${myDetails.email}`}
      title={myDetails.email}
      target="_blank"
      rel="noreferrer"
    >
      <EmailIcon />
    </a>
    <a
      href={`tel:${myDetails.phone}`}
      title={myDetails.phone}
      target="_blank"
      rel="noreferrer"
    >
      <PhoneIcon />
    </a>
  </>
);
function Main() {
  function downloadResume() {}
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="./assets/dhruv.jpeg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">{socialLinks}</div>
          <h1>{myDetails.name}</h1>
          <p>{myDetails.title}</p>
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            onClick={downloadResume}
            href={"./Dhruv MERN CV.pdf"}
            download={true}
          >
            Resume
          </Button>
          <div className="mobile_social_icons">{socialLinks}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
