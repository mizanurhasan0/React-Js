import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/formDesign.css";
import axios from "axios";

export const Projects = () => {
  const navigation = useNavigate();
  const Api = "http://localhost:3001/project";

  const initialValues = {
    projectName: "",
    technology: "",
    projectLink: "",
  };
  const validationSchema = Yup.object().shape({
    projectName: Yup.string().required("Required Field"),
    technology: Yup.string().required("Required Field"),
    projectLink: Yup.string().required("Required Field"),
  });

  const onSubmit = (data) => {
    axios.post(Api, data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Personal Project</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Project Name</label>
            <br />
            <ErrorMessage name="projectName" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="projectName"
              placeholder="(Ex. School Management...)"
            />
            <label>Use Technology</label>
            <br />
            <ErrorMessage name="technology" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="technology"
              placeholder="(Ex. React, Java ...)"
            />
            <label>Project Link </label>
            <br />
            <ErrorMessage name="projectLink" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="projectLink"
              placeholder="(Ex. MySql...)"
            />

            <button type="submit">Add Project</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
