/**
 * Composant Education - Affiche zone de disponibilité et modalités
 * @component
 * @returns {JSX.Element} Liste de disponibilité géographique
 */
function Education() {
  const availability = [
    "Disponible en France",
    "Sur place ou hybride",
    "Travail à distance possible",
    "Flexibilité selon le projet",
  ];

  return (
    <ul className="education-list">
      {availability.map((item, index) => (
        <li key={index} className="education-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Education;
