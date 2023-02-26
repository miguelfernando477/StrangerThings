import React from "react";
import ReactDOM from "react-dom/client";
import {
  Main,
  AllPosts,
  Login,
  Register,
  Profile,
  NewPost,
  Message,
  EditPost,
} from "./components";

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route index element={<AllPosts />} />
      <Route path="new-post" element={<NewPost />} />
      <Route path="message" element={<Message />} />
      <Route path="edit-post/:id" element={<EditPost />} />
    </Route>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
