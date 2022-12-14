import React from "react";

const TimerDisplay = (props) => {
  const formatTime = (time) => {
    return time > 9 ? time : "0" + time;
  };

  const seconds = Math.floor((props.time / 1000) % 60);
  const minutes = Math.floor((props.time / 1000 / 60) % 60);
  const hours = Math.floor((props.time / 1000 / 60 / 60) % 24);

  return (
    <div>
      <h1>{props.roundName}</h1>
      <h2>
        {formatTime(hours) +
          ":" +
          formatTime(minutes) +
          ":" +
          formatTime(seconds)}
      </h2>
    </div>
  );
};

export default TimerDisplay;
