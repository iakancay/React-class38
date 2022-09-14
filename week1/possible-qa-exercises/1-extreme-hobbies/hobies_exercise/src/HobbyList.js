import React from "react";
import Hobby from "./Hobby";

export default function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      {hobbies.map((hobby) => (
        <Hobby hobby={hobby} />
      ))}
    </div>
  );
}
