import axios from "axios";

const AddOrder = async (foodId, count, setOrders) => {
  const userId = JSON.parse(localStorage.getItem("userId"));
  axios
    .post("http://localhost:4500/orders", {
      foodId,
      user_id: userId,
      count,
    })
    .then(function (response) {
      setOrders(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default AddOrder;
