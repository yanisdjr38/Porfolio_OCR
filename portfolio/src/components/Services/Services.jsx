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

function Services() {
  return (
    <motion.section
      id="services"
      className="services-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2 variants={itemVariants}>
        Services <span className="span-title"></span>
      </motion.h2>

      <motion.p className="services-intro" variants={itemVariants}>
        Choisissez le niveau d'accompagnement adapte a votre objectif: corriger,
        ameliorer, ou lancer un site qui genere plus de demandes.
      </motion.p>

      <motion.div className="services-audience" variants={itemVariants}>
        {data.audience.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </motion.div>

      <motion.div className="services-grid" variants={containerVariants}>
        {data.services.map((service) => (
          <motion.article
            key={service.title}
            className="service-card"
            variants={itemVariants}
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
