import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, Individual, Login, Register, Profile, NewPost } from "./components";

import {
    Route,
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />}>
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
            <Route path='user' element={<Profile />} />
            <Route index element ={<AllPosts />} />
            <Route path=":id" element={<Individual />} />
            <Route path="new-post" element={<NewPost />} />
            </Route>
    )
)

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
