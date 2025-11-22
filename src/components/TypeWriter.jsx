import { useEffect, useRef, useState } from "react";
import "./TypeWriter.css";

function Typewriter({ text, speed = 80 }) {
  const [displayed, setDisplayed] = useState("");
  const [active, setActive] = useState(false);
  const ref = useRef();

  // Detect scroll into view (optionnel, peut être simplifié selon ta navigation)
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setActive(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter animation (quand la zone est active)
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(prev => text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [active, text, speed]);

  return (
    <h1 ref={ref} className="typewriter-title">
      {displayed}
      <span className="typewriter-cursor">{active && displayed.length !== text.length ? "|" : ""}</span>
    </h1>
  );
}
export default Typewriter;