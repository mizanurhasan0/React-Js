import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/formDesign.css";
import axios from "axios";

export const Education = () => {
  const navigation = useNavigate();
  const Api = "http://localhost:3001/education";

  const initialValues = {
    degree: "",
    institute: "",
    cgpa: "",
    passyear: "",
  };
  const validationSchema = Yup.object().shape({
    degree: Yup.string().required("Required field"),
    institute: Yup.string().required("Required field"),
    cgpa: Yup.string().required("Required field"),
    passyear: Yup.string().required("Required field"),
  });

  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post(Api, data, {
        headers: { accessToken: localStorage.getItem("token") },
      })
      .then((response) => {
        console.log("add Education");
      });
  };

  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Educational Background</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Education Degree </label>
            <br />
            <ErrorMessage name="degree" component="span" />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="degree"
              placeholder="(Ex. BSc in CSC...)"
            />

            <label>University </label>
            <br />
            <ErrorMessage name="institute" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="institute"
              placeholder="(Ex. University Name...)"
            />
            <label>CGPA</label>
            <br />
            <ErrorMessage name="cgpa" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="cgpa"
              placeholder="(Ex. 4.0 ...)"
            />
            <label>Passing Year </label>
            <br />
            <ErrorMessage name="passyear" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="passyear"
              placeholder="(Ex. 2022...)"
            />

            <button type="submit">Add Education</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
