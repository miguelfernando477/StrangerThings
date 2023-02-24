import React from "react";
import { Navbar } from "./";
import { Outlet } from "react-router-dom";

const Main = () => {
    return(
        <div id="main">
            <h1 id="StrangersThings">Stranger's Things</h1>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Main