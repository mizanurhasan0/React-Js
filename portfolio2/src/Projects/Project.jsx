import React, { useContext } from "react";
import { ThemeContext } from "../ContextApi";
import "./project.css";
export const Project = ({ img, link }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="p" style={{ backgroundColor: darkMode && "white" }}>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={link} alt="" className="p-img" />
      </a>
    </div>
  );
};
