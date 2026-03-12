import "../styles/_navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>YD</h1>
      <ul>
        <li>
          <a href="#home">Acceuil</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#experience">Parcour</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
