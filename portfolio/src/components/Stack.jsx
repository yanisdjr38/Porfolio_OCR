import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import data from "../../backend/data.json";

// Initialize icon library
library.add(fab, fas);

/**
 * Animation variants pour l'apparition progressive des cartes de compétences
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

/**
 * Composant Stack - Affiche les compétences techniques avec filtrage par catégorie
 * @component
 * @returns {JSX.Element} Carrousel interactif des compétences
 */
function Stack() {
  // État pour la catégorie de filtre active
  const [activeCategory, setActiveCategory] = useState("All");

  // Référence pour le carrousel
  const carouselRef = useRef(null);

  // Extraction des catégories uniques depuis les données
  const categories = [
    "All",
    ...new Set(data.stack.item.map((item) => item.category)),
  ];

  // Filtrer les compétences selon la catégorie sélectionnée
  const filteredSkills =
    activeCategory === "All"
      ? data.stack.item
      : data.stack.item.filter((item) => item.category === activeCategory);

  // Auto-scroll du carrousel
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollInterval = setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        // Retour au début
        carousel.scroll({ left: 0, behavior: "smooth" });
      } else {
        // Scroll de la largeur d'une carte
        const cardWidth =
          carousel.querySelector(".stack-card")?.clientWidth || 90;
        carousel.scroll({
          left: carousel.scrollLeft + cardWidth + 12,
          behavior: "smooth",
        });
      }
    }, 3500); // Scroll tous les 3.5 secondes

    return () => clearInterval(scrollInterval);
  }, [activeCategory, filteredSkills]);

  // Navigation manuelle
  const handleNavigation = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = carousel.querySelector(".stack-card")?.clientWidth || 90;
    const scrollAmount = cardWidth + 12; // card width + gap

    if (direction === "left") {
      carousel.scroll({
        left: carousel.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else {
      carousel.scroll({
        left: carousel.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="stack">
      {/* Titre de la section */}
      <h3>Stack</h3>

      {/* Sélecteur de catégorie */}
      <div className="filter-dropdown-container">
        <select
          className="filter-dropdown"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
          aria-label="Filtrer les compétences par catégorie"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Carrousel des compétences */}
      <div className="carousel-wrapper">
        {/* Bouton navigation gauche */}
        <button
          className="carousel-nav carousel-nav-left"
          onClick={() => handleNavigation("left")}
          aria-label="Scroll vers la gauche"
          title="Précédent"
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
        </button>

        {/* Carrousel avec animation */}
        <motion.div
          ref={carouselRef}
          className="stack-items-carousel"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              className="stack-card"
              variants={itemVariants}
              title={skill.name}
            >
              {/* Icône ou initiale */}
              {skill.icon ? (
                <FontAwesomeIcon icon={skill.icon} aria-hidden="true" />
              ) : (
                <span className="icon-fallback" aria-label={skill.name}>
                  {skill.name[0]}
                </span>
              )}
              {/* Nom de la compétence */}
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bouton navigation droite */}
        <button
          className="carousel-nav carousel-nav-right"
          onClick={() => handleNavigation("right")}
          aria-label="Scroll vers la droite"
          title="Suivant"
        >
          <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}

export default Stack;
