import { useState, useEffect } from "react";
import axios from "axios";

import AddOrder from "../AddOrder";

const Burgers = ({ setOrders, foodTypeId, foodTypeName }) => {
  const [foods, setFoods] = useState({
    data: [],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4500/foodtype${foodTypeId}`)
      .then(function (response) {
        setFoods({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [foodTypeId]);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const count = e.target.input.value;
        const foodId = e.target.select.value;
        AddOrder(foodId, count, setOrders);
        e.target.input.value = null;
      }}
    >
      <select id="select" className="form-select">
        <option value={foodTypeName}>{foodTypeName} tanlang</option>
        {foods.data.map((item, index) => (
          <option
            value={item.food_id}
            key={index}
            className="form-select-option"
          >
            {item.food_name}
          </option>
        ))}
      </select>
      <input type="number" id="input" />
      <button className="form-btn">Buyurtma berish</button>
    </form>
  );
};

export default Burgers;
