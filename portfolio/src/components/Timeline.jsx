import "../styles/_timeline.scss";

function Timeline({ name, description, niveau, lieu, stack, link }) {
  return (
    <div className="timeline-item">
      <div className="timeline-middle">
        <div className="timeline-circle"></div>
      </div>
      <div className="timeline-component timeline-content">
        <div className="timeline-information">
          <h3 className="timeline-title">{name}</h3>
          <p className="timeline-description">{description}</p>
          <p className="timeline-niveau">{niveau}</p>
          <p className="timeline-lieu">{lieu}</p>
          <ul className="timeline-stack">
            {stack.map((skill, index) => (
              <li className="timeline-items" key={index}>
                {skill}
              </li>
            ))}
          </ul>
          <div className="timeline-link">
            <a href={link} target="_blank" rel="noopener noreferrer">
              Voir le diplome
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
