import React from "react";
import { FaFigma, FaLinkedinIn } from "react-icons/fa";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../newStyles/DetailWorkComp.css";

const ProjectSection = ({
  imageSrc,
  altText,
  projectName,
  projectDescription,
  technologies,
  figmaLink,
  githubLink,
  liveLink,
  linkedinLink,
  reverse,
}) => {
  return (
    <section className={`project-section ${reverse ? "reverse" : ""}`}>
      <aside className="project-image">
        <img
          src={imageSrc}
          alt={altText}
          height={"100%"}
          width={"100%"}
          style={{ objectFit: "contain" }}
        />
      </aside>
      <main
        className="project-details"
        style={{ alignItems: reverse ? "start" : null }}
      >
        <p className="project-title">Featured Project</p>
        <p className="project-name">{projectName}</p>
        <p className="project-description">{projectDescription}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {figmaLink !== "" && (
            <a href={figmaLink} target="_blank" rel="noopener noreferrer">
              <FaFigma />
            </a>
          )}
          {linkedinLink !== "" && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          )}
          {githubLink !== "" && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
          )}
          {liveLink !== "" && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
            </a>
          )}
        </div>
      </main>
    </section>
  );
};

export default ProjectSection;
