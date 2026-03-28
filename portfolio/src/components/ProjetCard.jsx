const ProjetCard = ({ title, description, link, stack }) => {
  return (
    <div className="card">
      <div className="card-title">
        <p className="heading">{title}</p>
      </div>

      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-stack">
        <ul className="stack-list">
          {stack.map((tech, index) => (
            <li key={index} className="stack-item">
              {tech}
            </li>
          ))}
        </ul>
      </div>
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
    </div>
  );
};

export default ProjetCard;
