//eslint-disable-next-line
import { motion } from "framer-motion";
import data from "../../../backend/data.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

function Process() {
  return (
    <motion.section
      className="process-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 variants={itemVariants}>
        Comment ça se passe <span className="span-title"></span>
      </motion.h2>

      <motion.div className="process-grid" variants={containerVariants}>
        {data.process.map((step) => (
          <motion.article
            key={step.step}
            className="process-card"
            variants={itemVariants}
          >
            <span className="process-step">{step.step}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Process;
