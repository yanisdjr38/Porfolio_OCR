import "../styles/_filterbutton.scss";

function FilterButton({ category, activeCategory, onClick }) {
  const isActive = category === activeCategory;

  return (
    <button
      className={`filter-button ${isActive ? "active" : ""}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
}

export default FilterButton;
