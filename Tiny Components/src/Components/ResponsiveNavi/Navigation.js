import React, { useState } from "react";
import "./navigation.css";

export const Navigation = () => {
  const [showLink, setShowLink] = useState(true);
  return (
    <div className="navbarApp">
      <div className="navbar">
        <div className="leftSide">
          <div className="link" id={showLink ? "hidden" : ""}>
            <a href="/home">Home</a>
            <a href="/home">Service</a>
            <a href="/home">About us</a>
            <a href="/home">Service</a>
            <a href="/home">About us</a>
          </div>
          <button
            className="toggle"
            onClick={() => {
              setShowLink(!showLink);
              console.log(showLink);
            }}
          >
            =
          </button>
        </div>
        <div className="rightSide">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};
