import React from "react";

const TimerControls = (props) => {
  return (
    <button className="button" onClick={props.reset}>
      Reset
    </button>
  );
};

export default TimerControls;
