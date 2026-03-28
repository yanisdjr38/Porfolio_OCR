import { motion } from "framer-motion";
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
          <motion.h2 variants={itemVariants}>
            À propos de moi <span className="span-title"></span>
          </motion.h2>
          <motion.h3 variants={itemVariants}>
            Un profil hybride au service de la performance web{" "}
          </motion.h3>
          <div className="apropos-description">
            <motion.p variants={itemVariants}>
              Issu d'une formation en communication et en développement
              commercial, j'ai acquis une compréhension profonde des besoins
              utilisateur. J'applique cette vision stratégique au développement
              React, en créant des interfaces intuitives et performantes
              centrées sur l'expérience utilisateur.
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
