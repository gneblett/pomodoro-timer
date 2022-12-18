import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

import "./TimerControls.css";

const TimerControls = (props) => {
  return (
    <div className="timeControls">
      {!props.active ? (
        <button className="button" onClick={props.start}>
          <BsPlayFill size={40} />
        </button>
      ) : (
        <button className="button" onClick={props.pause}>
          <BsFillPauseFill size={40} />
        </button>
      )}
    </div>
  );
};

export default TimerControls;
