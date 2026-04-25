//eslint-disable-next-line
import { motion } from "framer-motion";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Softskill from "./Softskill";

/**
 * Animation variants pour le container et les items
 * Staggered animation avec délai progressive pour un effet en cascade
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
 * Composant Apropos - Section "À propos" du portfolio
 * Affiche une description personnelle et les soft skills
 * @component
 */
function Apropos() {
  return (
    <section id="about" className="apropos">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants}>
          À propos de moi <span className="span-title"></span>
        </motion.h2>

        {/* Section description - Full width */}
        <article className="apropos-article apropos-article-description">
          <motion.h3 variants={itemVariants}>
            Un profil hybride au service de la performance web
          </motion.h3>
          <motion.p variants={itemVariants} className="apropos-description">
            Issu d'une formation en communication et en développement
            commercial, j'ai acquis une compréhension profonde des besoins
            utilisateur. J'applique cette vision stratégique au développement
            React, en créant des interfaces intuitives et performantes centrées
            sur l'expérience utilisateur.
          </motion.p>
        </article>

        {/* Section 3 colonnes: Soft Skills | Expériences | Hobbies */}
        <div className="apropos-three-columns">
          <article className="apropos-column">
            <motion.h3 variants={itemVariants} className="column-title">
              Soft Skills
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="column-content softskill-wrapper"
            >
              <Softskill />
            </motion.div>
          </article>
          <article className="apropos-column">
            <motion.h3 variants={itemVariants} className="column-title">
              Expériences Professionnelles
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="column-content experience"
            >
              <Experience />
            </motion.div>
          </article>
          <article className="apropos-column">
            <motion.h3 variants={itemVariants} className="column-title">
              Hobbies
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="column-content hobbies"
            >
              <Hobbies />
            </motion.div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

export default Apropos;
