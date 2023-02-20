import React, { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function sendLoginToDatabase(username, password) {
    try {
      console.log("you are logged in");

      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendLoginToDatabase(username, password);
      }}
    >
      <lable>
        Username:
        <input
          name="username"
          type="text"
          value={username}
          onChange={(e) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />
      </lable>

      <lable>
        Password:
        <input
          name="pasword"
          type="text"
          value={password}
          onChange={(e) => {
            console.log(e.target.value);
            setUsername(e.target.value);
          }}
        />
      </lable>
      <button type="submit">LOG IN</button>
    </form>
  );
}

export default Login;
