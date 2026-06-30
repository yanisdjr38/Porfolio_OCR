/**
 * Composant ProjetCard - Carte affichant les détails d'un projet
 * Affiche le titre, la description, le contexte, le résultat et un lien vers le projet
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.title - Titre du projet
 * @param {string} props.description - Description du projet
 * @param {string} props.problem - Besoin ou contexte du projet
 * @param {string} props.result - Résultat obtenu ou bénéfice
 * @param {Array<string>} props.stack - Technologies utilisées
 * @param {string} props.link - URL du projet
 * @param {string} props.image - URL de l'image du projet
 */
const ProjetCard = ({
  title,
  description,
  problem,
  result,
  link,
  stack,
  image,
}) => {
  return (
    <article className="card">
      {/* Image du projet avec cover et titre - Cliquable */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-image-link"
      >
        <div className="card-image">
          <img src={image} alt={`Aperçu du projet ${title}`} loading="lazy" />
          <div className="card-image-overlay">
            <h3 className="card-overlay-title">{title}</h3>
          </div>
        </div>
      </a>

      {/* Section contenu - Description du projet */}
      <div className="card-content">
        <div className="card-meta">
          <div className="card-meta-item">
            <span className="card-meta-label">Besoin</span>
            <p>{problem}</p>
          </div>
          <div className="card-meta-item">
            <span className="card-meta-label">Résultat</span>
            <p>{result}</p>
          </div>
        </div>
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
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link card-link"
          data-text="Voir la réalisation"
        >
          <span>Voir la réalisation</span>
        </a>
      </div>
    </article>
  );
};

export default ProjetCard;
