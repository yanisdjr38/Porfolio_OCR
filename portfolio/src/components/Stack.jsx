import * as FabrIcons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import data from "../backend/data.json";
import "../styles/_filterbutton.scss";
import "../styles/_stack.scss";
import FilterButton from "./FilterButto,.jsx";

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
    notion: FabrIcons.abjsSquare,
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

  return (
    <div className="stack">
      <h2>Stack</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <FilterButton
            key={category}
            category={category}
            activeCategory={activeCategory}
            onClick={setActiveCategory}
          />
        ))}
      </div>

      {/* Stack Items */}
      <div className="stack-items">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="stack-item">
            {iconMap[skill.icon] ? (
              <FontAwesomeIcon icon={iconMap[skill.icon]} />
            ) : (
              <span className="icon-fallback">{skill.name[0]}</span>
            )}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;
