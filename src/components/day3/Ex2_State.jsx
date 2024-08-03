import React, { useState } from "react";

// Exercise 2: Create a functional component Counter using the useState hook to manage the count state. Include increment and decrement buttons.

export default function Ex2_State() {
  const [count, setState] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setState((prevState) => prevState + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setState(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
