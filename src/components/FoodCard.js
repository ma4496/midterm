import React from "react";

function FoodCard({ vitaminA, vitaminC, fiber }) {
  return (
    <div className="nutrientInfo">
      <p>Vitamin A: {vitaminA}</p>
      <p>Vitamin C: {vitaminC}</p>
      <p>Fiber: {fiber}</p>
    </div>
  );
}

export default FoodCard;
