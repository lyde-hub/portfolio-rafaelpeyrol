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
      "Développement d'une application web de gestion de recettes de cuisine dans le cadre d'une SAE (Situation d'Apprentissage et d'Évaluation) en BUT Informatique.",
      "L'application permet aux utilisateurs de consulter, ajouter et gérer des recettes culinaires. Elle présente les recettes avec leurs ingrédients, les étapes de préparation et des informations sur les plats. Le projet couvre la conception de la base de données, le développement du backend et la création d'une interface utilisateur intuitive.",
    ],
    skills: [
      "Conception et développement d'une application web",
      "Modélisation et gestion d'une base de données",
      "Création d'interfaces utilisateur ergonomiques",
      "Travail en équipe et gestion de projet",
    ],
    technologies: "HTML, CSS, JavaScript, PHP, SQL",
  },
  {
    slug: "iadoom",
    title: "IA Doom",
    thumbnail: iadoom1,
    images: [iadoom1, iadoom2],
    description: [
      "Développement d'une intelligence artificielle capable de naviguer et d'interagir dans un environnement de type Doom.",
      "Ce projet consiste à implémenter un agent autonome capable de percevoir son environnement, prendre des décisions et agir en temps réel dans un jeu de type FPS. L'IA utilise des algorithmes de pathfinding et de prise de décision pour naviguer dans les niveaux, éviter les obstacles et atteindre ses objectifs de manière autonome.",
    ],
    skills: [
      "Implémentation d'algorithmes de pathfinding",
      "Développement d'un agent autonome",
      "Traitement et analyse d'environnements en temps réel",
      "Programmation orientée objet",
    ],
    technologies: "Python",
  },
  {
    slug: "labyrinthe",
    title: "Labyrinthe",
    thumbnail: laby,
    images: [laby],
    description: [
      "Conception et implémentation d'un générateur et solveur de labyrinthe avec visualisation graphique.",
      "Ce projet explore les algorithmes classiques de génération procédurale et de recherche de chemin. Le programme génère des labyrinthes aléatoires et applique différents algorithmes pour trouver le chemin optimal entre l'entrée et la sortie. Une interface graphique permet de visualiser la génération et la résolution étape par étape.",
    ],
    skills: [
      "Implémentation d'algorithmes de parcours",
      "Génération procédurale de structures",
      "Visualisation d'algorithmes",
      "Optimisation et analyse de la complexité algorithmique",
    ],
    technologies: "C",
  },
  {
    slug: "odomo",
    title: "Odomo",
    thumbnail: odomo,
    images: [odomo],
    description: [
      "Développement d'une application de gestion et de suivi réalisée dans le cadre du BUT Informatique.",
      "Odomo est un projet axé sur la conception d'une solution logicielle complète, couvrant l'analyse des besoins, la conception de l'architecture, le développement et les tests de l'application. Le projet met en pratique les méthodologies de développement logiciel acquises en formation.",
    ],
    skills: [
      "Analyse et conception logicielle",
      "Développement d'une application complète",
      "Gestion de projet",
      "Tests et validation",
    ],
    technologies: "Java, SQL",
  },
  {
    slug: "sae-finale",
    title: "SAE Finale",
    thumbnail: saeFinale1,
    images: [saeFinale1, saeFinale2, saeFinale3, saeFinale4],
    description: [
      "Projet de fin d'année (SAE) réalisé en équipe dans le cadre du BUT Informatique, regroupant l'ensemble des compétences acquises au cours de la formation.",
      "Ce projet comprend la conception d'une architecture logicielle complète, le développement frontend et backend, la gestion d'une base de données relationnelle et la mise en production de l'application. Le projet a été mené de manière agile avec des sprints réguliers, des revues de code et une intégration continue.",
    ],
    skills: [
      "Gestion de projet et travail en équipe",
      "Conception d'architecture logicielle",
      "Développement frontend et backend",
      "Modélisation et administration de bases de données",
      "Déploiement et mise en production",
    ],
    technologies: "React, PHP, Symfony, SQL, Git",
  },
  {
    slug: "web",
    title: "Projet Web",
    thumbnail: web1,
    images: [web1, web2],
    description: [
      "Développement d'une application web complète dans le cadre du BUT Informatique.",
      "Ce projet web implique la création d'une interface utilisateur responsive et moderne, couplée à un backend robuste. Il met en pratique les techniques de développement web modernes, de la conception des maquettes jusqu'au déploiement final, en respectant les bonnes pratiques d'accessibilité et de performance.",
    ],
    skills: [
      "Développement d'interfaces web responsives",
      "Conception et intégration backend",
      "Optimisation des performances web",
      "Bonnes pratiques HTML/CSS/JavaScript",
    ],
    technologies: "HTML, CSS, JavaScript, PHP",
  },
];

export default projects;
