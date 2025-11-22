import "./About.css";

function About() {
  return (
    <div className="AboutME">
      <h1>À propos de moi</h1>
      <div className="about-content">
        <img src="/src/assets/photo.jpg" alt="photo" className="photo-portrait" />
        <div className="about-card">
          <p>Je suis Rafael Peyrol, j'ai 19 ans et je suis en deuxième année de BUT INFORMATIQUE.
            Je suis à la recherche d'un stage d'au moins 10 semaines à partir d'avril.
            Bienvenue sur mon portfolio, vous pourrez y trouver les compétences que j'ai acquises
            et certains de mes projets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
