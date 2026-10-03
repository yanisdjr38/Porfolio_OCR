// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
/**
 * Animation variants pour les cartes de témoignage
 */
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/**
 * Composant TemoignageCard - Affiche une carte de témoignage
 * @component
 * @param {Object} temoignage - Les données du témoignage
 * @param {string} temoignage.nom - Nom de la personne
 * @param {string} temoignage.role - Rôle/Poste
 * @param {string} temoignage.entreprise - Entreprise
 * @param {string} temoignage.temoignage - Contenu du témoignage
 * @param {string} photoSrc - Photo de profil importée
 * @returns {JSX.Element} Carte de témoignage animée
 */
function TemoignageCard({ temoignage, photoSrc }) {
  const quote =
    temoignage.temoignage.length > 160
      ? `${temoignage.temoignage.slice(0, 157)}...`
      : temoignage.temoignage;

  return (
    <motion.div
      className="temoignage-card"
      variants={cardVariants}
      whileHover={{ y: -8 }}
    >
      {/* Contenu du témoignage */}
      <div className="temoignage-content">
        <p className="temoignage-text">"{quote}"</p>
      </div>

      {/* Informations de la personne */}
      <div className="temoignage-author">
        <div className="author-avatar">
          {photoSrc ? (
            <img src={photoSrc} alt={temoignage.alt} className="avatar-image" />
          ) : null}
        </div>
        <div className="author-info">
          <h3 className="author-name">{temoignage.nom}</h3>
          <p className="author-role">{temoignage.role}</p>
          <p className="author-company">{temoignage.entreprise}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TemoignageCard;
