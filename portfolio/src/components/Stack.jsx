import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* Import all the icons in Free Brands and Free Solid */
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

//eslint-disable-next-line
import { motion } from "framer-motion";
import { useState } from "react";
import data from "../../backend/data.json";
import "../styles/_filterbutton.scss";
import "../styles/_stack.scss";

function Stack() {
  const [activeCategory, setActiveCategory] = useState("All");

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
            className="stack-card"
            variants={itemVariants}
          >
            {skill.icon ? (
              <FontAwesomeIcon icon={skill.icon} />
            ) : (
              <span className="icon-fallback">{skill.name[0]}</span>
            )}
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Stack;
