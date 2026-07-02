//eslint-disable-next-line
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import data from "../../../backend/data.json";
import {
  createStaggerContainer,
  revealSide,
  revealUp,
  sectionViewport,
} from "../../utils/motionVariants";
import Timeline from "./Timeline";

/**
 * Animation variants pour l'effet cascade
 */
const containerVariants = createStaggerContainer(0.14, 0.08);

/**
 * Composant Parcour - Section expérience et formation
 * Affiche une timeline des expériences professionnelles et diplômes
 * @component
 */
function Parcour() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxOneY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const parallaxTwoY = useTransform(scrollYProgress, [0, 1], [50, -60]);
  const parallaxOpacity = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.16, 0.3, 0.14],
  );

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="parcour"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div
        className="parcour-parallax parcour-parallax--one"
        style={{ y: parallaxOneY, opacity: parallaxOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className="parcour-parallax parcour-parallax--two"
        style={{ y: parallaxTwoY, opacity: parallaxOpacity }}
        aria-hidden="true"
      />

      <motion.h2 variants={revealUp} custom={0}>
        Parcours <span className="span-title"></span>
      </motion.h2>

      <motion.div className="parcour-container" variants={containerVariants}>
        {data.stack.Parcours.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-lane ${index % 2 === 0 ? "timeline-lane--left" : "timeline-lane--right"}`}
            variants={revealSide}
            custom={index % 2 === 0 ? -1 : 1}
            whileInView="visible"
            initial="hidden"
            viewport={sectionViewport}
          >
            <Timeline
              name={item.name}
              description={item.description}
              niveau={item.niveau}
              lieu={item.lieu}
              stack={item.stack}
              link={item.link}
              align={index % 2 === 0 ? "left" : "right"}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Parcour;
