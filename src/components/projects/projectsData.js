import lowatem from "../../assets/projet/lowatem.png";
import lowa2 from "../../assets/projet/lowa2.png";
import graphe from "../../assets/projet/graphe.png";
import graphes2 from "../../assets/projet/graphes2.png";
import cuisine from "../../assets/projet/cuisine.png";
import cuisine2 from "../../assets/projet/cuisine2.png";
import iadoom1 from "../../assets/projet/iadoom1.png";
import iadoom2 from "../../assets/projet/iadoom2.png";
import laby from "../../assets/projet/laby.png";
import odomo from "../../assets/projet/odomo.jpg";
import saeFinale1 from "../../assets/projet/saeFinale1.png";
import saeFinale2 from "../../assets/projet/saeFinale2.png";
import saeFinale3 from "../../assets/projet/saeFinale3.png";
import saeFinale4 from "../../assets/projet/saeFinale4.png";
import web1 from "../../assets/projet/web1.png";
import web2 from "../../assets/projet/web2.png";

const projects = [
  {
    slug: "lowatem",
    title: "Lowatem",
    thumbnail: lowatem,
    images: [lowatem, lowa2],
    description: [
      "Développement d'un jeu de plateau tour par tour en Java/JavaFX opposant un joueur humain à une intelligence artificielle.",
      "Chaque unité possède un coût, une portée de déplacement, des points de vie et des types de terrains autorisés, apportant une vraie profondeur stratégique. Le joueur sélectionne une unité, la déplace vers une case valide et peut attaquer une cible à portée. Toute action incorrecte (déplacement impossible, terrain interdit, etc.) entraîne la fin de la partie. Mon rôle principal était d'implémenter l'ensemble des règles du jeu et de déterminer toutes les actions possibles pour le joueur.",
    ],
    skills: [
      "Programmation orientée objet en Java",
      "Mise en œuvre de règles de jeu complexes",
      "Analyse et compréhension d'un code existant",
      "Documentation du code et respect des bonnes pratiques",
      "Réflexion autour de tactiques et mécaniques de jeu",
    ],
    technologies: "Java, JavaFX, NetBeans",
  },
  {
    slug: "graphe",
    title: "Application de Graphes",
    thumbnail: graphe,
    images: [graphe, graphes2],
    description: [
      "Développement d'une application de visualisation de graphes en Java/JavaFX.",
      "L'application repose sur des algorithmes de disposition basés sur des forces d'attraction et de répulsion, afin de positionner automatiquement les nœuds de manière intuitive. Mon rôle était d'implémenter les fonctions essentielles à la manipulation de graphes (ajout, suppression, parcours, gestion des liens) ainsi que la logique complète des algorithmes de visualisation.",
    ],
    skills: [
      "Compréhension et implémentation d'algorithmes de disposition de graphes",
      "Manipulation de structures de données complexes",
      "Organisation d'un projet orienté algorithmes",
      "Programmation en Java/JavaFX",
      "Utilisation de Git pour la gestion de versions",
    ],
    technologies: "Java, JavaFX, Git",
  },
  {
    slug: "cuisine",
    title: "Application Cuisine",
    thumbnail: cuisine,
    images: [cuisine, cuisine2],
    description: [
      "Développement d'une application en ligne de commande de gestion de recettes de cuisine dans le cadre d'un projet en BUT Informatique.",
      "L'application permet de consulter, ajouter et gérer des recettes culinaires directement depuis le terminal. Elle repose sur des scripts Bash pour la navigation, la saisie et l'affichage des recettes avec leurs ingrédients et étapes de préparation.",
    ],
    skills: [
      "Scripting Bash et automatisation",
      "Gestion de fichiers et traitement de données en ligne de commande",
      "Conception d'une interface utilisateur en terminal",
      "Travail en équipe et gestion de projet",
    ],
    technologies: "Bash",
  },
  {
    slug: "iadoom",
    title: "IA Doom",
    thumbnail: iadoom1,
    images: [iadoom1, iadoom2],
    description: [
      "Développement d'agents IA autonomes évoluant dans un environnement de type Doom, avec un examen final récompensant les meilleurs comportements.",
      "Les agents doivent naviguer intelligemment dans l'environnement et choisir les salles les plus bénéfiques pour maximiser leur score à l'examen final. Chaque agent apprend à évaluer son environnement et à prendre les meilleures décisions pour optimiser ses résultats, simulant ainsi un comportement intelligent et adaptatif.",
    ],
    skills: [
      "Développement d'agents IA autonomes",
      "Prise de décision et évaluation de l'environnement",
      "Programmation orientée objet en C#",
      "Optimisation du comportement d'agents",
      "Utilisation de Git pour la gestion de versions",
    ],
    technologies: "C#, Git",
  },
  {
    slug: "labyrinthe",
    title: "Labyrinthe",
    thumbnail: laby,
    images: [laby],
    description: [
      "Conception et implémentation d'un générateur et solveur de labyrinthe avec visualisation graphique en Java/JavaFX.",
      "Le programme génère des labyrinthes aléatoires et applique différents algorithmes pour trouver le chemin optimal entre l'entrée et la sortie. Une interface graphique JavaFX permet de visualiser la génération et la résolution du labyrinthe étape par étape.",
    ],
    skills: [
      "Implémentation d'algorithmes de parcours",
      "Génération procédurale de structures",
      "Visualisation d'algorithmes avec JavaFX",
      "Optimisation et analyse de la complexité algorithmique",
    ],
    technologies: "Java, JavaFX",
  },
  {
    slug: "odomo",
    title: "Odomo",
    thumbnail: odomo,
    images: [odomo],
    description: [
      "Développement d'une application de station météo en Java, réalisé en autonomie dans le cadre du BUT Informatique.",
      "L'application collecte, affiche et analyse des données météorologiques. Le projet a été mené de façon entièrement autonome, de la conception à l'implémentation, en mettant en pratique les bonnes pratiques de développement Java.",
    ],
    skills: [
      "Développement d'une application Java complète",
      "Traitement et affichage de données météorologiques",
      "Travail en autonomie",
      "Conception et architecture logicielle",
    ],
    technologies: "Java",
  },
  {
    slug: "sae-finale",
    title: "Bon Pote",
    thumbnail: saeFinale1,
    images: [saeFinale1, saeFinale2, saeFinale3, saeFinale4],
    description: [
      "Développement du projet Bon Pote en équipe, centré sur l'analyse de données.",
      "Ce projet comprend la conception d'une architecture logicielle complète avec analyse de données, gestion d'une base de données relationnelle et développement de l'application. Le projet a été mené en équipe avec une répartition claire des rôles.",
    ],
    skills: [
      "Analyse de données",
      "Gestion de projet et travail en équipe",
      "Conception d'architecture logicielle",
      "Modélisation et administration de bases de données",
      "Développement d'application",
    ],
    technologies: "C#, Python, SQL",
  },
  {
    slug: "web",
    title: "Projet Web",
    thumbnail: web1,
    images: [web1, web2],
    description: [
      "Création d'une page web statique dans le cadre du BUT Informatique, en utilisant uniquement HTML et CSS.",
      "Ce projet est une introduction au développement web, axé sur la structure d'une page avec HTML et sa mise en forme avec CSS. Il met en pratique les bases de la conception de pages web statiques.",
    ],
    skills: [
      "Structuration de pages web avec HTML",
      "Mise en forme et style avec CSS",
      "Bonnes pratiques de base en développement web",
    ],
    technologies: "HTML, CSS",
  },
];

export default projects;
