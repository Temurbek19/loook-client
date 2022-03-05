import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import qs from "query-string";

import DeleteUser from "./DeleteUser";
import PostUser from "./PostUser";
import OrderUser from "./OrderUser";

const UsersMap = ({ setOrders, setUserName, userRef }) => {
  const [getUsers, setGetUsers] = useState({
    data: [],
  });

  const location = useLocation();
  const history = useHistory();
  const { id = 1 } = qs.parse(location.search, { ignoreQueryPrifex: true });
  const [addUser, setAddUser] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4500/users")
      .then(function (response) {
        setGetUsers({
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [addUser]);

  useEffect(() => {
    OrderUser(id, setOrders, setUserName);
  }, [id]);

  return (
    <div className="home-page-left">
      <div className="users">
        {getUsers.data && getUsers.data.length
          ? getUsers.data.map((item) => (
              <div className="user" key={item.user_id}>
                <button
                  className="user-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/?id=${item.user_id}`);
                  }}
                  id={item.user_id}
                  name={item.user_name}
                >
                  {item.user_name}
                </button>
                <button
                  className="user-btn"
                  id={item.user_id}
                  onClick={(e) => {
                    e.preventDefault();
                    DeleteUser(e, getUsers, setGetUsers);
                  }}
                >
                  Delete
                </button>
              </div>
            ))
          : null}
      </div>
      <div className="add-user">
        <form
          className="add-user_form"
          onSubmit={async (e) => {
            e.preventDefault();
            PostUser(userRef, addUser, setAddUser);
          }}
        >
          <input ref={userRef} type="text" placeholder="User name" />
          <button>Add user</button>
        </form>
      </div>
    </div>
  );
};

export default UsersMap;
