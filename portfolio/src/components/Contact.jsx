//eslint-disable-next-line
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import FormContact from "./FormContact";

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
 * Composant Contact - Section de contact
 * Affiche le formulaire de contact interactif et les infos de contact
 * @component
 */
function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="contact-title" variants={itemVariants}>
        Contact <span className="span-title"></span>
      </motion.h2>
      <motion.div className="contact-wrapper" variants={itemVariants}>
        <FormContact />
        <ContactInfo />
      </motion.div>
    </motion.section>
  );
}

export default Contact;
