import "./Lowatem.css";
import lowatem from "../../assets/projet/lowatem.png";
import lowa2 from "../../assets/projet/lowa2.png";

function LowatemPage() {
  return (
    <div className="project-detail">
        <a href="/#projects" className="back-button">
            ← Retour aux projets
        </a>
      <h1>Projet Lowatem</h1>

      <div className="project-images">
        <img src={lowatem} alt="Lowatem" className="lowatem-main" />
        <img src={lowa2} alt="Technos Lowatem" className="lowatem-tech" />
      </div>

    <p> 
        Développement d'une application de visualisation de graphes en Java. 
        Le projet s'est déroulé en deux phases : implémentation des structures et opérations de base sur les graphes, 
        puis intégration d'un algorithme de disposition permettant une représentation dynamique et lisible.
    </p> 
    <p>
        Cette application permet d'afficher et de manipuler des graphes en Java/JavaFX.
        Elle repose sur des algorithmes de disposition basés sur des forces d'attraction et de répulsion, 
        afin de positionner automatiquement les nœuds de manière intuitive. Mon rôle dans ce projet était d'implémenter les fonctions essentielles
        à la manipulation de graphes (ajout, suppression, parcours, gestion des liens) ainsi que la logique complète des algorithmes de visualisation. </p>
        <h2>Compétences acquises</h2>
        <ul>
            <li>Compréhension et implémentation d'algorithmes de disposition de graphes</li>
            <li>Manipulation de structures de données complexes</li>
            <li>Organisation d’un projet orienté algorithmes</li>
            <li>Programmation en Java/JavaFX</li>
            <li>Utilisation de Git pour la gestion de versions</li>
        </ul>
        <h2>Technologies</h2>
        <p>Java, JavaFX, Git</p>
    </div>
  );
}

export default LowatemPage;
