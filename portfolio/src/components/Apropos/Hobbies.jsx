import data from "../../../backend/data.json";

/**
 * Composant Hobbies - Affiche les hobbies/intérêts
 * @component
 * @returns {JSX.Element} Contenu des hobbies
 */
function Hobbies() {
  const hobbiesList = data.hobbies || [];

  return (
    <ul className="hobbies-list">
      {hobbiesList.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}

export default Hobbies;
