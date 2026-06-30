import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useEffect, useState } from "react";

// Liste des sections dans l'ordre
const SECTIONS = [
  "accueil",
  "services",
  "process",
  "projects",
  "tarifs",
  "faq",
  "testimonials",
  "about",
  "contact",
  "footer",
];

/**
 * Composant ScrollToBottom - Bouton flottant pour descendre à la section suivante
 * Apparaît quand utilisateur n'est pas à la dernière section
 * @component
 */
function ScrollToBottom() {
  const [isVisible, setIsVisible] = useState(false);

  /**
   * Trouve la section actuellement visible
   */
  const getCurrentSection = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (const sectionId of SECTIONS) {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          return sectionId;
        }
      }
    }
    return SECTIONS[0];
  }, []);

  /**
   * Affiche/masque le bouton selon la position du scroll
   */
  const handleScroll = useCallback(() => {
    const currentSection = getCurrentSection();
    const lastSection = SECTIONS[SECTIONS.length - 1];
    const firstSection = SECTIONS[0];

    // N'affiche le bouton que si on n'est pas à la première ou dernière section
    if (currentSection !== lastSection && currentSection !== firstSection) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [getCurrentSection]);

  /**
   * Descend à la section suivante avec animation smooth
   */
  const scrollToNextSection = () => {
    const currentSection = getCurrentSection();
    const currentIndex = SECTIONS.indexOf(currentSection);

    if (currentIndex < SECTIONS.length - 1) {
      const nextSectionId = SECTIONS[currentIndex + 1];
      const nextSection = document.getElementById(nextSectionId);

      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    isVisible && (
      <button
        className="scroll-to-bottom-btn"
        onClick={scrollToNextSection}
        aria-label="Section suivante"
        title="Section suivante"
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    )
  );
}

export default ScrollToBottom;
