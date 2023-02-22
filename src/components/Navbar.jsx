import React from "react";
import { logOut } from "../HelperFunctions";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav>
      <Link className="navButton" to="/">Post</Link>
      <Link className="navButton" to='profile'>Profile</Link>
      <Link className="navButton" to="login">Login</Link>
      <Link className="navButton" to="register">Sign Up</Link>
      <button onClick={logOut} >Log Out</button>
      </nav>
    </div>
  );
};

export default Navbar;