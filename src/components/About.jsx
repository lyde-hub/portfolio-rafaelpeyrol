import "./About.css";
import photo from "../assets/photo.jpg";

function About() {
  return (
    <div className="AboutME">
      <h1>À propos de moi</h1>
      <div className="about-divider" />
      <div className="about-content">
        <img src={photo} alt="Rafael Peyrol" className="photo-portrait" />
        <div className="about-card">
          <p>
            Je suis Rafael Peyrol, étudiant en troisième année de BUT Informatique à Bordeaux.
            Passionné par le développement logiciel et les algorithmes, je suis à la recherche 
            d'une alternance pour mettre en pratique mes compétences dans un environnement professionnel et
            par la suite poursuivre mon parcours en école d’ingénieur.
            
            Bienvenue sur mon portfolio — vous y trouverez mes projets et les technologies que j'ai eu l'occasion d'utiliser.
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
