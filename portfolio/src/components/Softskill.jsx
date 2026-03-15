import data from "../backend/data.json";
import "../styles/_softskill.scss";
function Softskill() {
  return (
    <section className="softskill-section">
      <h2>Soft Skills</h2>
      <ul className="softskill-list">
        {data.softskills.map((skill, index) => (
          <li key={index} className="softskill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Softskill;
