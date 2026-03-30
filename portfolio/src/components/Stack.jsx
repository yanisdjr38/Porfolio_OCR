import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
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
 * @returns {JSX.Element} Grille interactive des compétences
 */
function Stack() {
  // État pour la catégorie de filtre active
  const [activeCategory, setActiveCategory] = useState("All");

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

      {/* Grille des compétences avec animation */}
      <motion.div
        className="stack-items"
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
    </div>
  );
}

export default Stack;
