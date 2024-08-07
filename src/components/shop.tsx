import React from "react";
import upgrades from '../monitors';

export default function ShopButtons({ currentMonitor, handlePurchase }) {
  const updateShop = (index)=>{
    handlePurchase(index);
    
  }
  return (
    <div className="shop-container">
      {upgrades.map((upgrade, index) => (
        index > currentMonitor &&
        <button
          key={index}
          className="shop"
          onClick={() => updateShop(index)}
          disabled={upgrade.purchased}
        >
          {upgrade.purchased ? "Purchased" : "Purchase"}
          <p>{upgrade.name}</p>
          {upgrade.purchased ? null : <p>Cost: {upgrade.cost}</p>}
        </button>
      ))}
    </div>
  );
}
