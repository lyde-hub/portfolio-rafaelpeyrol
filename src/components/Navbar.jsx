import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-left">
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#Projets">Projets</a>
        <a href="#contact">Contact</a>
      </nav>

     <a href="#home" className="navbar-logo-rp">
       RP
      </a>

      <div className="navbar-right">
        <div className="navbar-mail">
          <img src="/src/assets/mail.svg" alt="mail" className="icon-mail" />
          <a href="mailto:peyrolrafael@hotmail.com" className="nav-mail">peyrolrafael@hotmail.com</a>
        </div>

        <div className="navbar-phone">
          <img src="/src/assets/phone.svg" alt="phone" className="icon-phone" />
          <a href="tel:+33768384938" className="nav-phone">+33 7 68 38 49 38</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;