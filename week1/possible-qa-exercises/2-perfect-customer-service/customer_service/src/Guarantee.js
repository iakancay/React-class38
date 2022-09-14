import React from "react";

export default function Guarantee({ img, title, description }) {
  return (
    <div className="message">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
