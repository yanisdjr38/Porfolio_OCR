import data from "../../backend/data.json";
import Timeline from "./Timeline";

function Parcour() {
  return (
    <section className="parcour">
      <h2>Parcours</h2>
      <div className="parcour-container">
        {data.stack.Parcours.map((item, index) => (
          <Timeline
            key={index}
            name={item.name}
            description={item.description}
            niveau={item.niveau}
            lieu={item.lieu}
            stack={item.stack}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Parcour;
