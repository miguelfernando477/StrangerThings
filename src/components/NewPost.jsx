import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newPost } from "../apiAdapters";

function NewPost() {
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newPrice, setNewPrice] = useState(0);


  async function sendPost(title, description, price) {
    try {
      console.log("you have posted a new article", title, description, price);
      const result = await newPost(title, description, price);
      localStorage.setItem(result.title, result.description, result.price)
      setNewTitle('');
      setNewDescription('');
      setNewPrice('');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendPost(newTitle, newDescription, newPrice);
      }}
    >
      <label>
        Title:
        <input
          name="title"
          type="text"
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
      </label>
      <label>
        Description:
        <input
          name="description"
          type="text"
          value={newDescription}
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        />
      </label>
      <label>
        Price:
        <input
          name="price"
          type="number"
          value={newPrice}
          onChange={(event) => {
            setNewPrice(event.target.value);
          }}
        />
      </label>
      <button type="submit">Submit</button>
      <Link to="/">Go back</Link>
    </form>
  );
}

export default NewPost;