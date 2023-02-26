import React from "react";
import { isLoggedIn, logOut } from "../HelperFunctions";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <nav>
        <Link className="navButton" to="/">
          Post
        </Link>
        {isLoggedIn() ? (
          <Link className="navButton" to="profile">
            Profile
          </Link>
        ) : null}

        {isLoggedIn() ? (
          <button
            id="logOutButton"
            onClick={() => {
              logOut();
              navigate("/login");
            }}
          >
            Log Out
          </button>
        ) : (
          <Link className="navButton" to="login">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
