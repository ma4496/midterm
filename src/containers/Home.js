import axios from "axios";
import { useState } from "react";
import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import Data from "../components/data.json";

const API_KEY = `b4k4jbf8mzD0ZaMDbcHmBAybfMSOHfhsAA5pFwkM`;

function Home() {
  const [food, setFood] = useState([]);
  const [foodData, setFoodData] = useState();
  const URL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&pageSize=2&api_key=${API_KEY}`;

  let query = useQuery();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    const foodValue = query.get("food");
    setFood(foodValue);
  }, []);

  useEffect(() => {
    if (food) {
      axios
        .get(URL)
        .then(function (response) {
          setFoodData(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log("made it here");
          console.warn(error);
        });
    }
  }, [URL, food]);

  const { vitaminAValue, vitaminCValue, fiber } = useMemo(() => {
    if (!foodData) return {};
    if (food === "oranges") {
      return {
        vitaminAValue: foodData.foods[0].foodNutrients[2].value,
        vitaminCValue: foodData.foods[0].foodNutrients[3].value,
        fiber: foodData.foods[0].foodNutrients[10].value,
      };
    }
    if (food === "apples") {
      return {
        vitaminAValue: foodData.foods[0].foodNutrients[4].value,
        vitaminCValue: foodData.foods[0].foodNutrients[5].value,
        fiber: foodData.foods[0].foodNutrients[12].value,
      };
    }
    if (food === "raspberries") {
      return {
        vitaminAValue: foodData.foods[0].foodNutrients[4].value,
        vitaminCValue: foodData.foods[0].foodNutrients[10].value,
        fiber: foodData.foods[0].foodNutrients[5].value,
      };
    }
  }, [foodData]);

  return (
    <main className="App">
      <div className="AppSpacing">
        <header>
          <nav className="Navigation">
            <a href="/?food=apples">Apple</a>
            <a href="/?food=oranges">Orange</a>
            <a href="/?food=raspberries">Raspberries</a>
          </nav>
        </header>
        <h1 className="SelectedFood">{food}</h1>
        <FoodCard
          vitaminA={vitaminAValue}
          vitaminC={vitaminCValue}
          fiber={fiber}
        />
      </div>
    </main>
  );
}

export default Home;
