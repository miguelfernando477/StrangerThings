import React, { useState, useEffect } from "react";
import { loginAccount } from "../apiAdapters";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function sendLoginToDatabase(username, password) {
    try {
      const result = await loginAccount(username, password);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("username", username);
      setUsername("");
      setPassword("");
      alert("Thanks for logging in to our service.");
      navigate("/profile");
    } catch (error) {
      alert("Username or password is incorrect, please try again");
      console.log(error);
    }
  }

  return (
    <div id="login-container">
      <h1 id="logInTitle">Log In</h1>
      <form
        id="loginBox"
        onSubmit={(e) => {
          e.preventDefault();
          sendLoginToDatabase(username, password);
        }}
      >
        {" "}
        <h1>Username</h1>
        <input
          className="loginTextBox"
          name="username"
          type="text"
          value={username}
          minLength="6"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <h1>Password</h1>
        <input
          className="loginTextBox"
          name="password"
          type="text"
          value={password}
          minLength="8"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button id="loginButton" type="submit">
          LOG IN
        </button>
        <Link id="registerLink" to="../register">
          Don't have an account? Sign Up Here!
        </Link>
      </form>
    </div>
  );
}

export default Login;

