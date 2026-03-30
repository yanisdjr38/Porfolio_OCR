//eslint-disable-next-line
import { motion } from "framer-motion";
import data from "../../backend/data.json";
import Timeline from "./Timeline";

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
 * Composant Parcour - Section expérience et formation
 * Affiche une timeline des expériences professionnelles et diplômes
 * @component
 */
function Parcour() {
  return (
    <motion.section
      id="experience"
      className="parcour"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Parcours <span className="span-title"></span>
      </motion.h2>
      <motion.div
        className="parcour-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {data.stack.Parcours.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Timeline
              name={item.name}
              description={item.description}
              niveau={item.niveau}
              lieu={item.lieu}
              stack={item.stack}
              link={item.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Parcour;
