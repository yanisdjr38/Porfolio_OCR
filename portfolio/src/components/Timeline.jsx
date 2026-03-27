import "../styles/_timeline.scss";

function Timeline({ name, description, niveau, lieu, stack, link }) {
  return (
    <div className="timeline-card">
      <div className="card-title">
        <p className="heading">{name}</p>
      </div>

      <div className="card-content">
        <p className="timeline-niveau">{niveau}</p>
        <p className="timeline-lieu">{lieu}</p>
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
            Voir le diplôme
          </a>
        </button>
      </div>
    </div>
  );
}

export default Timeline;
