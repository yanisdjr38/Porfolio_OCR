import "../styles/_card.scss";

const Card = ({
  title,
  description,
  link,
  stack,
  image = "path/to/image.jpg",
}) => {
  return (
    <div className="card">
      <img src={image} alt={title || "Card Image"} />
      <p className="heading">{title}</p>
      <p>{description}</p>
      <ul className="stack-list">
        {stack.map((tech, index) => (
          <li key={index} className="stack-item">
            {tech}
          </li>
        ))}
      </ul>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Voir le projet
      </a>
    </div>
  );
};

export default Card;
