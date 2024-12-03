import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.scss";
import { myDetails } from "../../constants/constants";
import { socialLinks } from "../Main/Main";

function Footer() {
  return (
    <footer>
      <div>{socialLinks}</div>
    </footer>
  );
}

export default Footer;
