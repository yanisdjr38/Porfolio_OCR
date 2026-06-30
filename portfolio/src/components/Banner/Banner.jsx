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
      <motion.h1
        className="banner-title"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        Yanis <span className="banner-title-span">Djouahra</span>
      </motion.h1>
      <motion.h2
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="banner-subtitle"
      >
        Votre site fonctionne. Vous captez des clients. C'est tout ce qui
        compte.
      </motion.h2>
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
          Vous avez un site cassé? WordPress qui rechigne? Une idée à mettre en
          ligne? Je fais ça. Sans prise de tête. Sans facture surprise. Juste du
          travail solide qui rend votre vie plus facile.
        </motion.p>
      </div>{" "}
      <motion.ul
        className="banner-trust"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <li>Réponse garantie en 24h</li>
        <li>Budget transparent</li>
        <li>Zéro surprise</li>
      </motion.ul>
      <motion.div
        className="banner-actions"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        <a className="button-link banner-button" href="#services">
          Voir ce que je fais
        </a>
        <a className="button-link banner-button" href="#contact">
          Prendre rendez-vous
        </a>
      </motion.div>
      <a
        href="#services"
        className="scroll-down-arrow"
        aria-label="Scroller vers le bas"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 10 12 16 18 10"></polyline>
        </svg>
      </a>
    </section>
  );
}

export default Banner;
