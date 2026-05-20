import "./Graphe.css";
import graphe from "../../assets/projet/graphe.png";
import graphes2 from "../../assets/projet/graphes2.png";

function graphePage() {
  return (
    <div className="project-detail">
        <a href="/#projects" className="back-button">
            ← Retour aux projets
        </a>
      <h1>Application de graphe</h1>

      <div className="project-images">
        <img src={graphe} alt="graphe" className="graphe-main" />
        <img src={graphes2} alt="Technos Graphe" className="graphe-tech" />
      </div>

      <p>
        Développement d'un jeu de plateau appelé Lowatem en Java. 
        Le projet s'est déroulé en deux phases : implémentation complète des règles du jeu,
        puis ajout d’une IA capable de jouer contre le joueur.
      </p>

      <p>
        Lowatem est un jeu de plateau au tour par tour développé en Java/JavaFX, opposant un joueur à une IA.
        Chaque unité possède un coût, une portée de déplacement, des points de vie et des types de terrains autorisés,
        ce qui apporte une vraie profondeur stratégique. Le joueur sélectionne une unité, la déplace vers une case valide
        et peut attaquer une cible à portée. Toute action incorrecte (déplacement impossible, terrain interdit, etc.)
        entraîne la fin de la partie. Dans ce projet, mon rôle principal était d’implémenter l’ensemble des règles du jeu
        et de déterminer toutes les actions possibles pour le joueur.
      </p>

      <h2>Compétences acquises</h2>
      <ul>
        <li>Analyse et compréhension d’un code existant</li>
        <li>Programmation orientée objet en Java</li>
        <li>Mise en œuvre de règles de jeu complexes</li>
        <li>Documentation du code et respect des bonnes pratiques</li>
        <li>Réflexion autour de tactiques et mécaniques de jeu</li>
      </ul>

      <h2>Technologies</h2>
      <p>Java, NetBeans (IDE)</p>
    </div>
  );
}

export default graphePage;
