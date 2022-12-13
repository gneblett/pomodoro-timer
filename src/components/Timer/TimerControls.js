import React from "react";
import "./TimerControls.css";

const TimerControls = (props) => {
  return (
    <button className="button" onClick={props.reset}>
      Reset
    </button>
  );
};

export default TimerControls;
