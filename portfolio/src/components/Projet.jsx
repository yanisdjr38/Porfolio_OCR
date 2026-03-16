import data from "../backend/data.json";
import "../styles/_projet.scss";

function Projet() {
  return (
    <div className="projet">
      <h2>Mes projets</h2>
      <div className="projet-container">
        {data.stack.Projets.map((project) => (
          <div className="projet-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projet;
