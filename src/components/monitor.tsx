import React from "react";
import monitors from "../monitors";

const Monitor = ({ count, setCount, clickValue, monitor }) => {
  const currentMonitor = monitors[monitor];
  const handleClick = () => {
    setCount((prevCount) => prevCount + clickValue);
  };

  return (
    <button
      onClick={handleClick}
      className="monitor"
      style={{ backgroundImage: monitor.image }}
    ></button>
  );
};

export default Monitor;
