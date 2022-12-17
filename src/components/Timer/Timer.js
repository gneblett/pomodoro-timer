import React, { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import "./Timer.css";

const Timer = (props) => {
  // The state for the timer
  const [timeRemaining, setTimeRemaining] = useState(
    props.userSettings[props.currentMode]
  );
  const [currentInterval, setCurrentInterval] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const tick = () => {
    setTimeRemaining((time) => {
      if (time > 0) {
        return time - 1000;
      } else {
        stopTimer();
        return time;
      }
    });
  };

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      setTimeRemaining(props.userSettings[props.currentMode]);
    }
  };

  const stopTimer = () => {
    clearInterval(currentInterval);
    setIsActive(false);
    setCurrentInterval(null);
  };

  const pauseTimer = () => {
    currentInterval ? stopTimer() : startTimer();
  };

  useEffect(() => {
    if (isActive) {
      setCurrentInterval(setInterval(tick, 1000));
    }
    return () => clearInterval(currentInterval);
  }, [isActive]);

  return (
    <div className="timer">
      <TimerDisplay time={timeRemaining} mode={props.currentMode} />
      <TimerControls
        start={startTimer}
        stop={stopTimer}
        pause={pauseTimer}
        active={isActive}
      />
    </div>
  );
};
export default Timer;
