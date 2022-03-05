import { useState, useRef } from "react";

import Header from "../../container/Header";

import UsersMap from "../../components/UsersMap";
import CardMap from "../../components/CardMap";
import Buyurtma from "../../components/BuyurtmaBerish";

import "./HomePage.scss";

const HomePage = () => {
  const [orders, setOrders] = useState([]);
  const [userName, setUserName] = useState("");

  const userRef = useRef(null);

  return (
    <div className="home">
      <Header />
      <div className="home-page">
        <UsersMap
          setOrders={setOrders}
          setUserName={setUserName}
          userRef={userRef}
        />
        <div className="home-page-right">
          <h1 className="user-name">{userName}</h1>
          <CardMap orders={orders} setOrders={setOrders} />
          <Buyurtma setOrders={setOrders} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
