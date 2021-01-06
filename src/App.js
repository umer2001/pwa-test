import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  useEffect(async () => {
    var rawData = await fetch("https://api.chucknorris.io/jokes/random");
    if (rawData.ok) {
      const data = await rawData.json();
      setJoke(data.value);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{joke}</p>
      </header>
    </div>
  );
}

export default App;
