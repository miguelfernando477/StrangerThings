import React, { useEffect, useState } from "react";
import { deletePost, getAllPostWithFetch, newMessage } from "../apiAdapters";
import { Link, useNavigate } from "react-router-dom";

const AllPosts = () => {
  let [posts, setPost] = useState([]);
  let [message, setMessage] = useState('')
  const navigate = useNavigate();
  async function getPosts() {
    try {
      const result = await getAllPostWithFetch();
      setPost(result.posts);
    } catch (error) {
      console.log(error);
    }
  }
  async function deletePostFromDOM(id, idx) {
    let currentPosts = posts;
    try {
      await deletePost(id);
      currentPosts.splice(idx, 1);
      setPost(currentPosts);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function sendMessage(id, message) {
    try {
      const result = await newMessage(id, message);
      console.log(result)
      localStorage.setItem(result.content);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);



  return (
    <div id="all-post">
      <h1 id="postHeader">Posts</h1>
      {posts.length
        ? posts.map((post, idx) => {
            return (
              <div id="postBox" key={idx}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <h3>Price: {post.price}</h3>
                <h3>Seller: {post.author.username}</h3>
                <h3>Location: {post.location}</h3>
                <Link to={`${post._id}`}>
                  <button>View</button>
                </Link>
                {post.isAuthor ? (
                  <div>
                    <button onClick={() => deletePostFromDOM(post._id, idx)}>
                      Delete
                    </button>
                  </div>
                ) : (
                  <div>
                    <input name='message' type='text' value={message} onChange={(event) => {setMessage(event.target.value)}}/>
                    <button onClick={() => sendMessage(post._id, message)}>
                      Message Seller
                    </button>
                  </div>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AllPosts;
