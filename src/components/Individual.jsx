import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualPost } from "../apiAdapters";

const Individual = () => {
  const [post, setPost] = useState({});

  let { id } = useParams();
 
  async function getPost() {
    try {
      const result = await getIndividualPost(id);
      setPost(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPost();
  }, []);


  return (
    <div id="individual-post">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <h3>Price: {post.price}</h3>
      {/* <h2>Seller: {post.author.username}</h2> */}
      <h3>Location: {post.location}</h3>
    </div>
  );
};

export default Individual