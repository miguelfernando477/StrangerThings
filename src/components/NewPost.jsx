import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { newPost } from "../apiAdapters";

function NewPost() {
  let [newTitle, setNewTitle] = useState("");
  let [newDescription, setNewDescription] = useState("");
  let [newPrice, setNewPrice] = useState(0);
  let [newLocation, setNewLocation] = useState("");
  let [newWillDeliver, setNewWillDeliver] = useState(false);

  const navigate = useNavigate();

  async function sendPost(title, description, price, location, willDeliver) {
    try {
      const result = await newPost(
        title,
        description,
        price,
        location,
        willDeliver
      );
      localStorage.setItem(
        result.title,
        result.description,
        result.price,
        result.location,
        result.willDeliver
      );
      setNewTitle("");
      setNewDescription("");
      setNewPrice("");
      setNewLocation("");
      setNewWillDeliver(false);
      result.success
        ? (alert("Post Added!"), navigate("/"))
        : (alert("Unauthorized users cannot add post, please Log In"),
          navigate("/login"));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="addPost-container">
      <h1 id="addPostTitle">Add Post</h1>
      <form
        id="addPostBox"
        onSubmit={(event) => {
          event.preventDefault();
          sendPost(
            newTitle,
            newDescription,
            newPrice,
            newLocation,
            newWillDeliver
          );
        }}
      >
        <h1>Item</h1>
        <input
          className="addPostTextBox"
          name="title"
          type="text"
          required
          value={newTitle}
          onChange={(event) => {
            setNewTitle(event.target.value);
          }}
        />
        <h1>Description</h1>
        <input
          className="addPostTextBox"
          name="description"
          type="text"
          required
          value={newDescription}
          onChange={(event) => {
            setNewDescription(event.target.value);
          }}
        />
        <h1>Price</h1>
        <input
          className="addPostTextBox"
          name="price"
          type="number"
          required
          value={newPrice}
          onChange={(event) => {
            setNewPrice(event.target.value);
          }}
        />
        <h1>Location</h1>
        <input
          className="addPostTextBox"
          name="location"
          type="text"
          placeholder="optional"
          value={newLocation}
          onChange={(event) => {
            setNewLocation(event.target.value);
          }}
        />
        <h1>
          Willing to Deliver?
          <input id="willDeliverCheckbox"
            name="willDeliver"
            type="checkbox"
            value={newWillDeliver}
            onChange={() => {
              setNewWillDeliver(!newWillDeliver);
            }}
          />
        </h1>

        <button id="addPostButton" type="submit">
          Submit
        </button>
        <Link id="goBackLink" to="/">
          Go back
        </Link>
      </form>
    </div>
  );
}

export default NewPost;
