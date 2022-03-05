import axios from "axios";

const DeleteOrder = async (e, setOrders) => {
  const orderId = e.target.id;
  const response = await axios.delete(`http://localhost:4500/order${orderId}`);
  if (response.data === "Order has deleted!") {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const response = await axios.get(`http://localhost:4500/order${userId}`);
    setOrders(response.data);
  }
};

export default DeleteOrder;
