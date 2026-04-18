/**
 * Composant ProjetCard - Carte affichant les détails d'un projet
 * Affiche le titre, la description, la stack utilisée et un lien vers le projet
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.title - Titre du projet
 * @param {string} props.description - Description du projet
 * @param {Array<string>} props.stack - Technologies utilisées
 * @param {string} props.link - URL du projet
 * @param {string} props.image - URL de l'image du projet
 */
const ProjetCard = ({ title, description, link, stack, image }) => {
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
          <img src={image} alt="" />
          <div className="card-image-overlay">
            <h3 className="card-overlay-title">{title}</h3>
          </div>
        </div>
      </a>

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
          >
            Voir le projet
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjetCard;
