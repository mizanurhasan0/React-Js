import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="notFoundContainer">
      <h2>Page Not found</h2>
      <h4>Go to </h4>
      <Link to="/" className="link">
        Home Page
      </Link>
    </div>
  );
};
