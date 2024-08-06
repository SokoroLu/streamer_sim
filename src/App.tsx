import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Appbar from "./components/Appbar";
import { useState, useEffect } from "react";
import ShopButtons from "./components/shop";
import MoneyBar from "./components/money";
import Monitor from "./components/monitor";
import upgrades from "./monitors";

export default function App() {
  const [count, setCount] = useState(0);
  const [clickValue, setClickValue] = useState(1); // Value per click
  const [clickRate, setClickRate] = useState(0); // Clicks per second
  const [monitor, setMonitor] = useState(0);

  const [currentUpgrade, setCurrentUpgrade] = useState(0);

  const handlePurchase = (index) => {
    if (upgrades[index].purchased) {
      return; // Do nothing if already purchased
    }

    if (count >= upgrades[index].cost && currentUpgrade === index) {
      setCount(count - upgrades[index].cost);
      setCurrentUpgrade(currentUpgrade + 1);
      const newUpgrades = [...upgrades];
      newUpgrades[index].purchased = true;
      setUpgrades(newUpgrades);

      // Apply upgrade effects
      if (upgrades[index].name === "New Computer") {
        setClickValue((prevClickValue) => prevClickValue * 2); // Double the click value
      } else if (upgrades[index].name === "Keyboard and Mouse") {
        setClickValue((prevClickValue) => prevClickValue * 2); // Quadruple the click value
      } else if (upgrades[index].name === "Golden Computer") {
        setClickRate((prevClickRate) => prevClickRate + 1); // Add 1 click per second
      } else if (upgrades[index].name === "Diamond Computer") {
        setClickRate((prevClickRate) => prevClickRate + 4); // Add 5 clicks per second
      }
    } else {
      alert(
        "You don't have enough money to make this purchase or you need to unlock the previous upgrade"
      );
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + clickRate);
    }, 1000);

    return () => clearInterval(interval);
  }, [clickRate]);

  return (
    <>
      <Appbar />
      <MoneyBar count={count} />
      <Monitor
        monitor={monitor}
        count={count}
        setCount={setCount}
        clickValue={clickValue}
      />
      <ShopButtons
        setMonitor={setMonitor}
        upgrades={upgrades}
        handlePurchase={handlePurchase}
      />
    </>
  );
}
