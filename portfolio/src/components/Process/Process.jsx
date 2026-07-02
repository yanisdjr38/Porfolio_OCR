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

function Process() {
  return (
    <motion.section
      className="process-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h2 variants={revealUp} custom={0}>
        Comment ça se passe <span className="span-title"></span>
      </motion.h2>

      <motion.div className="process-grid" variants={containerVariants}>
        {data.process.map((step, index) => (
          <motion.article
            key={step.step}
            className="process-card"
            variants={revealUp}
            custom={index + 1}
            whileHover={hoverLift}
            whileTap={tapPress}
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
