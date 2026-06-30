import { faBolt, faLock, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import data from "../../../backend/data.json";

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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * Composant Resultats - Affiche les résultats et impacts
 * @component
 * @returns {JSX.Element} Liste animée des résultats avec icônes
 */
function Resultats() {
  return (
    <motion.div className="resultats-container">
      <motion.h3 variants={titleVariants}>Ce que vous gagnez</motion.h3>
      <motion.ul
        className="resultats-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.resultats.map((resultat, index) => (
          <motion.li key={index} variants={itemVariants}>
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
