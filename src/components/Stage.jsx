import { useState, useEffect } from "react";
import "./Stage.css";
import logoFgvt from "../assets/logo-fgvt.svg";
import stageImg1 from "../assets/stage/Folie44(1).png";
import stageImg2 from "../assets/stage/Folie44(1)(1).png";

const stage = {
  titre: "Développement d'applications pour véhicule autonome",
  entreprise: "FGVT — Sarrebruck, Allemagne",
  periode: "2025",
  logo: logoFgvt,
  description:
    "Stage au sein de la FGVT (Forschungsgesellschaft für angewandte Verkehrssystemtechnik), centre de recherche allemand spécialisé dans les systèmes de transport. Développement de modules logiciels pour véhicule autonome sous ROS2, intégration de nœuds de traitement de données capteurs et participation à la mise en place de l'architecture logicielle embarquée.",
  technologies: ["ROS2", "Python", "Git"],
  rapport: null,
  images: [stageImg1, stageImg2],
};

const PREVIEW_COUNT = 1;

function StageSlider({ images, onClose }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h1 className="modal-title">{stage.titre}</h1>
        <div className="modal-slider">
          {images.length > 1 && (
            <button className="slider-arrow left" onClick={prev}>‹</button>
          )}
          <img src={images[index]} alt={`stage ${index + 1}`} className="slider-img" />
          {images.length > 1 && (
            <button className="slider-arrow right" onClick={next}>›</button>
          )}
        </div>
        {images.length > 1 && (
          <div className="slider-dots">
            {images.map((_, i) => (
              <span key={i} className={`dot${i === index ? " active" : ""}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Stage() {
  const [sliderOpen, setSliderOpen] = useState(false);


  const preview = stage.images.slice(0, PREVIEW_COUNT);
  const hasMore = stage.images.length > PREVIEW_COUNT;

  return (
    <div className="stage">
      <h1>Stage</h1>
      <div className="stage-divider" />

      <div className="stage-header">
        <div className="stage-header-left">
          {stage.logo && (
            <div className="stage-logo-encart">
              <img src={stage.logo} alt={stage.entreprise} className="stage-logo" />
            </div>
          )}
          <div>
            <h2 className="stage-titre">{stage.titre}</h2>
            <p className="stage-meta">{stage.entreprise} · {stage.periode}</p>
          </div>
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

      {preview.length > 0 && (
        <div className="stage-images">
          {preview.map((img, i) => (
            <img key={i} src={img} alt={`stage ${i + 1}`} className="stage-img" />
          ))}
          {hasMore && (
            <button className="stage-voir-plus" onClick={() => setSliderOpen(true)}>
              + Voir plus de photos
            </button>
          )}
        </div>
      )}

      <div className="stage-techs">
        {stage.technologies.map((t, i) => (
          <span key={i} className="stage-tech-badge">{t}</span>
        ))}
      </div>

      {sliderOpen && <StageSlider images={stage.images} onClose={() => setSliderOpen(false)} />}
    </div>
  );
}

export default Stage;
