import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Accueil", sectionId: "home" },
  { href: "#services", label: "Services", sectionId: "services" },
  { href: "#process", label: "Méthode", sectionId: "process" },
  { href: "#projects", label: "Réalisations", sectionId: "projects" },
  { href: "#tarifs", label: "Formats", sectionId: "tarifs" },
  { href: "#faq", label: "FAQ", sectionId: "faq" },
  { href: "#about", label: "À propos", sectionId: "about" },
];

/**
 * Composant Navbar - Barre de navigation responsive
 * Menu hamburger sur mobile, nav classique sur desktop
 * @component
 */
function Navbar() {
  // État pour l'ouverture/fermeture du menu hamburger
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => ({
      navId: item.sectionId,
      element: document.getElementById(item.sectionId),
    })).filter((item) => item.element);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let index = sections.length - 1; index >= 0; index -= 1) {
        const current = sections[index];
        if (current.element && scrollPosition >= current.element.offsetTop) {
          setActiveSection(current.navId);
          return;
        }
      }

      setActiveSection("home");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

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
    <nav className="navbar" aria-label="Navigation principale">
      <a href="#home" className="navbar-brand" aria-label="Retour à l'accueil">
        <span className="brand-kicker">Freelance web</span>
        <span className="brand-name">Yanis Djouahra</span>
      </a>

      {/* Bouton hamburger (mobile) */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Menu"
        aria-expanded={isOpen}
        aria-controls="main-menu"
      >
        {/* Trois lignes du hamburger */}
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      {/* Menu de navigation */}
      <ul id="main-menu" className={`menu ${isOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li
            key={item.href}
            className={activeSection === item.sectionId ? "is-active" : ""}
          >
            <a
              href={item.href}
              onClick={closeMenu}
              aria-current={
                activeSection === item.sectionId ? "page" : undefined
              }
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="menu-cta-item">
          <a href="#contact" onClick={closeMenu}>
            Devis
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
