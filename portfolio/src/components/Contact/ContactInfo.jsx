import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

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
        <h3 className="contact-info-title">Autres moyens de contact</h3>
      </div>

      {/* Email */}
      <div className="contact-item">
        <div className="contact-label">Email</div>
        <a
          href="mailto:yanis.djouahra38@gmail.com"
          className="contact-link email-link"
        >
          yanis.djouahra38@gmail.com
        </a>
      </div>

      {/* Réseaux sociaux */}
      <div className="contact-buttons">
        <a
          href="https://github.com/yanisdjr38"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github-btn"
          aria-label="GitHub"
          data-text="GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/yanis-djouahra/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin-btn"
          aria-label="LinkedIn"
          data-text="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          <span>LinkedIn</span>
        </a>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
