import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { workExperience } from "../constants/constants";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {workExperience.map((experience) => {
            return (
              <VerticalTimelineElement
                key={experience.role}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date={`${experience.start} - ${experience.end}`}
                iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.company}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.location}
                </h4>
                <p>{experience.role}</p>
                <ul>
                  {experience.responsibilities.map((responsibility) => {
                    return <li key={responsibility}>{responsibility}</li>;
                  })}
                </ul>
                {/* <p>{experience.responsibilities}</p> */}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
