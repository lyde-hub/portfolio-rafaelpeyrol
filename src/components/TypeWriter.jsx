import { useEffect, useState } from "react";
import "./TypeWriter.css";

function TypeWriter({ text, speed = 80, displayDuration = 15000 }) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    let typingTimer, displayTimer;

    if (isTyping) {
      typingTimer = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i === text.length) {
          clearInterval(typingTimer);

          // Après écriture complète, rester affiché 15s
          displayTimer = setTimeout(() => {
            setDisplayed("");    // Efface le texte après 15s
            setIsTyping(false);  // Prépare la prochaine boucle
          }, displayDuration);   // ← Délai configurable
        }
      }, speed);
    } else {
      // Relance la frappe directe après disparition
      const restartTimer = setTimeout(() => setIsTyping(true), 20); // Petite pause = 20 ms pour éviter bug visuel
      return () => clearTimeout(restartTimer);
    }

    return () => {
      clearInterval(typingTimer);
      clearTimeout(displayTimer);
    };
  }, [isTyping, text, speed, displayDuration]);

  return (
    <h1 className="typewriter-title">
      {displayed}
      <span className="typewriter-cursor">
        {(displayed.length !== text.length || displayed === "") ? "|" : ""}
      </span>
    </h1>
  );
}
export default TypeWriter;
