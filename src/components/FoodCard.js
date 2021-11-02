import React from "react";
import data from "./data.json";

function FoodCard({ vitaminA, vitaminC, fiber }) {
  const vitaminAData = data.VitaminA;
  const vitaminCData = data.VitaminC;
  const fiberData = data.Fiber;
  return (
    <main className="nutrientInfo">
      <div className="VitaminAWrapper">
        Vitamin A: {vitaminA}
        <div className="VitaminADescription">
          {vitaminAData.map((s) => (
            <div>{s}</div>
          ))}
        </div>
      </div>
      <div className="VitaminCWrapper">
        Vitamin C: {vitaminC}
        <div className="VitaminCDescription">
          {vitaminCData.map((s) => (
            <div>{s}</div>
          ))}
        </div>
      </div>
      <div className="FiberWrapper">
        Fiber: {fiber}
        <div className="FiberDescription">
          {fiberData.map((s) => (
            <div>{s}</div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FoodCard;
