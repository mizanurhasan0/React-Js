import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/formDesign.css";
import axios from "axios";

export const Skills = () => {
  const navigation = useNavigate();
  const Api = "http://localhost:3001/userinfo";

  const initialValues = {
    backend: "",
    frontend: "",
    database: "",
    scm: "",
  };
  const validationSchema = Yup.object().shape({
    backend: Yup.string().required("Required field"),
    frontend: Yup.string().required("Required field"),
    database: Yup.string().required("Required field"),
    scm: Yup.string().required("Required field"),
  });

  const onSubmit = (data) => {
    data.skill = "skill";
    // console.log(data);
    axios.post(Api, data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Programming Skills</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Backend Language </label>
            <br />
            <ErrorMessage name="backend" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="backend"
              placeholder="(Ex. University Name...)"
            />
            <label>Front-end Language</label>
            <br />
            <ErrorMessage name="frontend" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="frontend"
              placeholder="(Ex. Html, CSs ...)"
            />
            <label>Database </label>
            <br />
            <ErrorMessage name="database" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="database"
              placeholder="(Ex. MySql...)"
            />
            <label>Software Configuration Management (SCM) </label>
            <br />
            <ErrorMessage name="scm" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="scm"
              placeholder="(Ex. Git...)"
            />
            <button type="submit">Add Skill</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
