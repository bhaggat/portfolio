import {
  personalProjects,
  webosmoticProjects,
  bcubeProjects,
  jeavioProjects,
} from "../constants/constants";
import { getSocialIcon, getTechIcon } from "../utils/icons";
import { getAssetUrl } from "../utils/assets";
import { useState } from "react";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  links?: {
    webLink?: string;
    githubLink?: string;
    playStoreLink?: string;
  };
  highlights?: string[];
  technologies: string[];
  thumbnail?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [showAllTech, setShowAllTech] = useState(false);

  const displayedTech = showAllTech
    ? project.technologies
    : project.technologies.slice(0, 4);

  const hiddenCount = project.technologies.length - 4;

  return (
    <div className="project-card">
      <div className="project-content">
        {/* Header: title + links */}
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-links">
            {project.links &&
              Object.entries(project.links).map(([key, url]) => {
                const { icon: Icon, color } = getSocialIcon(key);
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                  >
                    {Icon && <Icon size={16} style={{ color }} />}
                  </a>
                );
              })}
          </div>
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="project-thumbnail">
            <img
              src={getAssetUrl(`assets/projects/${project.thumbnail}`)}
              alt={project.title}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        )}

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Highlights */}
        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.slice(0, 2).map((highlight: string, i: number) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}

        {/* Tech Stack */}
        <div className="project-tech">
          {displayedTech.map((tech: string, i: number) => {
            const { icon: Icon, color } = getTechIcon(tech);
            return (
              <span
                key={i}
                className="tech-tag"
                style={{ borderColor: color ? `${color}44` : undefined }}
              >
                {Icon && (
                  <Icon
                    style={{
                      color: color,
                      flexShrink: 0,
                    }}
                    size={11}
                  />
                )}
                {tech}
              </span>
            );
          })}
          {!showAllTech && hiddenCount > 0 && (
            <span
              className="tech-tag tech-tag-more"
              onClick={() => setShowAllTech(true)}
              title={`Show ${hiddenCount} more`}
            >
              +{hiddenCount} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Reusable company group component ── */
interface CompanyGroupProps {
  name: string;
  projects: Project[];
}

const CompanyGroup = ({ name, projects }: CompanyGroupProps) => (
  <div className="company-group">
    <div className="company-group-header">
      <div className="company-group-dot" />
      <span className="company-group-title">{name}</span>
      <div className="company-group-header-line" />
    </div>
    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={`${name}-${project.title}`} project={project} />
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Personal Projects */}
        <h2 className="section-title">Personal Projects</h2>
        <div className="section-label" style={{ marginTop: "-2.5rem", marginBottom: "3rem" }}>
          <div className="section-label-line" />
          <span className="section-label-badge">Side Hustles &amp; OSS</span>
          <div className="section-label-line right" />
        </div>

        <div className="projects-grid" style={{ marginBottom: "var(--spacing-xl)" }}>
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Professional Work */}
        <h2 className="section-title">Professional Work</h2>
        <div className="section-label" style={{ marginTop: "-2.5rem", marginBottom: "3rem" }}>
          <div className="section-label-line" />
          <span className="section-label-badge">Client &amp; Company Projects</span>
          <div className="section-label-line right" />
        </div>

        <CompanyGroup name="Jeavio Private Limited" projects={jeavioProjects} />
        <CompanyGroup name="Webosmotic Private Limited" projects={webosmoticProjects} />
        <CompanyGroup name="Bcube Solutions" projects={bcubeProjects} />
      </div>
    </section>
  );
};

export default Projects;
