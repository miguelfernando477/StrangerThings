import React, { useEffect, useState } from "react";
import { deletePost, getAllPostWithFetch, newMessage } from "../apiAdapters";
import { Link, useNavigate } from "react-router-dom";
import { Message } from "./";

const AllPosts = () => {
  let [posts, setPost] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

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

  function postMatches(post, text) {
    if (
      post.title.toLowerCase().includes(text) ||
      post.description.toLowerCase().includes(text) ||
      post.author.username.toLowerCase().includes(text) ||
      post.location.toLowerCase().includes(text)
    ) {
      return true;
    } else {
      return false;
    }
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  const searchHandle = (e) => {
    setSearchTerm((e.target.value).toLowerCase());
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="all-post">
   
      <h1 id="postHeader">Posts
      <input id="searchBox"
        type="text"
        placeholder="Search Posts"
        value={searchTerm}
        onChange={searchHandle}
      />
      <Link id="new-post-button" to="new-post">(Add Post)</Link>
      </h1>
      
      {postsToDisplay.length
        ? postsToDisplay.map((post, idx) => {
            return (
              <div id="postBox" key={idx}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <h3>Price: {post.price}</h3>
                <h3>Seller: {post.author.username}</h3>
                <h3>Location: {post.location}</h3>
                {post.isAuthor ? (
                  <div>
                    <button onClick={() => deletePostFromDOM(post._id, idx)}>
                      Delete
                    </button>
                  </div>
                ) : (
                  <div>
                    <Message id={post._id} />
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
