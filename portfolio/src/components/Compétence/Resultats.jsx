import { faBolt, faLock, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import data from "../../../backend/data.json";
import {
  createStaggerContainer,
  revealUp,
  sectionViewport,
  tapPress,
} from "../../utils/motionVariants";

/**
 * Mapping des noms d'icônes aux objets icônes FontAwesome
 */
const iconMap = {
  faLock,
  faBolt,
  faMobile,
};

/**
 * Animation variants pour les éléments de la liste
 */
const containerVariants = createStaggerContainer(0.1, 0.03);

/**
 * Composant Resultats - Affiche les résultats et impacts
 * @component
 * @returns {JSX.Element} Liste animée des résultats avec icônes
 */
function Resultats() {
  return (
    <motion.div
      className="resultats-container"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h3 variants={revealUp} custom={0}>
        Ce que vous gagnez
      </motion.h3>
      <motion.ul className="resultats-list" variants={containerVariants}>
        {data.resultats.map((resultat, index) => (
          <motion.li
            key={index}
            variants={revealUp}
            custom={index + 1}
            whileHover={{ y: -4 }}
            whileTap={tapPress}
          >
            <div className="resultat-icon">
              <FontAwesomeIcon
                icon={iconMap[resultat.icon]}
                aria-hidden="true"
              />
            </div>
            <span className="resultat-title">{resultat.title}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Resultats;
