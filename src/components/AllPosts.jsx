import React, { useEffect, useState } from "react";
import { getAllPostWithFetch } from "../apiAdapters";
import { Link } from "react-router-dom"

const AllPosts = () => {
  let [posts, setPost] = useState([]);

  async function getPosts() {
    try {
      const result = await getAllPostWithFetch();
      setPost(result.posts);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts)

  return (
    <div id="all-post">
      <h1>All post</h1>
      {posts.length
        ? posts.map((post, idx) => {
            return (
              <div key={idx}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <h3>Price: {post.price}</h3>
                <h2>Seller: {post.author.username}</h2>
                <h3>Location: {post.location}</h3>
                <Link to={`${post._id}`}><button>View</button></Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AllPosts;
