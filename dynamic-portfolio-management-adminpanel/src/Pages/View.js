import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/view.css";

export const View = () => {
  const navigation = useNavigate();
  const Api = "http://localhost:3001";

  const [userDetails, setUserDetails] = useState([]);
  const [userProject, setUserProject] = useState([]);
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [user, setUser] = useState([""]);

  useEffect(() => {
    axios.get(Api + "/project/getworkbyuser").then((response) => {
      setUserProject(response.data);
      // console.log(userProject);
    });
    axios.get(Api + "/userinfo").then((response) => {
      setUserDetails(response.data);
      console.log(userDetails);
    });
    axios.get(Api + "/education").then((response) => {
      setEducation(response.data[0]);
    });
    axios.get(Api + "/experience").then((response) => {
      setExperience(response.data);
    });
    axios.get(Api + "/auth/getuser").then((response) => {
      setUser(response.data.user);
    });
  }, []);
  return (
    <div className="ViewApp">
      <div className="listOfCard">
        <div className="card">
          <h2>Top Info</h2>
          <div className="cardInfo">
            <div>
              <img
                src={"http://localhost:3001/images/" + user.image}
                alt="img"
              />
            </div>
            <div className="userInfo">
              <h3>{user.username}</h3>
              <div>
                <span>
                  <i className="fa fa-envelope"></i>
                </span>
                <p>{user.email}</p>
              </div>
              <div>
                <span>
                  <i className="fa fa-mobile"></i>
                </span>
                <p>+8801912-34432</p>
              </div>
              <div>
                <span>
                  <i className="fa fa-location-arrow"></i>
                </span>
                <p>
                  {userDetails[0]
                    ? userDetails[0].pAddress
                    : "Deafult, address"}
                </p>
              </div>
              <div className="edit">
                <i className="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Expirwnce ... */}
        <div className="card2">
          <h2>Experience</h2>
          {experience.map((data, key) => {
            return (
              <div className="cardInfo" key={key}>
                <div className="userInfo">
                  <div className="headerExperience">
                    <h3>{data.companyName}</h3>
                    <p>{data.year}</p>
                  </div>
                  <div>
                    <h3>{data.position}</h3>
                  </div>
                  <div>
                    <p>
                      <b>Job Responsibilities :</b>
                      {data.jobResponsible}
                    </p>
                  </div>
                  <div className="edit">
                    <i className="fa fa-edit"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/*  */}
        <div className="card3">
          <h2>Last Education</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <h3>{education.degree}</h3>

              <p>
                <b>Institute :</b>
                {education.institute}
              </p>
              <p>
                <b>CGPA :</b>
                {education.cgpa} out of 4.00
              </p>
              <p>
                <b>Passing Year :</b>
                {education.passyear}
              </p>
              <div className="edit">
                <i className="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="card4">
          <h2>Skills</h2>

          <div className="cardInfo">
            <div className="userInfo">
              <p>
                <b>Backend :</b>
                {userDetails[0] ? userDetails[0].backend : "Update Father Name"}
              </p>
              <p>
                <b>Frontend :</b>
                {userDetails[0]
                  ? userDetails[0].frontend
                  : "Update Father Name"}
              </p>
              <p>
                <b>Database :</b>
                {userDetails[0]
                  ? userDetails[0].database
                  : "Update Father Name"}
              </p>
              <p>
                <b>SCM :</b>
                {userDetails[0] ? userDetails[0].scm : "Update Father Name"}
              </p>
              <div className="edit">
                <i className="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>

        {/*Personal Project.......  */}
        <div className="card4">
          <h2>Personal Projects</h2>
          {userProject.map((data, key) => {
            return (
              <div className="cardInfo" key={key}>
                <div className="userInfo">
                  <h3>{data.projectName}</h3>

                  <p>{data.technology}</p>
                  <p>
                    {" "}
                    Link: <b> {data.projectLink}</b>
                  </p>
                  <div className="edit">
                    <i className="fa fa-edit"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/*  */}

        {/*  */}
        <div className="card4">
          <h2>Personal Details</h2>
          <div className="cardInfo">
            <div className="userInfo">
              <p>
                <b>Father's Name:</b>{" "}
                {userDetails[0] ? userDetails[0].father : "Update Father Name"}
              </p>
              <p>
                <b>Mother's Name:</b>{" "}
                {userDetails[0] ? userDetails[0].mother : "Update Mother Name"}
              </p>
              <p>
                <b>Nationality :</b>{" "}
                {userDetails[0]
                  ? userDetails[0].national
                  : "Update Country Name"}
              </p>
              <p>
                <b>P. Address :</b>
                {userDetails[0]
                  ? userDetails[0].pAddress
                  : "Update parmanent address"}
              </p>
              <p>
                <b>DOB:</b>{" "}
                {userDetails[0] ? userDetails[0].dob : "Update Birth Date"}
              </p>
              <p>
                <b>Gender</b>:{" "}
                {userDetails[0] ? userDetails[0].gender : "Update Gender"}
              </p>
              <p>
                <b>Blood Group</b>:{" "}
                {userDetails[0] ? userDetails[0].blood : "Update blood "}
              </p>
              <p>
                <b>Religion:</b>{" "}
                {userDetails[0] ? userDetails[0].religion : "Update religion "}
              </p>
              {/* <p>{userProject[0]}</p> */}
              <div className="edit">
                <i className="fa fa-edit"></i>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      {/* .............. */}
    </div>
  );
};
