import React from "react";

const ModeControls = (props) => {
  return (
    <div className="mode-controls">
      <button className="button" onClick={() => props.onChangeMode("Focus")}>
        Focus
      </button>
      <button
        className="button"
        onClick={() => props.onChangeMode("Short Break")}>
        Short Break
      </button>
      <button
        className="button"
        onClick={() => props.onChangeMode("Long Break")}>
        Long Break
      </button>
    </div>
  );
};

export default ModeControls;
