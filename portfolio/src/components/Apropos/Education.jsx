import data from "../../../backend/data.json";

/**
 * Composant Education - Affiche zone de disponibilité et modalités
 * @component
 * @returns {JSX.Element} Liste de disponibilité géographique
 */
function Education() {
  const zone = data.zone || [];

  return (
    <ul className="education-list">
      {zone.map((item) => (
        <li key={item} className="education-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Education;
