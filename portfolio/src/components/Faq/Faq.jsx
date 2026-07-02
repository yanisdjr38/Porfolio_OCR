//eslint-disable-next-line
import { motion } from "framer-motion";
import data from "../../../backend/data.json";
import {
  createStaggerContainer,
  revealUp,
  sectionViewport,
  tapPress,
} from "../../utils/motionVariants";

const containerVariants = createStaggerContainer();

function Faq() {
  return (
    <motion.section
      className="faq-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h2 variants={revealUp} custom={0}>
        Ce que vous vous demandez sûrement <span className="span-title"></span>
      </motion.h2>

      <motion.div className="faq-list" variants={containerVariants}>
        {data.faq.map((item, index) => (
          <motion.article
            key={item.q}
            className="faq-item"
            variants={revealUp}
            custom={index + 1}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            whileTap={tapPress}
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
