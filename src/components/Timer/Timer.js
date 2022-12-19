import React, { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import ModeControls from "../Modes/ModeControls";
import "./Timer.css";

const Timer = (props) => {
  const [currentInterval, setCurrentInterval] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("Focus");
  const [timeRemaining, setTimeRemaining] = useState(props.userSettings[mode]);

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

  const changeModeHandler = (newMode) => {
    setMode(newMode);
    stopTimer();
    setTimeRemaining(props.userSettings[newMode]);
  };

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
    if (timeRemaining === 0) {
      
    }
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
      <ModeControls onChangeMode={changeModeHandler} />
      <TimerDisplay time={timeRemaining} currentMode={mode} />
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
