import data from "../../../backend/data.json";

/**
 * Composant Experience - Affiche le parcours professionnel
 * @component
 * @returns {JSX.Element} Liste des expériences professionnelles
 */
function Experience() {
  const experiences = data.experiences || [];

  return (
    <ul className="experience-list">
      {experiences.map((exp) => (
        <li key={`${exp.role}-${exp.company}`}>
          <strong>{exp.role}</strong> — {exp.company}
          {exp.location ? `, ${exp.location}` : ""} ({exp.year})
        </li>
      ))}
    </ul>
  );
}

export default Experience;
