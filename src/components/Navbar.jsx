import "./Navbar.css";
import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/phone.svg";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-left">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#stage">Stage</a>
        <a href="#contact">Contact</a>
      </nav>

     <a href="#home" className="navbar-logo-rp">
       RP
      </a>

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
    </header>
  );
}

export default Navbar;