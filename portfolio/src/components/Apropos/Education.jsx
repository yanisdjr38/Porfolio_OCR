import data from "../../../backend/data.json";

/**
 * Composant Education - Affiche le parcours scolaire
 * @component
 * @returns {JSX.Element} Liste du parcours scolaire
 */
function Education() {
  const educations = data.stack?.Parcours || [];

  return (
    <ul className="education-list">
      {educations.map((edu, index) => (
        <li key={index} className="education-item">
          <strong>{edu.name}</strong> – {edu.niveau}
          <br />
          <span className="education-location">{edu.lieu}</span>
        </li>
      ))}
    </ul>
  );
}

export default Education;
