import { motion } from "framer-motion";
import FormContact from "./FormContact";

function Contact() {
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

  return (
    <motion.div
      className="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 className="contact-title" variants={itemVariants}>
        Contact <span className="span-title"></span>
      </motion.h2>
      <motion.div variants={itemVariants}>
        <FormContact />
      </motion.div>
    </motion.div>
  );
}

export default Contact;
