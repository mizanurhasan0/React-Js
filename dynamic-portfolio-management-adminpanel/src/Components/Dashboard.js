import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Details } from "../Pages/Details";
import { Experience } from "../Pages/Experience";
import { Skills } from "../Pages/Skills";
import { Projects } from "../Pages/Projects";
import { Setting } from "../Pages/Setting";
import { Education } from "../Pages/Education";

import "../Styles/dashboard.css";
import { Auth } from "../Pages/Auth";
import { PersonalDetails } from "../Pages/PersonalDetails";
import { View } from "../Pages/View";
import { Gallary } from "../Pages/Gallary";
import { ImageProcessing } from "../Pages/ImageProcessing";
export const Dashboard = () => {
  const [navActive, setNavActive] = useState(true);
  const onClickActive = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };
  return (
    <BrowserRouter>
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
              <Link to="/experience">
                <span className="icon">
                  <i className="fa fa-users"></i>
                </span>
                <span className="title">Experience</span>
              </Link>
            </li>
            <li>
              <Link to="/education">
                <span className="icon">
                  <i className="fa fa-building"></i>
                </span>
                <span className="title">Education</span>
              </Link>
            </li>
            <li>
              <Link to="/skills">
                <span className="icon">
                  <i className="fa fa-flask"></i>
                </span>
                <span className="title">Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span className="icon">
                  <i className="fa fa-briefcase"></i>
                </span>
                <span className="title">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/basicinfo">
                <span className="icon">
                  <i className="fa fa-info"></i>
                </span>
                <span className="title">Basic info</span>
              </Link>
            </li>
            <li>
              <Link to="/setting">
                <span className="icon">
                  <i className="fa fa-gear"></i>
                </span>
                <span className="title">Setting</span>
              </Link>
            </li>
            <li>
              <Link to="/view">
                <span className="icon">
                  <i className="fa fa-eye"></i>
                </span>
                <span className="title">View</span>
              </Link>
            </li>
            <li>
              <Link to="/gallary">
                <span className="icon">
                  <i className="fa fa-camera"></i>
                </span>
                <span className="title">Gallary</span>
              </Link>
            </li>
            <li>
              <Link to="/auth">
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

          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Details />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/basicinfo" element={<PersonalDetails />} />
            <Route path="/view" element={<View />} />
            <Route path="/gallary" element={<Gallary />} />
            <Route path="/img" element={<ImageProcessing />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
