import "../styles/_card.scss";

function Card({ title, description, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a
        href={link}
        className="card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet
      </a>
    </div>
  );
}

export default Card;
