import React from "react";
import { Col } from "react-bootstrap";
function Userarea(props) {
  return (
    <section>
      <span className="head-text">Level {props.level}</span>
      <br />
      <br />
      <div id="gameboard">
        <label>Guess Number </label>
        <input className="user-input" type="number" id="userinput" />
        <br />
        <br />
        <button className="userbtn" onClick={() => props.check()}>
          Make a Guess
        </button>
      </div>
    </section>
  );
}

export default Userarea;
