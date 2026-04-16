//eslint-disable-next-line
import { motion } from "framer-motion";
import Stack from "./Stack";

/**
 * Animation variants pour l'effet cascade
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * Composant Compétence - Section des compétences techniques
 * Affiche la grille de technologies avec filtrage par catégorie
 * @component
 */
function Compétence() {
  return (
    <motion.section
      id="skills"
      className="competence-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants}>
        Compétences Techniques <span className="span-title"></span>
      </motion.h2>

      <motion.div className="competence-list" variants={itemVariants}>
        <Stack />
      </motion.div>
    </motion.section>
  );
}

export default Compétence;
