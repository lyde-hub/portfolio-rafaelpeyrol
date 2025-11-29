import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LowatemPage from "./components/projects/Lowatem.jsx";
import GraphePage from "./components/projects/Graphe.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/lowatem" element={<LowatemPage />} />
        <Route path="/projects/graphe" element={<GraphePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
