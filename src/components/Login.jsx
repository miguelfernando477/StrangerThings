import React, { useState, useEffect } from "react";
import { loginAccount } from "../apiAdapters";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 

  async function sendLoginToDatabase(username, password) {
    try {
      const result = await loginAccount(username, password)
      console.log("you are logged in");
      localStorage.setItem("token", result)
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }


  // useEffect(() => {
  //   // response !== {}? localStorage.setItem("token", `${response.data.token}`) : null
  //   console.log(localStorage)
  //   if ( response.data !== undefined) {
  //       // localStorage.setItem("token", JSON.stringify(response.data.token))
  //       localStorage.setItem('token', JSON.stringify(response.data.token))
  //       console.log(response)
  //   }
  // }, [response]);

  return (
    <div id="login-container">
      <h1>Log In</h1>
    <form id="loginBox"
      onSubmit={(e) => {
        e.preventDefault();
        sendLoginToDatabase(username, password);
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
        </label>
      <button type="submit">LOG IN</button>
      <Link to="../register">Don't have an account?</Link>
    </form>
</div>
  );
}

export default Login;


// username: usertest12345
// password: usertest1