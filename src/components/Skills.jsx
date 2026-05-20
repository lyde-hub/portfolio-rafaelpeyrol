import "./Skills.css";

const langages = ["c","csharp","css","html","java","js","php","python","react","sql","symfony"];
const technos  = ["git","vscode","netbeans","visualStudio","arduino","windows","linux"];

function MarqueeRow({ items, basePath }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <img key={i} src={`/src/assets/${basePath}/${item}.png`} alt={item} />
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
        <MarqueeRow items={langages} basePath="langage" />
        <p className="skills-label">Outils & Technologies</p>
        <MarqueeRow items={technos} basePath="technologie" />
      </div>
    </div>
  );
}

export default Skills;