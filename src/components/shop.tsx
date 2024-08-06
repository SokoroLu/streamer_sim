import React from "react";

export default function ShopButtons({ upgrades, handlePurchase }) {
  return (
    <div className="shop-container">
      {upgrades.map((upgrade, index) => (
        <button
          key={index}
          className="shop"
          onClick={() => handlePurchase(index)}
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
