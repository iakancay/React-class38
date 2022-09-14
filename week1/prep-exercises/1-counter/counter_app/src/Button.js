import React from "react";

export default function Button({ eventHandler, type }) {
  return <button onClick={eventHandler}>{type}</button>;
}
