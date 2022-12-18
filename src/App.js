import React from "react";
import Timer from "./components/Timer/Timer";
import Card from "./components/UI/Card";

const App = () => {
  const settings = {
    Focus: 25 * 60 * 1000,
    "Short Break": 5 * 60 * 1000,
    "Long Break": 15 * 60 * 1000,
  };

  return <Timer userSettings={settings} />;
};

export default App;
