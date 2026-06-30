// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import data from "../../../backend/data.json";
import axelImg from "../../assets/images/testimonial-1.webp";
import sebastienImg from "../../assets/images/testimonial-2.webp";
import TemoignageCard from "./TemoignageCard";

/**
 * Animation variants pour l'effet cascade
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
 * Composant Temoignage - Section des témoignages clients
 * @component
 * @returns {JSX.Element} Section de témoignages avec grille de cartes
 */
function Temoignage() {
  const testimonialImages = {
    "Sébastien Gallet": sebastienImg,
    "Axel Gor": axelImg,
  };

  return (
    <motion.section
      id="testimonials"
      className="temoignage-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants}>
        Ce que disent les clients <span className="span-title"></span>
      </motion.h2>

      <motion.div
        className="temoignage-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.temoignages.map((temoignage, index) => (
          <TemoignageCard
            key={index}
            temoignage={temoignage}
            photoSrc={testimonialImages[temoignage.nom]}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Temoignage;
