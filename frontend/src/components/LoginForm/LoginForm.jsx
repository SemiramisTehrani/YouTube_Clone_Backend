import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const LoginForm = (props) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  async function loginUser(userInfo) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/login/", userInfo);
    console.log(response);
    localStorage.setItem('token', response.data.access);
    window.location = '/';
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userInfo = {
      username: userName,
      password: password,
    };
    props.setStoredUserName(userInfo.username)
    loginUser(userInfo);
  }

  return (
    <div className="login-form">
      <h3>Welcome! Please Sign in or Register</h3>
      <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input
          type="text"
          required
          className="user-name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <label>Password</label>
        <input
          type="password"
          required
          className="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Login</button>
        <Routes>
        <Route exact path="registration" element={<RegistrationForm />} />
        </Routes>
        <Link to='registration'>
        <button>Sign-Up</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
