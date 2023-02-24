import react, { useState, useEffect } from "react";
import { getProfile } from "../apiAdapters";
import { isLoggedIn } from "../HelperFunctions";

const Profile = () => {
  let [profilePost, setProfilePost] = useState([]);
  let [messages, setMessages] = useState([]);

  async function displayProfile() {
    try {
      const result = await getProfile();
      console.log(result);
      setProfilePost(result.data.posts);
      console.log(profilePost);
      setMessages(result.data.messages);
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      const token = localStorage.getItem("token");
      displayProfile(token);
    }
  }, []);

  return (
    <div>
      <h1 className="profileHeaders" id="welcomeUser">Welcome {localStorage.getItem("username")}</h1>
      <h1 className="profileHeaders">My Post</h1>
      <div>
        {profilePost.length
          ? profilePost.map((post, idx) => {
              return post.active ? (
                <div id="postBox" key={idx}>
                  <h1>{post.title}</h1>
                  <p>{post.description}</p>
                  <h3>Price: {post.price}</h3>
                  <h3>Location: {post.location}</h3>
                </div>
              ) : null;
            })
          : null}
      </div>
      <div>
        <h1 className="profileHeaders">Messages From Me</h1>
        {messages.length
          ? messages.map((message, idx) => {
              return (
                message.fromUser.username === localStorage.getItem('username') ?
                <div id="messageBox" key={idx}>
                    <h1>Post: {message.post.title}</h1>
                    <h2>Message: {message.content}</h2>
                    <h3>To: {message.post.author.username}</h3>
                    <h3>From: Me</h3>

                </div> : null
              );
            })
          : null}
      </div>
      <div>
        <h1 className="profileHeaders">Messages To Me</h1>
        {messages.length
          ? messages.map((message, idx) => {
              return (
                message.fromUser.username !== localStorage.getItem('username') ?
                <div id="messageBox" key={idx}>
                    <h1>Post: {message.post.title}</h1>
                    <h2>Message: {message.content}</h2>
                    <h3>From: {message.fromUser.username}</h3>
                    <h3>To: Me</h3>
                </div> : null
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Profile;
