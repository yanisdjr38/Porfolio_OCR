import data from "../../../backend/data.json";

/**
 * Composant AutresFormations - Affiche les formations hors parcours web
 * @component
 * @returns {JSX.Element} Liste des autres formations
 */
function AutresFormations() {
  const formations = data.stack?.AutresFormations || [];

  return (
    <ul className="education-list">
      {formations.map((formation, index) => (
        <li key={index} className="education-item">
          <strong>{formation.name}</strong> – {formation.niveau}
          <br />
          <span className="education-location">{formation.lieu}</span>
        </li>
      ))}
    </ul>
  );
}

export default AutresFormations;
