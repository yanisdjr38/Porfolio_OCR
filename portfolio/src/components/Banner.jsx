// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/_banner.scss";

function Banner() {
  return (
    <div className="banner">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Yanis Djouahra
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Développeur Web Full Stack
      </motion.p>
      <div className="banner-description">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          De la stratégie commerciale au développement React : Créateur
          d’applications déterminé et centré sur l’utilisateur
        </motion.p>
      </div>
    </div>
  );
}

export default Banner;
