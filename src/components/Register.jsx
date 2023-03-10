import React, { useState, useEffect } from "react";
import { registerAccount } from "../apiAdapters";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function makeProfile(username, password) {
    try {
      const result = await registerAccount(username, password);
      localStorage.setItem("token", result.data.token);
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      alert("Thanks for signing up for our service");
      navigate("/login");
    } catch (error) {
      alert("User already exists, please login instead.");
      console.log(error);
    }
  }

  return (
    <div id="register-container">
      <h1 id="registerTitle">Register</h1>
      <form
        id="registerBox"
        onSubmit={(e) => {
          e.preventDefault();
          if (password !== confirmPassword) {
            alert("Passwords don't match");
          } else {
            makeProfile(username, password);
          }
        }}
      >
        <h1>Username</h1>
        <input
          className="registerTextBox"
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
          className="registerTextBox"
          name="password"
          type="text"
          value={password}
          minLength="8"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <h1>Confirm Password</h1>
        <input
          className="registerTextBox"
          name="password"
          type="text"
          value={confirmPassword}
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />

        <button id="registerButton" type="submit">
          SIGN UP
        </button>
        <Link id="loginLink" to="../login">
          Already have an account? Log In Here!
        </Link>
      </form>
    </div>
  );
};

export default Register;
