import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TypeWriter from "./components/TypeWriter";

function App() {
  return (
    <>
       <Navbar/>
      <section id="home">
        <TypeWriter text="Rafael Peyrol" speed={80}/>
        <h2>Étudiant en <br/>BUT INFORMATIQUE</h2>
      </section>
      <section id="about"><About/></section>
      <section id="skills"><Skills/></section>
      <section id="projects"><Projects/></section>
      <section id="contact"><Contact/></section>
      
    </>
  )
}

export default App
