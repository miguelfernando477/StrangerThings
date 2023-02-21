import React, { useState, useEffect } from "react";
import { registerAccount } from "../apiAdapters";

const Register = () => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState("");
  let [response, setResponse] = useState({});

  async function makeProfile(username, password) {
    try {
      const result = await registerAccount(username, password);
      console.log(username)
      console.log(typeof username)
      setResponse(result);
      console.log(response)
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    // response !== {}? localStorage.setItem("token", `${response.data.token}`) : null
    console.log(localStorage)
    if (localStorage.length === 0 && response.data.token !== undefined) {
        localStorage.setItem("token", JSON.stringify(response.data.token))
    }
  }, [response]);




  return (
    <div className="register-container">
      <h2>REGISTER</h2>
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (password !== confirmPassword) {
            alert("Passwords don't match");
          } else {
            makeProfile(username, password);
          }
        }}
      >
        <label>
          Username: 
          <input
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
        </label>

        <label>
          Password: 
          <input
            name="pasword"
            type="text"
            value={password}
            minLength="8"
            required
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
          />
        </label>

        <label>
          Confirm Password: 
          <input
            name="pasword"
            type="text"
            value={confirmPassword}
            required
            onChange={(e) => {
              console.log(e.target.value);
              setConfirmPassword(e.target.value);
            }}
          />
        </label>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Register;
