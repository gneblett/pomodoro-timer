import React, { useState, useRef, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import "./Timer.css";

const Timer = () => {
  const Ref = useRef(null);

  // The state for the timer
  const [timeRemaining, setTimeRemaining] = useState("00:00:00");

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

  const formatTime = (time) => {
    return time > 9 ? time : "0" + time;
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to append 0
      setTimeRemaining(
        formatTime(hours) +
          ":" +
          formatTime(minutes) +
          ":" +
          formatTime(seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimeRemaining("00:01:00");

    // Clears interval if value is set
    if (Ref.current) {
      clearInterval(Ref.current);
    }

    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you intend to add more time
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="timer">
      <TimerDisplay time={timeRemaining} />
      <TimerControls reset={onClickReset} />
    </div>
  );
};
export default Timer;
