import { workExperience } from "../constants/constants";
import { getAssetUrl } from "../utils/assets";
import "./Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {workExperience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-header-row">
                    <div>
                      <h3 className="role">{exp.role}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="company company-link"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="company">{exp.company}</span>
                      )}
                    </div>
                    {exp.logo && (
                      <div className="company-logo-wrapper">
                        <img
                          src={getAssetUrl(`assets/companies/${exp.logo}`)}
                          alt={exp.company}
                          className="company-logo"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="timeline-meta">
                    <span className="duration">
                      {exp.start} - {exp.end}
                    </span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                {exp.responsibilities && (
                  <ul className="responsibilities">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
