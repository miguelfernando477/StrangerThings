import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { updatePost } from "../apiAdapters";

function EditPost() {
  const location = useLocation();
  const navigate = useNavigate();
  let [newTitle, setNewTitle] = useState(location.state.title);
  let [newDescription, setNewDescription] = useState(location.state.description);
  let [newPrice, setNewPrice] = useState(location.state.price);
  let [newLocation, setNewLocation] = useState(location.state.location);
  let [newWillDeliver, setNewWillDeliver] = useState(location.state.willDeliver);

  async function changePost(
    id,
    title,
    description,
    price,
    location,
    willDeliver
  ) {
    try {
      const result = await updatePost(
        id,
        title,
        description,
        price,
        location,
        willDeliver
      );
      setNewTitle("");
      setNewDescription("");
      setNewPrice("");
      setNewLocation("");
      setNewWillDeliver(false);
      alert("Post Edited!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="addPost-container">
      <h1 id="addPostTitle">Edit Post</h1>
      <form
        id="addPostBox"
        onSubmit={(event) => {
          event.preventDefault();
          changePost(
            location.state._id,
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
          min='0'
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
          <input
            id="willDeliverCheckbox"
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

export default EditPost;
