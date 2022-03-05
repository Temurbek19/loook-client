import axios from "axios";

const OrderUser = async (id, setOrders, setUserName) => {
  localStorage.setItem("userId", JSON.stringify(id));
  const respon = await axios.get(`http://localhost:4500/user${id}`);
  const response = await axios.get(`http://localhost:4500/order${id}`);
  response.data.length !== 0 ? setOrders(response.data) : setOrders([]);
  setUserName(respon.data[0].user_name);
};

export default OrderUser;
