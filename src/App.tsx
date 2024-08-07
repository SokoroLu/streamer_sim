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
 
    if(index <= monitor){
      alert(
        "You don't have enough money to make this purchase or you need to unlock the previous upgrade"
      );
      return
    }
    

    if (count >= upgrades[index].cost ) {
      setCount(count - upgrades[index].cost);
      setMonitor(index);
      setClickValue(upgrades[index].cash_per_click)
      setClickRate(upgrades[index].cash_per_sec)
      
  };
  }
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
        count={count}
        setCount={setCount} 
        monitor={monitor}
      />
      <ShopButtons
        currentMonitor ={monitor}
        handlePurchase={handlePurchase}
      />
    </>
  );

}