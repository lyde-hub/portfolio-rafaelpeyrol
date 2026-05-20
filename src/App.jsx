import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Stage from "./components/Stage";
import Contact from "./components/Contact";
import TypeWriter from "./components/TypeWriter";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <TypeWriter text="Rafael Peyrol" speed={150} displayDuration={10000} />
        <h2>Étudiant en BUT INFORMATIQUE</h2>
        <a href="#about" className="scroll-down">↓</a>
      </section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="stage"><Stage /></section>
      <section id="contact"><Contact /></section>
    </>
  );
}

export default App;
