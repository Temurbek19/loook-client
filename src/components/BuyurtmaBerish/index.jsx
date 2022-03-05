import { useState, useEffect } from "react";
import axios from "axios";

import Burgers from "./Burgers";

import "./main.scss";

const Buyurtma = ({ setOrders }) => {
  const [foodtype, setFoodType] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4500/foodtype")
      .then(function (response) {
        setFoodType(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="buyurtma">
      {foodtype.map((item, index) => (
        <Burgers
          setOrders={setOrders}
          key={index}
          foodTypeId={item.food_type_id}
          foodTypeName={item.food_type_name}
        />
      ))}
    </div>
  );
};

export default Buyurtma;
