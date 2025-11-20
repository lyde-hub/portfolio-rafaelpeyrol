import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
       <Navbar/>
      <img src="/src/assets/photo.jpg" alt="photo" className='photo'/>
      <h2>Rafael Peyrol</h2>
      <h1>Étudiant en deuxième année de <br/>BUT INFORMATIQUE</h1>
    </>
  )
}

export default App
