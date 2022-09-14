import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const feedback = count > 10 ? `It's higher than 10!` : `Keep counting...`;
  return (
    <div>
      <p>{feedback}</p>
      <Count count={count} />
      <Button eventHandler={increase} type="Add 1!" />
      <Button eventHandler={decrease} type="Subtract 1!" />
    </div>
  );
}
