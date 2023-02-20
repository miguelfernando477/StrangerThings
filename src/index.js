import React from "react";
import ReactDOM from "react-dom/client";
import { Main, AllPosts, Individual, Login, Register } from "./components";

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
            <Route index element ={<AllPosts />} />
            <Route path=":id" element={<Individual />} />
            </Route>
    )
)

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
