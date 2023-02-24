import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newMessage } from "../apiAdapters";

function Message(props) {
  const id = props.id;
  let [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function sendMessage(message) {
    try {
      const result = await newMessage(id, message);
      setMessage("");
      result.success ?
      alert("Message sent!") : (alert("Unauthorized users cannot send messages, please Log In") ,
      navigate("/login"));
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
