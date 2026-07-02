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

function Services() {
  return (
    <motion.section
      className="services-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.h2 variants={revealUp} custom={0}>
        Ce que je fais pour vous <span className="span-title"></span>
      </motion.h2>

      <motion.p className="services-intro" variants={revealUp} custom={1}>
        Que vous ayez un site cassé, un projet à lancer ou une idée à
        concrétiser, voici comment je peux vous aider concrètement.
      </motion.p>

      <motion.div className="services-audience" variants={revealUp} custom={2}>
        {data.audience.map((item) => (
          <motion.span
            key={item}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={tapPress}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>

      <motion.div className="services-grid" variants={containerVariants}>
        {data.services.map((service, index) => (
          <motion.article
            key={service.title}
            className="service-card"
            variants={revealUp}
            custom={index + 3}
            whileHover={hoverLift}
            whileTap={tapPress}
          >
            <div className="service-card-head">
              <h3>{service.title}</h3>
              <p>{service.idealFor}</p>
            </div>
            <div className="service-card-body">
              <p>{service.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Services;
