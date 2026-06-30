// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import data from "../../../backend/data.json";

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
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
 * Composant Capacites - Affiche les capacités clés
 * @component
 * @returns {JSX.Element} Liste animée des capacités
 */
function Capacites() {
  return (
    <motion.div className="capacites-container">
      <motion.h3 variants={titleVariants}>Ce que je propose</motion.h3>
      <motion.ul
        className="capacites-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {data.capacites.map((capacite, index) => (
          <motion.li key={index} variants={itemVariants}>
            {capacite}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

export default Capacites;
