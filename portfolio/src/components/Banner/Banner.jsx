import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
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
        Je conçois des sites qui transforment vos visiteurs en demandes de
        devis.
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
          TPE, PME, indépendants: vous avez besoin d'un site clair, rapide et
          utile pour votre business. Je vous accompagne de l'idée à la mise en
          ligne avec un plan simple, un budget transparent, et un suivi concret.
        </motion.p>
      </div>
      <motion.ul
        className="banner-proof"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <li>Réponse sous 24h</li>
        <li>Appel découverte offert (20 min)</li>
        <li>Plan d'action clair en 48h</li>
      </motion.ul>
      <motion.ul
        className="banner-trust"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        <li>Révisions incluses</li>
        <li>Budget transparent</li>
        <li>Zéro surprise</li>
      </motion.ul>
      <motion.div
        className="banner-actions"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={7}
      >
        <a className="button-link banner-button" href="#contact">
          Recevoir un plan d'action
        </a>
        <a className="button-link banner-button" href="#projects">
          Voir des résultats concrets
        </a>
      </motion.div>
    </section>
  );
}

export default Banner;
