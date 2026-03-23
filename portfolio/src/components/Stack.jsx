import * as FabrIcons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import data from "../../backend/data.json";
import "../styles/_filterbutton.scss";
import "../styles/_stack.scss";

function Stack() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Mapping des noms d'icônes au composants Font Awesome
  const iconMap = {
    html5: FabrIcons.faHtml5,
    css3: FabrIcons.faCss3,
    js: FabrIcons.faJs,
    react: FabrIcons.faReact,
    "node-js": FabrIcons.faNode,
    express: FabrIcons.faNodeJs,
    mongodb: FabrIcons.faMongodb,
    supabase: FabrIcons.faDatabase,
    git: FabrIcons.faGit,
    "visual-studio-code": FabrIcons.faVs,
    linux: FabrIcons.faLinux,
    figma: FabrIcons.faFigma,
    notion: FabrIcons.faNotion,
  };

  // Récupérer les catégories uniques
  const categories = [
    "All",
    ...new Set(data.stack.item.map((item) => item.category)),
  ];

  // Filtrer les skills
  const filteredSkills =
    activeCategory === "All"
      ? data.stack.item
      : data.stack.item.filter((item) => item.category === activeCategory);

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

  return (
    <div className="stack">
      <h3>Stack</h3>

      {/* Filter Dropdown */}
      <div className="filter-dropdown-container">
        <select
          className="filter-dropdown"
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Stack Items */}
      <motion.div
        className="stack-items"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory}
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="stack-item"
            variants={itemVariants}
          >
            {iconMap[skill.icon] ? (
              <FontAwesomeIcon icon={iconMap[skill.icon]} />
            ) : (
              <span className="icon-fallback">{skill.name[0]}</span>
            )}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stack;
