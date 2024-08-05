import React, { useReducer, useState } from "react";

// Exercise 1: Create a counter component using useReducer
// that allows incrementing and decrementing the
// count with separate buttons.

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: initialState.count };
    default:
      throw new Error();
  }
}

export default function Ex1_UseReduser() {
    
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <p>{state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
    </div>
  );
}
