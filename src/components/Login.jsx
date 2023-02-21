import React, { useState, useEffect } from "react";
import { loginAccount } from "../apiAdapters";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState({});

  async function sendLoginToDatabase(username, password) {
    try {
      const result = await loginAccount(username, password)
      console.log("you are logged in");
      setResponse(result);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
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
    <form
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
    </form>
  );
}

export default Login;
