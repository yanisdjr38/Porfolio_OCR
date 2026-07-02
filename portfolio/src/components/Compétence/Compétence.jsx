//eslint-disable-next-line
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  createStaggerContainer,
  revealSide,
  revealUp,
  sectionViewport,
} from "../../utils/motionVariants";
import Capacites from "./Capacites";
import Resultats from "./Resultats";
import Stack from "./Stack";

/**
 * Animation variants pour l'effet cascade
 */
const containerVariants = createStaggerContainer(0.16, 0.06);

/**
 * Composant Compétence - Section des compétences techniques
 * Layout: colonne sur mobile/tablette, deux colonnes sur desktop
 * @component
 */
function Compétence() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxGlowY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const parallaxGlowX = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const parallaxOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.14, 0.24, 0.12],
  );

  return (
    <motion.section
      ref={sectionRef}
      className="competence-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div
        className="competence-parallax competence-parallax--primary"
        style={{ y: parallaxGlowY, x: parallaxGlowX, opacity: parallaxOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className="competence-parallax competence-parallax--secondary"
        style={{ y: parallaxGlowY, opacity: parallaxOpacity }}
        aria-hidden="true"
      />

      <motion.h2 variants={revealUp} custom={0}>
        Services <span className="span-title"></span>
      </motion.h2>

      {/* Layout two-column desktop */}
      <div className="competence-layout">
        {/* Colonne gauche: Stack */}
        <motion.div
          className="competence-left"
          variants={revealSide}
          custom={-1}
        >
          <div className="competence-list">
            <Stack />
          </div>
        </motion.div>

        {/* Colonne droite: Capacités + Résultats */}
        <motion.div
          className="competence-right"
          variants={revealSide}
          custom={1}
        >
          <Capacites />
          <Resultats />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Compétence;
