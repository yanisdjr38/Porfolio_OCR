import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { hoverLift, tapPress } from "../../utils/motionVariants";

/**
 * Animation variants
 */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * Composant ContactInfo - Infos de contact (email, réseaux sociaux)
 * @component
 * @returns {JSX.Element} Section avec email et liens réseaux
 */
function ContactInfo() {
  return (
    <motion.div className="contact-info" variants={itemVariants}>
      <div className="contact-info-header">
        <h3 className="contact-info-title">Première étape : me parler</h3>
      </div>

      <p className="contact-summary">
        Dites-moi ce que vous cherchez à accomplir, votre délai idéal et votre
        budget approximatif. Je vous réponds sous 24h avec une proposition
        claire et sans engagement.
      </p>

      <ul className="contact-commitments">
        <li>
          <FontAwesomeIcon icon={faCircleCheck} /> Réponse sous 24h
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleCheck} /> Devis écrit et transparent
        </li>
        <li>
          <FontAwesomeIcon icon={faCircleCheck} /> Aucun engagement avant votre
          accord
        </li>
      </ul>

      {/* Email */}
      <div className="contact-item">
        <div className="contact-label">Email</div>
        <motion.a
          href="mailto:yanis.djouahra38@gmail.com"
          className="contact-link email-link"
          whileHover={{ y: -2 }}
          whileTap={tapPress}
        >
          yanis.djouahra38@gmail.com
        </motion.a>
      </div>

      {/* Réseaux sociaux */}
      <div className="contact-buttons">
        <motion.a
          href="https://github.com/yanisdjr38"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github-btn"
          aria-label="GitHub"
          data-text="GitHub"
          whileHover={hoverLift}
          whileTap={tapPress}
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          href="https://www.linkedin.com/in/yanis-djouahra/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin-btn"
          aria-label="LinkedIn"
          data-text="LinkedIn"
          whileHover={hoverLift}
          whileTap={tapPress}
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <span>LinkedIn</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
