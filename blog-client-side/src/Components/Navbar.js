import React, { useContext, useState } from "react";
import "./Navbar.css";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Helper/AuthContext";

export const Navbar = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };
  return (
    <div className="header">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
        alt="logo"
      />
      <nav>
        <ul className="nav_links">
          {!authState.status ? (
            <>
              <li>
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="link">
                  posts
                </Link>
              </li>
              <li>
                <Link to="/create" className="link">
                  Create
                </Link>
              </li>
              <li>
                <Link to="/" onClick={logout} className="link">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      {authState.status ? (
        <Link to="/contact" className="cta">
          <button>{authState.username}</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
