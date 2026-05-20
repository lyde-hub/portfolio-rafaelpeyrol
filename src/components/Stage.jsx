import "./Stage.css";

const stage = {
  titre: "Développement d'applications pour véhicule autonome",
  entreprise: "FGVT — Sarrebruck, Allemagne",
  periode: "2025",
  description:
    "Stage au sein de la FGVT (Forschungsgesellschaft für angewandte Verkehrssystemtechnik), centre de recherche allemand spécialisé dans les systèmes de transport. Développement de modules logiciels pour véhicule autonome sous ROS2, intégration de nœuds de traitement de données capteurs et participation à la mise en place de l'architecture logicielle embarquée.",
  technologies: ["ROS2", "Python", "Git"],
  rapport: null, // mettre le lien ou le chemin vers le rapport PDF ici
  images: [
    null,
    null,
  ],
};

function Stage() {
  return (
    <div className="stage">
      <h1>Stage</h1>
      <div className="stage-divider" />

      <div className="stage-header">
        <div>
          <h2 className="stage-titre">{stage.titre}</h2>
          <p className="stage-meta">{stage.entreprise} · {stage.periode}</p>
        </div>
        {stage.rapport ? (
          <a href={stage.rapport} target="_blank" rel="noreferrer" className="stage-rapport-btn">
            ↗ Voir le rapport
          </a>
        ) : (
          <span className="stage-rapport-btn stage-rapport-soon">
            ↗ Rapport en cours de rédaction
          </span>
        )}
      </div>

      <p className="stage-description">{stage.description}</p>

      <div className="stage-images">
        {stage.images.map((img, i) =>
          img ? (
            <img key={i} src={img} alt={`stage ${i + 1}`} className="stage-img" />
          ) : (
            <div key={i} className="stage-img-placeholder">
              <span>Image {i + 1}</span>
            </div>
          )
        )}
      </div>

      <div className="stage-techs">
        {stage.technologies.map((t, i) => (
          <span key={i} className="stage-tech-badge">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default Stage;
