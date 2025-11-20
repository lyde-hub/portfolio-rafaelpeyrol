import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-center">
        <a href="#skills">Compétences</a>
        <a href="#Projets">Projets</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar-right">
        <a href="mail" className="nav-mail">
          peyrolrafael@hotmail.com
        </a>
        <a href="telephone" className="nav-phone">
          +33 7 68 38 49 38
        </a>
      </div>
    </header>
  );
}

export default Navbar;