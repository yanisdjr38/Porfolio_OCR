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
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function Faq() {
  return (
    <motion.section
      className="faq-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 variants={itemVariants}>
        Ce que vous vous demandez sûrement <span className="span-title"></span>
      </motion.h2>

      <motion.div className="faq-list" variants={containerVariants}>
        {data.faq.map((item) => (
          <motion.article
            key={item.q}
            className="faq-item"
            variants={itemVariants}
          >
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Faq;
