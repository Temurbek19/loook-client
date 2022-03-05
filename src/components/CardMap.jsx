import DeleteOrder from "./DeleteOrder";

const CardMap = ({ orders, setOrders }) => {
  return (
    <div className="card">
      {orders.map((item) => (
        <div className="card-order" key={item.order_id}>
          <img src={`http://localhost:4500/${item.food_img}`} alt="" />
          <h4>Name: {item.food_name}</h4>
          <h4>Price: {item.food_price}</h4>
          <h4>Count: {item.count}</h4>
          <button
            id={item.order_id}
            onClick={(e) => {
              e.preventDefault();
              DeleteOrder(e, setOrders);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CardMap;
