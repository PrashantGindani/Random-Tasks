import React from "react";
function Output(props) {
  if (props.difference === 0) {
    return (
      <section>
        {hideunused()}
        <span className="out correct">Correct !</span>
        <br />
        <br />
        <button className="userbtn" onClick={() => props.nxtlvl()}>
          Next Level
        </button>
      </section>
    );
  } else if (props.difference <= 4) {
    return (
      <section>
        <span className="out hot">Hot !!</span>
      </section>
    );
  } else if (props.difference <= 15) {
    return (
      <section>
        <span className="out warm">Warm </span>
      </section>
    );
  } else {
    return (
      <section>
        <span className="out cold">Cold</span>
      </section>
    );
  }
}
function hideunused() {
  document.getElementById("gameboard").style.display = "none";
}
export default Output;
