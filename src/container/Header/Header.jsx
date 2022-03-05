import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

import Avatar from "../../images/avatar.svg";

import "./Header.scss";

const Header = () => {
  const [data, setData] = useState({
    userAdmin: "",
    userImg: "",
  });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .get(`http://localhost:4500/token${token}`)
      .then(function (response) {
        setData({
          userAdmin: response.data.user_name,
          userImg: response.data.user_img,
        });
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={Logo} className="logo-img" alt="logo" />
      </Link>
      <div className="header-user">
        <h1>{data.userAdmin}</h1>
      </div>
      <img
        className="admin_img"
        src={!data.userImg ? Avatar : `http://localhost:4500/${data.userImg}`}
        alt="img_link"
      />
      <div
        className="header-login"
        onClick={() => {
          localStorage.removeItem("token");
          window.location = "/";
        }}
      >
        Log out
      </div>
    </div>
  );
};

export default Header;
