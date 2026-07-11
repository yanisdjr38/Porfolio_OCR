import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Composant Experience - Affiche disponibilité et fiabilité
 * @component
 * @returns {JSX.Element} Contenu de disponibilité et fiabilité
 */
function Experience() {
  const availability = [
    "Réponse sous 24h",
    "Disponible rapidement",
    "Livraison à temps",
    "Suivi transparent",
    "Révisions incluses",
    "Pas de surprise",
  ];

  return (
    <ul className="experience-list">
      {availability.map((item, index) => (
        <li key={index}>
          <FontAwesomeIcon icon={faCircleCheck} /> {item}
        </li>
      ))}
    </ul>
  );
}

export default Experience;
