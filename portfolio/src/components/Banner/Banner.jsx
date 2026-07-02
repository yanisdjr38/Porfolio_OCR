import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  createStaggerContainer,
  hoverLift,
  revealUp,
  tapPress,
} from "../../utils/motionVariants";

/**
 * Animation variant pour les éléments du bannière
 * Utilise un paramètre custom pour un délai progressif
 */
const containerVariants = createStaggerContainer(0.1, 0.04);

/**
 * Composant Banner - Section d'entrée du portfolio
 * Affiche le titre, sous-titre et liens sociaux avec animations
 * @component
 */
function Banner() {
  return (
    <motion.section
      className="banner"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="banner-title" variants={revealUp} custom={0}>
        Yanis <span className="banner-title-span">Djouahra</span>
      </motion.h1>
      <motion.h2 variants={revealUp} custom={1} className="banner-subtitle">
        Un site qui travaille pour vous, même quand vous dormez.
      </motion.h2>
      <ul className="social-icons">
        <motion.li
          variants={revealUp}
          custom={2}
          className="icon-items"
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={tapPress}
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
          variants={revealUp}
          custom={3}
          className="icon-items"
          whileHover={{ scale: 1.12, y: -4 }}
          whileTap={tapPress}
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
        <motion.p variants={revealUp} custom={4}>
          TPE, PME, indépendant : votre site doit convaincre vos visiteurs de
          vous contacter avant qu'ils partent chez un concurrent. Je conçois des
          sites vitrines, landing pages et interfaces React pensés pour ça, avec
          un accompagnement clair de A à Z.
        </motion.p>
      </div>
      <motion.ul className="banner-proof" variants={revealUp} custom={5}>
        <li>📞 Appel découverte gratuit (20 min)</li>
        <li>⚡ Réponse sous 24h</li>
        <li>📋 Devis clair sous 48h</li>
      </motion.ul>
      <motion.ul className="banner-trust" variants={revealUp} custom={6}>
        <li>Révisions incluses</li>
        <li>Zéro jargon technique</li>
        <li>Livraison dans les délais</li>
      </motion.ul>
      <motion.div className="banner-actions" variants={revealUp} custom={7}>
        <motion.a
          className="button-link banner-button"
          href="#contact"
          whileHover={hoverLift}
          whileTap={tapPress}
        >
          Démarrer mon projet
        </motion.a>
        <motion.a
          className="button-link banner-button"
          href="#projects"
          whileHover={hoverLift}
          whileTap={tapPress}
        >
          Voir mes réalisations
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Banner;
