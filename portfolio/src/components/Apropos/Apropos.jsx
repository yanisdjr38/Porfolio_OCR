//eslint-disable-next-line
import { motion } from "framer-motion";
import photoYD from "../../assets/images/photo-yd.png";
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
    <section className="apropos">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h2 variants={itemVariants}>
          Pourquoi me choisir <span className="span-title"></span>
        </motion.h2>

        {/* Section description - Full width */}
        <article className="apropos-article apropos-article-description">
          <div className="apropos-description-layout">
            <motion.img
              src={photoYD}
              alt="Yanis Djouahra, développeur web freelance"
              className="apropos-photo"
              variants={itemVariants}
            />
            <div className="apropos-description-content">
              <motion.h3 variants={itemVariants}>
                Un dev qui parle business, pas jargon
              </motion.h3>
              <motion.div
                variants={itemVariants}
                className="apropos-description"
              >
                <p>
                  Avant de coder, j'ai travaillé dans le commercial et la
                  communication. Je comprends ce que vous voulez vraiment dire
                  quand vous dites « je veux un beau site » : vous voulez un
                  site qui fait rentrer des clients, pas un projet d'expo.
                </p>
                <div className="apropos-separator"></div>
                <p className="apropos-description-highlight">
                  Une méthode claire, des délais annoncés à l'avance, et un site
                  pensé pour être utile à votre activité.
                </p>
              </motion.div>
            </div>
          </div>
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
