/**
 * Composant Softskill - Affiche la liste des soft skills
 * Les skills sont chargées depuis le fichier de données JSON
 * @component
 */
import data from "../../backend/data.json";

function Softskill() {
  // Récupère les soft skills depuis la source de données
  const softskills = data.softskills || [];

  return (
    <section className="softskill-section">
      {/* Titre de la section */}
      <h2>Soft Skills</h2>

      {/* Liste des soft skills */}
      <ul className="softskill-list">
        {softskills.map((skill) => (
          <li key={skill} className="softskill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Softskill;
