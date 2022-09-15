import React from "react";

export default function ProductFilterButton({
  id,
  text,
  eventHandler,
  selected,
}) {
  return (
    <div className="product-filter">
      <button
        id={id}
        onClick={eventHandler}
        className={selected === id.toString() ? "button-active" : undefined}
      >
        {text}
      </button>
    </div>
  );
}
