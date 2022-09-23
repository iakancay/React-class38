import { useEffect, useState } from "react";
import Person from "./Person";

export default function PersonController() {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    const response = await fetch("https://www.randomuser.me/api?results=1");
    const { results } = await response.json();
    return results[0];
  };
  useEffect(() => {
    (async () => {
      const randomPerson = await getPerson();
      setPerson(randomPerson);
    })();
  }, []);
  return (
    <Person
      first_name={person?.name?.first}
      last_name={person?.name?.last}
      email={person?.email}
    />
  );
}
