import React from "react";
import "./Introduction.scss";
import { myDetails } from "../../constants/constants";

function Introduction() {
  return (
    <div className="container" id="introduction">
      <div className="skills-container">
        <h1>About Me</h1>
        <ul>
          {myDetails.summary.map((summary) => (
            <li key={summary}>{summary}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Introduction;
