import React, {useState, useEffect} from "react";
import { registerAccount } from "../apiAdapters";

const Register = () => {
let [newUsername, setNewUsername] = useState('')
let [newPassword, setNewPassword] = useState('')
let [confirmPassword, setConfirmPassword] = useState('')
let [response, setResponse] = useState({})

    async function makeProfile(username, password) {
        try {
            const result = await registerAccount(username, password, confirmPassword)
            setResponse(result)
            setNewUsername('')
            setNewPassword('')
            setConfirmPassword('')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        makeProfile()
    },[])

return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        makeProfile(newUsername, newPassword);
      }}
    >
      <lable>
        Username:
        <input
          name="username"
          type="text"
          value={newUsername}
          onChange={(e) => {
            console.log(e.target.value);
            setNewUsername(e.target.value);
          }}
        />
      </lable>

      <lable>
        Password:
        <input
          name="pasword"
          type="text"
          value={newPassword}
          onChange={(e) => {
            console.log(e.target.value);
            setNewPassword(e.target.value);
          }}
        />
      </lable>

      <lable>
        Confirm Password:
        <input
          name="pasword"
          type="text"
          value={confirmPassword}
          onChange={(e) => {
            console.log(e.target.value);
            setConfirmPassword(e.target.value);
          }}
        />
      </lable>
      <button type="submit">SIGN UP</button>
    </form>
)

}

export default Register