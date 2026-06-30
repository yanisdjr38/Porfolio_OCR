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
        <li key={index}>✓ {item}</li>
      ))}
    </ul>
  );
}

export default Experience;
