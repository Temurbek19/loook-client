import axios from "axios";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";

import "./Registrasiya.scss";

const Registrasiya = () => {
  const textRef = useRef(null);
  const passwordRef = useRef(null);
  const imgRef = useRef(null);
  const [shakeUser, setShakeUser] = useState("active");

  const AddAdmin = async () => {
    let formData = new FormData();
    formData.append("user_name", textRef.current.value);
    formData.append("user_password", passwordRef.current.value);
    formData.append("user_img", imgRef.current.files[0]);
    const response = await fetch("http://localhost:4500/registrasiya", {
      method: "POST",
      body: formData,
    });
    if (response.statusText === "OK") {
      const response = await axios.post("http://localhost:4500/login", {
        user_name: textRef.current.value,
        user_password: passwordRef.current.value,
      });
      const token = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      window.location = "/";
    } else setShakeUser("shake");
  };
  return (
    <div className="registrasiya-page">
      <div className="header">
        <Link className="logo" to="/">
          <img src={Logo} className="logo-img" alt="logo" />
        </Link>
        <h1 className="page_name">Registrasiya</h1>
      </div>
      <div className={`block ${shakeUser === "shake" ? "shake" : "active"}`}>
        <input ref={textRef} type="text" placeholder="User name..." />
        <label htmlFor="file">
          User image
          <input ref={imgRef} id="file" type="file" />
        </label>
        <input ref={passwordRef} type="password" placeholder="Password..." />
        <button
          onClick={(e) => {
            e.preventDefault();
            AddAdmin();
          }}
        >
          Registrasiya
        </button>
        <Link to="/login" className="login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Registrasiya;
