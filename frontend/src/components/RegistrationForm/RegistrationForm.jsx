import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistrationForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function createAccount(newUser) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/auth/register/",
      newUser
    );
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let createdUser = {
      username: userName,
      password: password,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };
    createAccount(createdUser);
  }

  //   Write a function that sends an alert box informing

  return (
    <div>
      <h3>Welcome New User!</h3>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          className=""
          required
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        ></input>
        <label>Last Name: </label>
        <input
          type="text"
          className=""
          required
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        ></input>
        <label>Username: </label>
        <input
          type="text"
          className=""
          required
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <label>Email: </label>
        <input
          type="text"
          className=""
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label>Password: </label>
        <input
          type="text"
          className=""
          required
          minLength="8"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
