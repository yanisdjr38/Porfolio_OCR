import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

/**
 * Animation variant pour les éléments du bannière
 * Utilise un paramètre custom pour un délai progressif
 */
const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1 },
  }),
};

/**
 * Composant Banner - Section d'entrée du portfolio
 * Affiche le titre, sous-titre et liens sociaux avec animations
 * @component
 */
function Banner() {
  return (
    <section id="home" className="banner">
      <span className="span-title-style">SYSTEME_INITALIZED</span>
      <motion.h1
        className="banner-title"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Yanis <span className="banner-title-span">Djouahra</span>
      </motion.h1>
      <motion.h3
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="banner-subtitle"
      >
        Développeur Web Full Stack
      </motion.h3>
      <ul className="social-icons">
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="icon-items"
        >
          <a
            href="https://github.com/yanisdjr38"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </motion.li>
        <motion.li
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          className="icon-items"
        >
          <a
            href="https://www.linkedin.com/in/yanis-djouahra/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </motion.li>
      </ul>
      <div className="banner-description">
        <motion.p
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          De la stratégie commerciale au développement React : Créateur
          d’applications déterminé et centré sur l’utilisateur
        </motion.p>
      </div>
    </section>
  );
}

export default Banner;
