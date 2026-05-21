import { useState, useEffect } from "react";
import projects from "./projects/projectsData";
import "./Projects.css";

function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImgIndex(i => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft") setImgIndex(i => (i - 1 + project.images.length) % project.images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [project, onClose]);

  const techs = project.technologies.split(",").map(t => t.trim());
  const prev = () => setImgIndex(i => (i - 1 + project.images.length) % project.images.length);
  const next = () => setImgIndex(i => (i + 1) % project.images.length);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h1 className="modal-title">{project.title}</h1>

        {project.images.length > 0 && (
          <>
            <div className="modal-slider">
              {project.images.length > 1 && (
                <button className="slider-arrow left" onClick={prev}>‹</button>
              )}
              <img src={project.images[imgIndex]} alt={`${project.title} ${imgIndex + 1}`} className="slider-img" />
              {project.images.length > 1 && (
                <button className="slider-arrow right" onClick={next}>›</button>
              )}
            </div>
            {project.images.length > 1 && (
              <div className="slider-dots">
                {project.images.map((_, i) => (
                  <span key={i} className={`dot${i === imgIndex ? " active" : ""}`} onClick={() => setImgIndex(i)} />
                ))}
              </div>
            )}
          </>
        )}

        {project.description.map((para, i) => <p key={i}>{para}</p>)}

        <h2>Compétences acquises</h2>
        <ul>
          {project.skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>

        <h2>Technologies</h2>
        <div className="tech-badge">
          {techs.map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <div className="projects">
      <h1>Projets</h1>
      <div className="projects-divider" />
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.slug} className="project-card" onClick={() => setSelected(project)}>
            {project.thumbnail
              ? <img src={project.thumbnail} alt={project.title} className="project-image" />
              : <div className="project-image project-no-image" />
            }
            <div className="project-overlay" />
            <h2 className="project-title">{project.title}</h2>
          </div>
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default Projects;
