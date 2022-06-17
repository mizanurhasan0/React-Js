import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Details } from "./Pages/Details";
import "./StyleSheets/dashboardHome.css";

export const DashboardHome = () => {
  const [navActive, setNavActive] = useState(true);
  const onClickActive = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };
  return (
    <div className="DashboardApp">
      <div className={navActive ? "navigation" : "navigation active"}>
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <img
                  src={require("../Images/logo.png")}
                  style={{ width: "30px" }}
                />
              </span>
              <span className="title">
                <h2>Software BD</h2>
              </span>
            </Link>
          </li>
          <li>
            <Link to="/details">
              <span className="icon">
                <i className="fa fa-users"></i>
              </span>
              <span className="title">Education</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-envelope-open"></i>
              </span>
              <span className="title">Skills</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-info"></i>
              </span>
              <span className="title">Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-cog"></i>
              </span>
              <span className="title">Basic info</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-key"></i>
              </span>
              <span className="title">Password</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-sign-out"></i>
              </span>
              <span className="title">Logout</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className={navActive ? "main" : "main active"}>
        <div className="topbar">
          <div className="toggle" onClick={onClickActive}>
            <i className="fa fa-bars" id="bars"></i>
          </div>
          <div className="search">
            <label>
              <input type="text" placeholder="Search here" />
              <i className="fa fa-search"></i>
            </label>
          </div>
          <div className="user">
            <img src={require("../Images/logo.png")} />
          </div>
        </div>
        <Details />

        {/* Details end */}
      </div>
    </div>
  );
};
