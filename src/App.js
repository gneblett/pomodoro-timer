import React, { useState } from "react";
import Timer from "./components/Timer/Timer";

const App = () => {
  const [roundTime, setRoundTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [breakInterval, setBreakInterval] = useState(4);

  const formatTime = (time) => {
    return time > 9 ? time : "0" + time;
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  return (
    <div className="app">
      <Timer />
    </div>
  );
};

export default App;
