import React from "react";
import Gameplay from "./components/Gameplay";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="#game" className="playbtn">
          Play Now
        </a>
      </header>
      <section id="game">
        <span className="head-text">Number Guessing Game</span>
      </section>
      <Gameplay />
    </div>
  );
}

export default App;
