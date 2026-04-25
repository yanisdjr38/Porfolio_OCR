import data from "../../../backend/data.json";

/**
 * Animation variants pour le composant Hobbies
 */
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

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
