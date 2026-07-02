//eslint-disable-next-line
import { motion } from "framer-motion";
import photoYD from "../../assets/images/photo-yd.png";
import {
  createStaggerContainer,
  revealSide,
  revealUp,
  sectionViewport,
} from "../../utils/motionVariants";
import Education from "./Education";
import Experience from "./Experience";
import Softskill from "./Softskill";

/**
 * Animation variants pour le container et les items
 * Staggered animation avec délai progressive pour un effet en cascade
 */
const containerVariants = createStaggerContainer(0.14, 0.06);

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
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.h2 variants={revealUp} custom={0}>
          Pourquoi me choisir <span className="span-title"></span>
        </motion.h2>

        {/* Section description - Full width */}
        <article className="apropos-article apropos-article-description">
          <div className="apropos-description-layout">
            <motion.div custom={-1} variants={revealSide}>
              <motion.img
                src={photoYD}
                alt="Yanis Djouahra, développeur web freelance"
                className="apropos-photo"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <div className="apropos-description-content">
              <motion.h3 variants={revealUp} custom={1}>
                Un dev qui parle business, pas jargon
              </motion.h3>
              <motion.div
                variants={revealUp}
                custom={2}
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
            <motion.h3 variants={revealUp} custom={3} className="column-title">
              Ce que vous pouvez attendre
            </motion.h3>
            <motion.div
              variants={revealUp}
              custom={4}
              className="column-content softskill-wrapper"
            >
              <Softskill />
            </motion.div>
          </article>
          <article className="apropos-column">
            <motion.h3 variants={revealUp} custom={5} className="column-title">
              Disponibilité & fiabilité
            </motion.h3>
            <motion.div
              variants={revealUp}
              custom={6}
              className="column-content experience"
            >
              <Experience />
            </motion.div>
          </article>
          <article className="apropos-column">
            <motion.h3 variants={revealUp} custom={7} className="column-title">
              Zone et missions
            </motion.h3>
            <motion.div
              variants={revealUp}
              custom={8}
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
