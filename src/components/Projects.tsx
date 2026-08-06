import { useState } from "react";
import {
  personalProjects,
  webosmoticProjects,
  bcubeProjects,
  jeavioProjects,
} from "../constants/constants";
import { getSocialIcon, getTechIcon } from "../utils/icons";
import { getAssetUrl } from "../utils/assets";
import { FiCode, FiExternalLink, FiCheckCircle, FiStar } from "react-icons/fi";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  links?: {
    webLink?: string;
    githubLink?: string;
    playStoreLink?: string;
    appStore?: string;
    chromeWebStoreLink?: string;
    npmLink?: string;
    vscodeLink?: string;
    [key: string]: string | undefined;
  };
  highlights?: string[];
  technologies: string[];
  thumbnail?: string;
  showFullImage?: boolean;
  invertImage?: boolean;
  backgroundColor?: string;
}

interface ProjectCardProps {
  project: Project;
  badgeLabel?: string;
  badgeType?: "personal" | "jeavio" | "webosmotic" | "bcube";
}

const ProjectCard = ({
  project,
  badgeLabel = "Project",
  badgeType = "personal",
}: ProjectCardProps) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const [imgError, setImgError] = useState(false);

  const displayedTech = showAllTech
    ? project.technologies
    : project.technologies.slice(0, 4);

  const hiddenCount = project.technologies.length - 4;
  const shouldInvert =
    project.invertImage || project.title.toLowerCase().includes("nda");

  return (
    <div className="project-card">
      {/* Card Header: Badge + Action Links */}
      <div className="project-card-top">
        <span className={`project-badge badge-${badgeType}`}>{badgeLabel}</span>
        <div className="project-links">
          {project.links &&
            Object.entries(project.links).map(([key, url]) => {
              if (!url) return null;
              const { icon: Icon, color, defaultLabel } = getSocialIcon(key, url);
              const label =
                key === "webLink"
                  ? "Live Web"
                  : key === "githubLink"
                  ? "GitHub"
                  : key === "playStoreLink" || key === "playStore" || key === "android" || key === "androidLink"
                  ? "Play Store"
                  : key === "appStore"
                  ? "App Store"
                  : key === "chromeWebStoreLink" || key === "chromeWebStore"
                  ? "Chrome Web Store"
                  : key === "npmLink"
                  ? "NPM Package"
                  : key === "vscodeLink"
                  ? "VS Code Extension"
                  : defaultLabel || key;

              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  aria-label={label}
                  title={label}
                  style={
                    {
                      "--btn-brand-color": color,
                    } as React.CSSProperties
                  }
                >
                  {Icon ? (
                    <Icon size={16} style={{ color }} />
                  ) : (
                    <FiExternalLink size={16} />
                  )}
                  <span className="link-tooltip">{label}</span>
                </a>
              );
            })}
        </div>
      </div>

      <div className="project-content">
        {/* Project Title */}
        <h3 className="project-title">{project.title}</h3>

        {/* Thumbnail displaying whole icon without cropping */}
        {project.thumbnail && !imgError ? (
          <div
            className="project-thumbnail"
            style={
              project.backgroundColor
                ? { backgroundColor: project.backgroundColor }
                : undefined
            }
          >
            <img
              src={getAssetUrl(`assets/projects/${project.thumbnail}`)}
              alt={project.title}
              onError={() => setImgError(true)}
              className={`project-thumbnail-img ${
                shouldInvert ? "invert-dark-img" : ""
              }`}
              loading="lazy"
            />
            <div className="thumbnail-overlay" />
          </div>
        ) : (
          <div className="project-thumbnail-fallback">
            <div className="fallback-pattern" />
            <div className="fallback-content">
              <FiCode className="fallback-icon" size={24} />
              <span className="fallback-title">{project.title}</span>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="project-description">{project.description}</p>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="project-highlights">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i}>
                <FiCheckCircle className="highlight-icon" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Stack Pills */}
        <div className="project-tech">
          {displayedTech.map((tech, i) => {
            const { icon: Icon, color } = getTechIcon(tech);
            return (
              <span
                key={i}
                className="tech-tag"
                style={{
                  borderColor: color ? `${color}38` : undefined,
                  backgroundColor: color ? `${color}12` : undefined,
                }}
              >
                {Icon && (
                  <Icon
                    style={{
                      color: color || "var(--primary)",
                      flexShrink: 0,
                    }}
                    size={12}
                  />
                )}
                <span>{tech}</span>
              </span>
            );
          })}
          {!showAllTech && hiddenCount > 0 && (
            <button
              type="button"
              className="tech-tag tech-tag-more"
              onClick={() => setShowAllTech(true)}
              title={`Show ${hiddenCount} more technologies`}
            >
              +{hiddenCount} more
            </button>
          )}
          {showAllTech && project.technologies.length > 4 && (
            <button
              type="button"
              className="tech-tag tech-tag-less"
              onClick={() => setShowAllTech(false)}
            >
              Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ── Company Group Component ── */
interface CompanyGroupProps {
  name: string;
  badgeType: "jeavio" | "webosmotic" | "bcube";
  projects: Project[];
}

const CompanyGroup = ({ name, badgeType, projects }: CompanyGroupProps) => (
  <div className="company-group">
    <div className="company-group-header">
      <div className="company-group-dot" />
      <span className="company-group-title">{name}</span>
      <div className="company-group-header-line" />
    </div>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <ProjectCard
          key={`${name}-${index}-${project.title}`}
          project={project}
          badgeLabel={name.split(" ")[0]}
          badgeType={badgeType}
        />
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header-wrapper">
          <div className="section-badge-pill">
            <FiStar className="badge-sparkle-icon" />
            <span>PORTFOLIO &amp; WORKS</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A showcase of web applications, mobile apps, developer tools, and
            enterprise systems I've architected &amp; built.
          </p>
        </div>

        {/* 1. Personal Projects Section */}
        <div className="company-group" style={{ marginBottom: "4rem" }}>
          <div className="company-group-header">
            <div className="company-group-dot personal-dot" />
            <span className="company-group-title">
              Personal Projects &amp; Open Source
            </span>
            <div className="company-group-header-line" />
          </div>
          <div className="projects-grid">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={`personal-${index}`}
                project={project}
                badgeLabel="Personal"
                badgeType="personal"
              />
            ))}
          </div>
        </div>

        {/* 2. Professional Work Section */}
        <div
          className="section-label"
          style={{ marginTop: "1rem", marginBottom: "3.5rem" }}
        >
          <div className="section-label-line" />
          <span className="section-label-badge">Professional Work</span>
          <div className="section-label-line right" />
        </div>

        <CompanyGroup
          name="Jeavio Private Limited"
          badgeType="jeavio"
          projects={jeavioProjects}
        />
        <CompanyGroup
          name="Webosmotic Private Limited"
          badgeType="webosmotic"
          projects={webosmoticProjects}
        />
        <CompanyGroup
          name="Bcube Solutions"
          badgeType="bcube"
          projects={bcubeProjects}
        />
      </div>
    </section>
  );
};

export default Projects;
