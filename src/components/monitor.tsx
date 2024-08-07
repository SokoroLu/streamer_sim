import React from "react";
import monitors from "../monitors";

const Monitor = ({ count, setCount, monitor }) => {
  const backgrounds = ['red', 'green', 'blue', 'pink', 'black'];
  const currentMonitor = monitors[monitor];
  const handleClick = () => {
    setCount(count + currentMonitor.cash_per_click);
  };

  return (
    <button
      onClick={handleClick}
      className="monitor"
      //style={{'background': backgrounds[monitor]}}
      style={{'background-image': `url(${currentMonitor.image})`}}
    ></button>
  );
};

export default Monitor;
