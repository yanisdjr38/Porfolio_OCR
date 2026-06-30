//eslint-disable-next-line
import { motion } from "framer-motion";
import Education from "./Education";
import Experience from "./Experience";
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
          Pourquoi travailler avec moi ? <span className="span-title"></span>
        </motion.h2>

        {/* Section description - Full width */}
        <article className="apropos-article apropos-article-description">
          <motion.h3 variants={itemVariants}>
            Pourquoi c'est différent avec moi
          </motion.h3>
          <motion.div variants={itemVariants} className="apropos-description">
            <p>
              Je suis développeur depuis 2 ans, mais avant ça je venais du
              commercial et de la communication. Ça change tout: je parle votre
              langue, pas celle des techno-geeks. Quand vous dites « je veux un
              formulaire », je comprends qu'à travers ce formulaire, c'est une
              relation client qui commence.
            </p>
            <div className="apropos-separator"></div>
            <p className="apropos-description-highlight">
              Pas de promesses, des faits: délais tenus, zéro surprise, et des
              gens qui reviennent.
            </p>
          </motion.div>
        </article>

        {/* Section 4 colonnes: collaboration | repères | formation | centres d'intérêt */}
        <div className="apropos-three-columns">
          <article className="apropos-column">
            <motion.h3 variants={itemVariants} className="column-title">
              Ce que vous pouvez attendre
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
              Disponibilité & fiabilité
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
              Zone et missions
            </motion.h3>
            <motion.div
              variants={itemVariants}
              className="column-content education"
            >
              <Education />
            </motion.div>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

export default Apropos;
