import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newPost } from "../apiAdapters";

function NewPost() {
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newPrice, setNewPrice] = useState(0);
  let [newLocation, setNewLocation] = useState ("")


  async function sendPost(title, description, price, location) {
    try {
      console.log("you have posted a new article", title, description, price, location);
      const result = await newPost(title, description, price, location);
      localStorage.setItem(result.title, result.description, result.price, result.location)
      setNewTitle('');
      setNewDescription('');
      setNewPrice('');
      setNewLocation('');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        sendPost(newTitle, newDescription, newPrice, newLocation);
      }}
    >
      <label>
        Title:
        <input
          name="title"
          type="text"
          required
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
          required
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
          required
          value={newPrice}
          onChange={(event) => {
            setNewPrice(event.target.value);
          }}
        />
      </label>
      <label>
        Location:
        <input
          name="location"
          type="text"
          value={newLocation}
          onChange={(event) => {
            setNewLocation(event.target.value);
          }}
        />
      </label>
      <button type="submit">Submit</button>
      <Link to="/">Go back</Link>
    </form>
  );
}

export default NewPost;