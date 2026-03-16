import { useState } from "react";
import "../styles/_navbar.scss";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 alt="Yanis Djouahra">YD </h1>
      <button className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Acceuil
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            À propos
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Compétences
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projets
          </a>
        </li>
        <li>
          <a href="#experience" onClick={closeMenu}>
            Parcour
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
