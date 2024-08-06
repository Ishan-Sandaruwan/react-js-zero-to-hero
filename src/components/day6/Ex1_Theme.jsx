import React, { createContext, useContext, useState } from "react";
import Ex1_Child from "./Ex1_Child";

const themeContext = createContext();

export default function Ex1_Theme() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <Ex1_Child />
    </themeContext.Provider>
  );
}

export {themeContext};