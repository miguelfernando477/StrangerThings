import React from "react";
import { logOut } from "../HelperFunctions";

const Navbar = () => {
  return (
    <div id="navbar">
      <h2> I am navbar</h2>
      <button onClick={logOut} >Log Out</button>
    </div>
  );
};

export default Navbar;