// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import data from "../../../backend/data.json";
import {
  createStaggerContainer,
  revealSide,
  revealUp,
  sectionViewport,
  tapPress,
} from "../../utils/motionVariants";

/**
 * Animation variants pour les éléments de la liste
 */
const containerVariants = createStaggerContainer(0.1, 0.03);

/**
 * Composant Capacites - Affiche les capacités clés
 * @component
 * @returns {JSX.Element} Liste animée des capacités
 */
function Capacites() {
  return (
    <motion.div
      className="capacites-container"
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h3 variants={revealUp} custom={0}>
        Ce que je propose
      </motion.h3>
      <motion.ul className="capacites-list" variants={containerVariants}>
        {data.capacites.map((capacite, index) => (
          <motion.li
            key={index}
            variants={revealSide}
            custom={-1}
            whileHover={{ x: 6 }}
            whileTap={tapPress}
          >
            {capacite}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Capacites;
