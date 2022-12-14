import React from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

import "./TimerControls.css";

const TimerControls = (props) => {
  return (
    <div className="timeControls">
      {!props.active ? (
        <button className="button">
          <BsPlayFill size={40} onClick={props.start} />
        </button>
      ) : (
        <button className="button">
          <BsFillPauseFill size={40} onClick={props.pause} />
        </button>
      )}
    </div>
  );
};

export default TimerControls;
