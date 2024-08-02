import React, { useState } from "react";

export default function Ex2_Func() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
