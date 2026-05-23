import { useState } from "react";
import "./Navbar.css";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-left">
        <a href="#about">À propos de moi</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#stage">Stage</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="#home" className="navbar-logo-rp">RP</a>

      <div className="navbar-right">
        <div className="navbar-mail">
          <img src={mailIcon} alt="mail" className="icon-mail" />
          <a href="mailto:peyrolrafael@hotmail.com" className="nav-mail">peyrolrafael@hotmail.com</a>
        </div>
        <div className="navbar-phone">
          <img src={phoneIcon} alt="phone" className="icon-phone" />
          <a href="tel:+33768384938" className="nav-phone">+33 7 68 38 49 38</a>
        </div>
        <a href="/cv-rafael-peyrol.pdf" download className="nav-cv-btn">CV</a>
      </div>

      <button
        className={`hamburger${menuOpen ? " open" : ""}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <div className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        <nav className="mobile-menu-nav">
          {[["#about","À propos de moi"],["#skills","Compétences"],["#projects","Projets"],["#stage","Stage"],["#contact","Contact"]].map(([href, label], i) => (
            <a key={href} href={href} onClick={close} style={{ animationDelay: `${i * 60}ms` }}>
              <span className="mobile-menu-num">0{i + 1}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="mailto:peyrolrafael@hotmail.com" onClick={close} className="mobile-menu-contact">
            <img src={mailIcon} alt="mail" className="icon-mail" />
            peyrolrafael@hotmail.com
          </a>
          <a href="tel:+33768384938" onClick={close} className="mobile-menu-contact">
            <img src={phoneIcon} alt="phone" className="icon-phone" />
            +33 7 68 38 49 38
          </a>
          <a href="/cv-rafael-peyrol.pdf" download onClick={close} className="mobile-cv-btn">↓ Télécharger mon CV</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
