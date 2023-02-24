import React, { useState, useEffect } from "react";
import { registerAccount } from "../apiAdapters";
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  async function makeProfile(username, password) {
    try {
      const result = await registerAccount(username, password);
      console.log(result)
      localStorage.setItem("token", result.data.token)
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      alert("Thanks for signing up for our service")
      navigate("/login")
    } catch (error) {
      alert("User already exists, please login instead.")
        console.log(error)
    }
  }

  // useEffect(() => {
  //   // response !== {}? localStorage.setItem("token", `${response.data.token}`) : null
  //   console.log(localStorage)
  //   if (localStorage.length === 0 && response.data.token !== undefined) {
  //       localStorage.setItem("token", JSON.stringify(response.data.token))
  //   }
  // }, [response]);


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
          <input className="registerTextBox"
            name="username"
            type="text"
            value={username}
            minLength="6"
            required
            onChange={(e) => {
              console.log(e.target.value);
              setUsername(e.target.value);
            }}
          />
      <h1>Password</h1>
          <input className="registerTextBox"
            name="password"
            type="text"
            value={password}
            minLength="8"
            required
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
     <h1>Confirm Password</h1>
          <input className="registerTextBox"
            name="password"
            type="text"
            value={confirmPassword}
            required
            onChange={(e) => {
              console.log(e.target.value);
              setConfirmPassword(e.target.value);
            }}
          />
    
        <button id="registerButton" type="submit">SIGN UP</button>
        <Link id="loginLink" to="../login">Already have an account? Log In Here!</Link>
      </form>
    </div>
  );
};

export default Register;
