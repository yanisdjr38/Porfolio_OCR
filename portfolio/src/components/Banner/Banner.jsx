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
    <section className="banner">
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
        Un site qui travaille pour vous, même quand vous dormez.
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
          TPE, PME, indépendant : votre site doit convaincre vos visiteurs de
          vous contacter avant qu'ils partent chez un concurrent. Je conçois des
          sites vitrines, landing pages et interfaces React pensés pour ça, avec
          un accompagnement clair de A à Z.
        </motion.p>
      </div>
      <motion.ul
        className="banner-proof"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <li>📞 Appel découverte gratuit (20 min)</li>
        <li>⚡ Réponse sous 24h</li>
        <li>📋 Devis clair sous 48h</li>
      </motion.ul>
      <motion.ul
        className="banner-trust"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        <li>Révisions incluses</li>
        <li>Zéro jargon technique</li>
        <li>Livraison dans les délais</li>
      </motion.ul>
      <motion.div
        className="banner-actions"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        custom={7}
      >
        <a className="button-link banner-button" href="#contact">
          Démarrer mon projet
        </a>
        <a className="button-link banner-button" href="#projects">
          Voir mes réalisations
        </a>
      </motion.div>
    </section>
  );
}

export default Banner;
