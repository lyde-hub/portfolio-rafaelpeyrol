import { useParams } from "react-router-dom";
import projects from "./projectsData";
import "./ProjectPage.css";

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="project-detail">
        <a href="/#projects" className="back-button">← Retour aux projets</a>
        <h1>Projet introuvable</h1>
      </div>
    );
  }

  const techs = project.technologies.split(",").map((t) => t.trim());

  return (
    <div className="project-detail">
      <a href="/#projects" className="back-button">← Retour aux projets</a>
      <h1>{project.title}</h1>

      <div className="project-images">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt={`${project.title} ${i + 1}`} className="project-img" />
        ))}
      </div>

      {project.description.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      <h2>Compétences acquises</h2>
      <ul>
        {project.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <h2>Technologies</h2>
      <div className="tech-badge">
        {techs.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export default ProjectPage;
