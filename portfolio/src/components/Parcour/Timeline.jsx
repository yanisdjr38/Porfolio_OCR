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
 */
function Timeline({ name, description, niveau, lieu, stack, link }) {
  return (
    <div className="timeline-card">
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
        <button className="button-link">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Voir le diplôme
          </a>
        </button>
      </div>
    </div>
  );
}

export default Timeline;
