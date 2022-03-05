import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.png";

import "./LoginPage.scss";

const LoginPage = () => {
  const textRef = useRef(null);
  const passwordRef = useRef(null);
  const [blockShake, setBlockShek] = useState("active");

  const LoginUser = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4500/login", {
      user_name: textRef.current.value,
      user_password: passwordRef.current.value,
    });
    textRef.current.value = "";
    passwordRef.current.value = "";
    if (response.data === "shake") {
      setBlockShek("shake");
    } else {
      localStorage.setItem("token", JSON.stringify(response.data));
      window.location = "/";
    }
  };

  return (
    <div className="login-page">
      <div className="header">
        <Link className="logo" to="/">
          <img src={Logo} className="logo-img" alt="logo" />
        </Link>
        <h1 className="page_name">Log in</h1>
      </div>
      <div className={`block ${blockShake === "shake" ? "shake" : "active"}`}>
        <input ref={textRef} type="text" placeholder="User name..." />
        <input ref={passwordRef} type="password" placeholder="Password..." />
        <button onClick={LoginUser}>Log in</button>
        <Link to="/registrasiya" className="registrasiya">
          Registrasiya
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
