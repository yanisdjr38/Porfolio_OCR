import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

/**
 * Composant ScrollToTop - Bouton flottant pour remonter au début
 * Apparaît quand utilisateur scroll vers le bas
 * @component
 */
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Affiche/masque le bouton selon la position du scroll
   */
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  /**
   * Remonte au top avec animation smooth
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        className="scroll-to-top-btn"
        onClick={scrollToTop}
        aria-label="Retour au début"
        title="Retour au top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    )
  );
}

export default ScrollToTop;
