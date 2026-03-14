// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/_apropos.scss";
import Softskill from "./Softskill";

function Apropos() {
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

  return (
    <div className="apropos-container">
      <section className="apropos">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants}>À propos de moi</motion.h2>
          <div className="apropos-description">
            <motion.h3 variants={itemVariants}>
              Un profil hybride au service de la performance web{" "}
            </motion.h3>
            <motion.p variants={itemVariants}>
              Mon parcours n’est pas linéaire, et c’est là ma plus grande force.
              Issu de la communication et du développement commercial, j'ai
              passé plusieurs années à analyser les besoins des clients et à
              élaborer des stratégies pour y répondre. Cette expérience m'a
              appris qu'une solution n'a de valeur que si elle est utile,
              accessible et parfaitement alignée sur les objectifs de
              l'utilisateur. Aujourd'hui, j'ai choisi de mettre cette vision
              stratégique au service du développement web. Formé par
              OpenClassrooms, je me suis spécialisé dans l'écosystème React pour
              transformer des concepts complexes en interfaces fluides et
              robustes.
            </motion.p>
          </div>

          <motion.div variants={itemVariants}>
            <div className="softskill-container">
              <Softskill />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Apropos;
