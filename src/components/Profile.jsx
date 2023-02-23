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
      <h1>My Post</h1>
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
        <h1>Messages From Me</h1>
        {messages.length
          ? messages.map((message, idx) => {
              return (
                message.fromUser.username === localStorage.getItem('username') ?
                <div id="messageBox" key={idx}>
                    <h3>Post: {message.post.title}</h3>
                    <h4>From: {message.fromUser.username}</h4>
                  <h4>Message: {message.content}</h4>

                </div> : null
              );
            })
          : null}
      </div>
      <div>
        <h1>Messages To Me</h1>
        {messages.length
          ? messages.map((message, idx) => {
              return (
                message.fromUser.username !== localStorage.getItem('username') ?
                <div id="messageBox" key={idx}>
                    <h3>Post: {message.post.title}</h3>
                    <h4>From: {message.fromUser.username}</h4>
                  <h4>Message: {message.content}</h4>

                </div> : null
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Profile;
