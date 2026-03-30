import { useState } from "react";

/**
 * Composant Navbar - Barre de navigation responsive
 * Menu hamburger sur mobile, nav classique sur desktop
 * @component
 */
function Navbar() {
  // État pour l'ouverture/fermeture du menu hamburger
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Alterne l'état du menu
   */
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Ferme le menu (appelé lors du clic sur un lien)
   */
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo/Branding */}
      <h1>YD</h1>

      {/* Bouton hamburger (mobile) */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        {/* Trois lignes du hamburger */}
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      {/* Menu de navigation */}
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
