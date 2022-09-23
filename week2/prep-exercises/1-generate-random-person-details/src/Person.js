import React from "react";

export default function Person({ first_name, last_name, email }) {
  return (
    <ul>
      <li>First name: {first_name}</li>
      <li>Last name: {last_name}</li>
      <li>Email: {email}</li>
    </ul>
  );
}
