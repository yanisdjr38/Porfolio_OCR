import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

// Initialize icon library
library.add(fab, fas);

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
 * Composant ContactInfo - Infos de contact (email, réseaux sociaux, CV)
 * @component
 * @returns {JSX.Element} Section avec email, liens réseaux et CV
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

      {/* Réseaux sociaux et CV */}
      <div className="contact-buttons">
        <a
          href="https://github.com/yanisdjr38"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github-btn"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/yanis-djouahra/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin-btn"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
          LinkedIn
        </a>

        <a
          href="/src/assets/cv.pdf"
          download="Yanis_Djouahra_CV.pdf"
          className="contact-btn cv-btn"
          aria-label="Télécharger CV"
        >
          <FontAwesomeIcon icon={["fas", "file-pdf"]} />
          Mon CV
        </a>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
