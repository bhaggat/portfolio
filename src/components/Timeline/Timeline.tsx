import React from "react";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss";
import { workExperience } from "../../constants/constants";

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
                icon={
                  <BusinessCenterIcon
                    sx={{
                      color: "white",
                    }}
                  />
                }
              >
                <h3 className="vertical-timeline-element-title">
                  {experience.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.location}
                </h4>
                <p>{experience.company}</p>
                <ul>
                  {experience.responsibilities.map((responsibility) => {
                    return <li key={responsibility}>{responsibility}</li>;
                  })}
                </ul>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
