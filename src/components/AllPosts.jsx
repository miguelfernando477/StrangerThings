import React, { useEffect, useState } from "react";
import { getAllPostWithFetch } from "../apiAdapters";

const AllPosts = () => {
  let [posts, setPost] = useState([]);

  async function getPosts() {
    try {
      const result = await getAllPostWithFetch();
      setPost(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="all-post">
      <h1>All post</h1>
      {posts.length
        ? posts.map((post, idx) => {
            return (
              <div key={idx}>
                <h3>{post.title}</h3>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default AllPosts;
