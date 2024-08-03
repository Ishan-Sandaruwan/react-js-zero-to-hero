import React, { useState } from "react";

// Exercise 4: Create a todo list component TodoList that uses useState to manage the list of todos.
// Allow adding new todos by typing in an input field and pressing Enter.

export default function Ex4_State() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            if (todo.trim() !== "") {
              setTodos((prevTodos) => [...prevTodos, todo]);
              setTodo("");
            }
          }}
        >
          <input
            type="text"
            placeholder="add todo"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </form>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// onKeyDown={(e) => {
//     if (e.key === 'Enter') {
//       addTodo(e.target.value);
//       e.target.value = '';
//     }
//   }}