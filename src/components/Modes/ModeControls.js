import React, { useState } from "react";
import "./ModeControls.css";
const ModeControls = (props) => {
  const [isActive, setIsActive] = useState("Focus");

  const clickHandler = (activeMode) => {
    setIsActive(activeMode);
  };

  return (
    <div className="mode-controls">
      <button
        className={isActive === "Focus" ? "active button" : "button"}
        onClick={() => {
          props.onChangeMode("Focus");
          clickHandler("Focus");
        }}>
        Focus
      </button>
      <button
        className={
          isActive === "Short Break" ? "active button" : "button"
        }
        onClick={() => {
          props.onChangeMode("Short Break");
          clickHandler("Short Break");
        }}>
        Short Break
      </button>
      <button
        className={
          isActive === "Long Break" ? "active button" : "button"
        }
        onClick={() => {
          props.onChangeMode("Long Break");
          clickHandler("Long Break");
        }}>
        Long Break
      </button>
    </div>
  );
};

export default ModeControls;
