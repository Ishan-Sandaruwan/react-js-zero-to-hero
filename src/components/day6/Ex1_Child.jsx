import React, { useContext } from "react";
import { themeContext } from "./Ex1_Theme";

export default function Ex1_Child() {
  const { theme, toggleTheme } = useContext(themeContext);

  // Define styles as objects
  const containerStyle = {
    backgroundColor: theme === "light" ? "white" : "black",
    padding: "20px",
    borderRadius: "5px",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const buttonStyle = {
    color: "slategray",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    border: "none",
    outline: "none",
    backgroundColor: "transparent",
  };

  return (
    <div style={containerStyle}>
      <button onClick={toggleTheme} style={buttonStyle}>
        {theme}
      </button>
    </div>
  );
}
