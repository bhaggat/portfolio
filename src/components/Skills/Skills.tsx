import React from "react";
import { skills } from "../../constants/constants";

function Skills() {
  return (
    <div className="container" id="skills">
      <div className="skills-container">
        <h1>Skills</h1>
        <h3>Technical Skills</h3>
        <ul>
          {Object.keys(skills.technical).map((skillType) => {
            return (
              <li key={skillType}>
                {skillType}: {skills.technical[skillType].join(", ")}
              </li>
            );
          })}
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          {skills.soft.map((skillType) => {
            return <li key={skillType}>{skillType}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Skills;
