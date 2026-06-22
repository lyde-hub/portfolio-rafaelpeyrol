import React from "react";
import planning from "../assets/planning.pdf";

function Alternance() {
  return (
    <div className="alternance-container">
      <h2>Alternance</h2>

      <p>
        Je suis actuellement à la recherche d'une alternance en développement
        logiciel dans le cadre de ma troisième année de BUT Informatique.
      </p>

      <h3>Planning d'alternance</h3>

      <object
        data={planning}
        type="application/pdf"
        width="100%"
        height="600px"
      >
        <embed src={planning} type="application/pdf" width="100%" height="600px" />
      </object>
    </div>
  );
}

export default Alternance;