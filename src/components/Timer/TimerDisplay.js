import React from "react";
import "./TimerDisplay.css";

const TimerDisplay = (props) => {
  const formatTime = (time) => {
    return time > 9 ? time : "0" + time;
  };

  const seconds = Math.floor((props.time / 1000) % 60);
  const minutes = Math.floor((props.time / 1000 / 60) % 60);
  const hours = Math.floor((props.time / 1000 / 60 / 60) % 24);
  return (
    <div>
      <h2>{props.currentMode}</h2>
      <h1>
        {formatTime(hours) +
          ":" +
          formatTime(minutes) +
          ":" +
          formatTime(seconds)}
      </h1>
    </div>
  );
};

export default TimerDisplay;
