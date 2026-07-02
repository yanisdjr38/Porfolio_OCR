//eslint-disable-next-line
import { motion } from "framer-motion";
import data from "../../../backend/data.json";
import {
  createStaggerContainer,
  hoverLift,
  revealUp,
  sectionViewport,
  tapPress,
} from "../../utils/motionVariants";

const containerVariants = createStaggerContainer();

function Prices() {
  return (
    <motion.section
      className="prices-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h2 variants={revealUp} custom={0}>
        Types de missions <span className="span-title"></span>
      </motion.h2>

      <motion.div className="prices-grid" variants={containerVariants}>
        {data.pricing.map((item, index) => (
          <motion.article
            key={item.label}
            className="price-card"
            variants={revealUp}
            custom={index + 1}
            whileHover={hoverLift}
            whileTap={tapPress}
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
