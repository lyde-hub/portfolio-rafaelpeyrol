import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>

      <div className="project-card">
        <Link to="/projects/lowatem">
          <img
            src="/src/assets/projet/lowatem.png"
            alt="Lowatem"
            className="project-image"
          />
        </Link>
        <h2 className="project-title">Lowatem</h2>

        <Link to="/projects/graphe">
          <img
            src="/src/assets/projet/graphe.png"
            alt="Graphe"
            className="project-image"
          />
        </Link>
        <h2 className="project-title">Graphes</h2>
      </div>
    </div>
  );
}

export default Projects;
