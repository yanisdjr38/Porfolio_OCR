//eslint-disable-next-line
import { motion } from "framer-motion";
import data from "../../backend/data.json";
import ProjetCard from "./ProjetCard";

/**
 * Animation variants pour l'effet en cascade des projets
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
 * Composant Projet - Section galerie de projets
 * Affiche tous les projets depuis la source de données avec animations
 * @component
 */
function Projet() {
  return (
    <section id="projects" className="projet">
      {/* Titre de la section avec décoration */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mes projets <span className="span-title"></span>
      </motion.h2>

      {/* Grille des projets avec animation en cascade */}
      <motion.div
        className="projet-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Parcourt les projets depuis la source de données */}
        {data.stack.Projets.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="projet-item"
          >
            {/* Composant carte du projet */}
            <ProjetCard
              title={project.name}
              description={project.description}
              image={project.image}
              stack={project.stack}
              link={project.link}
              className="projet-card"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projet;
