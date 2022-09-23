import React from "react";

export default function ProductFilterButton({
  category,
  selectedCategory,
  setSelectedCategory,
}) {
  const handleOnClick = () => {
    setSelectedCategory(category);
  };
  return (
    <div className="product-filter">
      <button
        onClick={handleOnClick}
        className={selectedCategory === category ? "button-active" : undefined}
      >
        {category}
      </button>
    </div>
  );
}
