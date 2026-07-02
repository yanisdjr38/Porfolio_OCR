//eslint-disable-next-line
import { motion } from "framer-motion";
import {
  createStaggerContainer,
  revealSide,
  revealUp,
  sectionViewport,
} from "../../utils/motionVariants";
import ContactInfo from "./ContactInfo";
import FormContact from "./FormContact";

/**
 * Animation variants pour l'effet cascade
 */
const containerVariants = createStaggerContainer(0.14, 0.08);

/**
 * Composant Contact - Section de contact
 * Affiche le formulaire de contact interactif et les infos de contact
 * @component
 */
function Contact() {
  return (
    <motion.section
      className="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h2 variants={revealUp} custom={0}>
        Décrivez-moi votre projet <span className="span-title"></span>
      </motion.h2>
      <motion.div className="contact-wrapper" variants={containerVariants}>
        <motion.div variants={revealSide} custom={-1}>
          <FormContact />
        </motion.div>
        <motion.div variants={revealSide} custom={1}>
          <ContactInfo />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
