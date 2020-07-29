import React, { useState } from "react";
import Userarea from "./Userarea";
import Output from "./Output";

import { Row, Col } from "react-bootstrap";
function Gameplay() {
  let [level, useLevel] = React.useState(1);
  let [diff, useDiff] = React.useState(110);
  let [number, useNum] = React.useState(Math.floor(Math.random() * 100));
  console.log("\n number === " + number);
  const Handlelevelchange = () => {
    useNum(Math.floor(Math.random() * 100 * (level + 1)));
    useDiff(level * 100 + 10);
    useLevel(level + 1);
    document.getElementById("gameboard").style.display = "block";
  };
  const Checknumber = () => {
    let num = document.getElementById("userinput").value;
    let ans = num > number ? num - number : number - num;
    useDiff(ans);
  };
  return (
    <Row>
      <Userarea level={level} check={() => Checknumber()} />
      <Output difference={diff} nxtlvl={() => Handlelevelchange()} />
    </Row>
  );
}
export default Gameplay;
