import React from "react";

const ModeControls = (props) => {
  return (
    <div className="mode-controls">
      <button className="button" onClick={() => props.onChangeMode("focus")}>
        Focus
      </button>
      <button className="button" onClick={() => props.onChangeMode("shortBreak")}>
        Short Break
      </button>
      <button className="button" onClick={() => props.onChangeMode("longBreak")}>
        Long Break
      </button>
    </div>
  );
};

export default ModeControls;
