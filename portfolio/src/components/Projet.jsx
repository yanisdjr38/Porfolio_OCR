import data from "../backend/data.json";
import "../styles/_projet.scss";
import Card from "./Card";

function Projet() {
  return (
    <div className="projet">
      <h2>Mes projets</h2>
      <div className="projet-container">
        {data.stack.Projets.map((project, index) => (
          <Card
            key={index}
            title={project.name}
            description={project.description}
            image={project.image}
            stack={project.stack}
            link={project.link}
            className="projet-card"
          />
        ))}
      </div>
    </div>
  );
}

export default Projet;
