import "./Skills.css";

import c from "../assets/langage/c.png";
import csharp from "../assets/langage/csharp.png";
import css from "../assets/langage/css.png";
import html from "../assets/langage/html.png";
import java from "../assets/langage/java.png";
import js from "../assets/langage/js.png";
import php from "../assets/langage/php.png";
import python from "../assets/langage/python.png";
import react from "../assets/langage/react.png";
import sql from "../assets/langage/sql.png";
import symfony from "../assets/langage/symfony.png";
import git from "../assets/technologie/git.png";
import vscode from "../assets/technologie/vscode.png";
import netbeans from "../assets/technologie/netbeans.png";
import visualStudio from "../assets/technologie/visualStudio.png";
import arduino from "../assets/technologie/arduino.png";
import windows from "../assets/technologie/windows.png";
import linux from "../assets/technologie/linux.png";
import ros2 from "../assets/technologie/ros2.svg";

const langageImages = { c, csharp, css, html, java, js, php, python, react, sql, symfony };
const technoImages  = { git, vscode, netbeans, visualStudio, arduino, windows, linux, ros2 };

const langages = ["c","csharp","css","html","java","js","php","python","react","sql","symfony"];
const technos  = ["git","vscode","netbeans","visualStudio","arduino","windows","linux","ros2"];

const labels = {
  c: "C", csharp: "C#", css: "CSS", html: "HTML", java: "Java",
  js: "JavaScript", php: "PHP", python: "Python", react: "React",
  sql: "SQL", symfony: "Symfony", git: "Git", vscode: "VS Code",
  netbeans: "NetBeans", visualStudio: "Visual Studio", arduino: "Arduino",
  windows: "Windows", linux: "Linux", ros2: "ROS2",
};

function MarqueeRow({ items, imageMap }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <div key={i} className="marquee-item">
            <img src={imageMap[item]} alt={item} />
            <span className="marquee-label">{labels[item]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <h1>Compétences</h1>
      <div className="skills-divider" />
      <div className="skills-content">
        <p className="skills-label">Langages</p>
        <MarqueeRow items={langages} imageMap={langageImages} />
        <p className="skills-label">Outils & Technologies</p>
        <MarqueeRow items={technos} imageMap={technoImages} />
      </div>
    </div>
  );
}

export default Skills;