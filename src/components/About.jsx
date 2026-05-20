import "./About.css";

function About() {
  return (
    <div className="AboutME">
      <h1>À propos de moi</h1>
      <div className="about-divider" />
      <div className="about-content">
        <img src="/src/assets/photo.jpg" alt="Rafael Peyrol" className="photo-portrait" />
        <div className="about-card">
          <p>
            Je suis Rafael Peyrol, étudiant en deuxième année de BUT Informatique à Bordeaux.
            Passionné par le développement logiciel et les algorithmes, je suis à la recherche
            d'une alternance pour mettre en pratique mes compétences dans un environnement professionnel.
            Bienvenue sur mon portfolio — vous y trouverez mes projets et les technologies
            que j'ai eu l'occasion de maîtriser.
          </p>
          <a href="/cv-rafael-peyrol.pdf" download className="about-cv-btn">
            ↓ Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
