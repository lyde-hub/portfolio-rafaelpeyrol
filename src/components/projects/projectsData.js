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
    slug: "tournoi-robot",
    title: "Tournoi de Robot",
    thumbnail: null,
    images: [],
    description: [
      "Développement d'un site web full stack de gestion de tournois de robots, réalisé en équipe avec la méthodologie Scrum.",
      "Le site propose trois espaces distincts : une page administrateur pour gérer l'ensemble de la plateforme, une page organisateur pour créer et gérer les tournois, et une page visiteur pour suivre les compétitions. Toutes les fonctionnalités ont été implémentées : inscription des équipes, gestion des matchs, classements, résultats en temps réel et bien d'autres.",
    ],
    skills: [
      "Développement full stack",
      "Conception et administration de bases de données",
      "Gestion de projet en méthodologie Scrum",
      "Travail en équipe avec répartition des rôles",
      "Conception d'interfaces multi-profils (admin, organisateur, visiteur)",
    ],
    technologies: "Python, SQL, Symfony",
  },
  {
    slug: "labyrinthe",
    title: "Labyrinthe",
    thumbnail: laby,
    images: [laby],
    description: [
      "Conception et implémentation d'un labyrinthe en Java/JavaFX avec plusieurs fonctionnalités ajoutées progressivement.",
      "Le projet intègre la génération du labyrinthe, la gestion d'entités (bêtes se déplaçant dans le labyrinthe), des algorithmes pour trouver le chemin le plus court, ainsi que d'autres fonctionnalités venant enrichir le jeu. Une interface graphique JavaFX permet de visualiser l'ensemble.",
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
    slug: "graphe",
    title: "Application de Graphes",
    thumbnail: graphe,
    images: [graphe, graphes2],
    description: [
      "Développement d'une application de visualisation de graphes en Java/JavaFX.",
      "L'application repose sur des algorithmes de disposition basés sur des forces d'attraction et de répulsion, afin de positionner automatiquement les nœuds de manière intuitive. Elle intègre les fonctions essentielles à la manipulation de graphes : ajout, suppression, parcours et gestion des liens.",
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
    slug: "sae-finale",
    title: "Bon Pote",
    thumbnail: saeFinale1,
    images: [saeFinale1, saeFinale2, saeFinale3, saeFinale4],
    description: [
      "Développement du projet Bon Pote en équipe, centré sur l'analyse de données.",
      "Ce projet comprend la conception d'une architecture logicielle complète avec analyse de données, gestion d'une base de données relationnelle et développement de l'application. Les données analysées sont restituées sous forme de différents types de graphiques pour faciliter leur lecture et interprétation. Le projet a été mené en équipe avec une répartition claire des rôles.",
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
    slug: "lowatem",
    title: "Lowatem",
    thumbnail: lowatem,
    images: [lowatem, lowa2],
    description: [
      "Développement d'un jeu de plateau tour par tour en Java/JavaFX, réalisé en deux parties.",
      "La première partie consistait à implémenter l'ensemble des règles du jeu : chaque unité possède un coût, une portée de déplacement, des points de vie et des types de terrains autorisés. Le joueur sélectionne une unité, la déplace vers une case valide et peut attaquer une cible à portée. Toute action incorrecte entraîne la fin de la partie. La seconde partie portait sur le développement d'une intelligence artificielle qui s'affrontait ensuite lors d'un tournoi contre les IA développées par les autres équipes.",
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
    slug: "cuisine",
    title: "Application Cuisine",
    thumbnail: cuisine,
    images: [cuisine, cuisine2],
    description: [
      "Développement d'une application en ligne de commande de gestion de recettes de cuisine dans le cadre d'un projet en BUT Informatique.",
      "L'application permet de lister les ingrédients d'une recette, afficher toutes les recettes disponibles, consulter les menus, rechercher toutes les recettes contenant un ingrédient donné, et afficher les ustensiles nécessaires à une recette. Elle repose sur des scripts Bash pour la navigation et l'affichage des données.",
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
];

export default projects;
