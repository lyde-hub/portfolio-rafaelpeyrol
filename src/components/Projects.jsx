import { Link } from "react-router-dom";
import projects from "./projects/projectsData";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Projets</h1>
      <div className="projects-divider" />
      <div className="projects-grid">
        {projects.map((project) => (
          <Link key={project.slug} to={`/projects/${project.slug}`} className="project-card">
            <img src={project.thumbnail} alt={project.title} className="project-image" />
            <div className="project-overlay" />
            <h2 className="project-title">{project.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
