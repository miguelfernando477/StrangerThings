import react, { useState } from "react";
import { newMessage } from "../apiAdapters";

function Message() {
  let [message, setMessage] = useState("");

  async function sendMessage(id, message) {
    try {
      const result = await newMessage(id, message);
      localStorage.setItem(result.content)
      setMessage('')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Message</h1>

      <form
      onSubmit={(event) => {
        event.preventDefault();
        sendMessage(message);
        }}>
        <label>
          message:
          <input
            name="message"
            type="text"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Message;
