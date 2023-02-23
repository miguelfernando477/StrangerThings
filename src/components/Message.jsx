import react, { useState } from "react";
import { newMessage } from "../apiAdapters";

function Message(props) {
  const id = props.id;
  let [message, setMessage] = useState("");

  async function sendMessage(message) {
    try {
      const result = await newMessage(id, message);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          sendMessage(message);
        }}
      >
        <input
          name="message"
          type="text"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Message;
