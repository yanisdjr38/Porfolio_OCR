import data from "../../../backend/data.json";

/**
 * Animation variants pour le composant Experience
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
 * Composant Experience - Affiche les expériences professionnelles
 * @component
 * @returns {JSX.Element} Contenu des expériences professionnelles
 */
function Experience() {
  const experiences = data.experiences || [];

  return (
    <ul className="experience-list">
      {experiences.map((exp, index) => (
        <li key={index}>
          <strong>{exp.role}</strong> – {exp.company}
          {exp.location && ` – ${exp.location}`} – {exp.year}
          {exp.type && ` (${exp.type})`}
        </li>
      ))}
    </ul>
  );
}

export default Experience;
