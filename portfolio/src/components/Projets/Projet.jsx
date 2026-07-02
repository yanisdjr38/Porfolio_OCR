//eslint-disable-next-line
import { motion } from "framer-motion";
import data from "../../../backend/data.json";
import cardtrackrImg from "../../assets/images/cardtrackr.webp";
import effetmerImg from "../../assets/images/effetmer.webp";
import kasaImg from "../../assets/images/kasa.webp";
import monVieuxGrimoireImg from "../../assets/images/mon-vieux-grimoire.webp";
import {
  createStaggerContainer,
  hoverLift,
  revealUp,
  sectionViewport,
} from "../../utils/motionVariants";
import ProjetCard from "./ProjetCard";

/**
 * Animation variants pour l'effet en cascade des projets
 */
const containerVariants = createStaggerContainer(0.14, 0.06);

/**
 * Composant Projet - Section galerie de projets
 * Affiche tous les projets depuis la source de données avec animations
 * @component
 */
function Projet() {
  // Mapping des noms de projets à leurs images importées
  const projectImages = {
    Kasa: kasaImg,
    "Mon Vieux Grimoire": monVieuxGrimoireImg,
    Effetmer: effetmerImg,
    CardTrackr: cardtrackrImg,
  };

  return (
    <section className="projet">
      {/* Titre de la section avec décoration */}
      <motion.h2
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={sectionViewport}
      >
        Mes réalisations <span className="span-title"></span>
      </motion.h2>

      <motion.p
        className="projet-intro"
        variants={revealUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={sectionViewport}
      >
        Des projets réels, avec un vrai besoin à satisfaire. Pas des démos : des
        interfaces pensées pour être utilisées.
      </motion.p>

      {/* Grille des projets avec animation en cascade */}
      <motion.div
        className="projet-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        {/* Parcourt les projets depuis la source de données */}
        {data.stack.Projets.map((project, index) => (
          <motion.div
            key={index}
            variants={revealUp}
            custom={index + 2}
            className="projet-item"
            whileHover={hoverLift}
          >
            {/* Composant carte du projet */}
            <ProjetCard
              title={project.name}
              description={project.description}
              problem={project.problem}
              result={project.result}
              image={projectImages[project.name]}
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
