import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("Title");

  const handler = () => {
    setText(text + " :)");
  };
  return (
    <div className="App">
      <h1>{text}</h1>
      <button type="button" onClick={handler}>
        Add to Title
      </button>
    </div>
  );
}
