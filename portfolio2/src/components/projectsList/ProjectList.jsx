import React from "react";
import { Project } from "../../Projects/Project";
import "./projectList.css";
import { Projects } from "../../data";

export const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">List of your Actions</h1>
        <p className="pl-desc">
          A strong project description provides a roadmap for stakeholders and
          communicates the vision without getting bogged down in details.
        </p>
      </div>
      <div className="pl-list">
        {Projects.map((item) => {
          return <Project key={item.id} img={item.img} link={item.link} />;
        })}
      </div>
    </div>
  );
};
