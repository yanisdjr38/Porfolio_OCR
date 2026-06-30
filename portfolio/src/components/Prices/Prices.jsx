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

function Prices() {
  return (
    <motion.section
      id="tarifs"
      className="prices-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2 variants={itemVariants}>
        Formats & délais <span className="span-title"></span>
      </motion.h2>

      <motion.div className="prices-grid" variants={containerVariants}>
        {data.pricing.map((item) => (
          <motion.article
            key={item.label}
            className="price-card"
            variants={itemVariants}
          >
            <span className="price-label">{item.label}</span>
            <h3>{item.detail}</h3>
            <p>{item.time}</p>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Prices;
