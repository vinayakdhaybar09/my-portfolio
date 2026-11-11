import React from "react";
import { FiExternalLink } from "react-icons/fi";
import experience from "../data/experience.json";

const Experience = () => {
  return (
    <div id="experience">
      <header>
        <h3>
          02. <span>Experience</span>
        </h3>
      </header>
      <section>
        {experience.map((item) => (
          <article key={item.name}>
            <p className="exp-category">{item.category}</p>
            <div className="exp-title">
              <p className="exp-name">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name} <FiExternalLink />
                  </a>
                ) : (
                  item.name
                )}
              </p>
              <span className="exp-scale">{item.scale}</span>
            </div>
            <p className="exp-summary">{item.summary}</p>
            <p className="exp-label">The challenge</p>
            <p className="exp-challenge">{item.challenge}</p>
            <p className="exp-label">What I did</p>
            <ul>
              {item.contributions.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {item.links && (
              <div className="exp-links">
                {item.links.map((l) => (
                  <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} <FiExternalLink />
                  </a>
                ))}
              </div>
            )}
            <footer>
              {item.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </footer>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Experience;
