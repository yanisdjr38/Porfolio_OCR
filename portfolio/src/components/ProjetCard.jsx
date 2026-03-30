/**
 * Composant ProjetCard - Carte affichant les détails d'un projet
 * Affiche le titre, la description, la stack utilisée et un lien vers le projet
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.title - Titre du projet
 * @param {string} props.description - Description du projet
 * @param {Array<string>} props.stack - Technologies utilisées
 * @param {string} props.link - URL du projet
 */
const ProjetCard = ({ title, description, link, stack }) => {
  return (
    <article className="card">
      {/* En-tête avec titre du projet */}
      <div className="card-title">
        <p className="heading">{title}</p>
      </div>

      {/* Section contenu - Description du projet */}
      <div className="card-content">
        <p>{description}</p>
      </div>

      {/* Section stack - Technologies utilisées */}
      <div className="card-stack">
        <ul className="stack-list">
          {stack.map((tech) => (
            <li key={tech} className="stack-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Pied de page avec bouton d'action */}
      <div className="card-footer">
        <button className="button-link">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            aria-label={`Voir le projet ${title}`}
          >
            Voir le projet
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjetCard;
