//eslint-disable-next-line
import { motion } from "framer-motion";
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
    <section id="about" className="apropos-container apropos">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants}>
          À propos de moi <span className="span-title"></span>
        </motion.h2>
        <div className="apropos-softskill-container">
          <article className="apropos-article">
            <motion.h3 variants={itemVariants}>
              Un profil hybride au service de la performance web
            </motion.h3>
            <motion.p variants={itemVariants} className="apropos-description">
              Issu d'une formation en communication et en développement
              commercial, j'ai acquis une compréhension profonde des besoins
              utilisateur. J'applique cette vision stratégique au développement
              React, en créant des interfaces intuitives et performantes
              centrées sur l'expérience utilisateur.
            </motion.p>
          </article>
          <article className="softskill-article">
            <motion.div variants={itemVariants} className="softskill-container">
              <Softskill />
            </motion.div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

export default Apropos;
