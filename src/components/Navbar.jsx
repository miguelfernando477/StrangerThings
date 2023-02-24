import React from "react";
import { isLoggedIn, logOut } from "../HelperFunctions";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div id="navbar">
      <nav>
      <Link className="navButton" to="/">Post</Link>
      <Link className="navButton" to='profile'>Profile</Link>
      {isLoggedIn() ? 
      (<button onClick={logOut} >Log Out</button>,
      // alert("You've logged out"),
      navigate('/login')):
      <Link className="navButton" to="login">Login</Link>}
      </nav>
    </div>
  );
};

console.log(isLoggedIn())



export default Navbar;