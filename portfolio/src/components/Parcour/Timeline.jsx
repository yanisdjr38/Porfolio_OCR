// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  hoverLift,
  sectionViewport,
  tapPress,
} from "../../utils/motionVariants";

/**
 * Composant Timeline - Carte affichant une expérience ou une formation
 * Utilisé dans la section Parcours pour afficher l'historique professionnel
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.name - Nom de l'expérience/formation
 * @param {string} props.description - Description du poste/diplôme
 * @param {string} props.niveau - Niveau/Title du poste
 * @param {string} props.lieu - Lieu de travail/étude
 * @param {Array<string>} props.stack - Technologies/compétences acquises
 * @param {string} props.link - Lien vers le certificat/diplôme
 * @param {string} props.align - Alignement visuel de la carte (left|right)
 */
function Timeline({ name, description, niveau, lieu, stack, link, align }) {
  return (
    <motion.article
      className={`timeline-card ${align === "right" ? "timeline-card--right" : "timeline-card--left"}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={sectionViewport}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverLift}
    >
      {/* En-tête avec titre */}
      <div className="card-title">
        <h3 className="heading">{name}</h3>
      </div>

      {/* Contenu principal */}
      <div className="card-content">
        {/* Niveau/Titre du poste */}
        <p className="timeline-niveau">{niveau}</p>
        {/* Localisation */}
        <p className="timeline-lieu">{lieu}</p>
        {/* Description */}
        <p>{description}</p>
      </div>

      {/* Stack de compétences */}
      <div className="card-stack">
        <ul className="stack-list">
          {stack.map((tech) => (
            <li key={tech} className="stack-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Pied: lien vers le certificat */}
      <div className="card-footer">
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link card-link"
          data-text="Voir le diplôme"
          whileHover={{ scale: 1.03 }}
          whileTap={tapPress}
        >
          <span>Voir le diplôme</span>
        </motion.a>
      </div>
    </motion.article>
  );
}

export default Timeline;
