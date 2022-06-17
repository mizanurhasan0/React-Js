import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/formDesign.css";
import "../Styles/experience.css";
import axios from "axios";

export const Experience = () => {
  const navigation = useNavigate();
  const Api = "http://localhost:3001/experience";

  const initialValues = {
    companyName: "",
    position: "",
    jobResponsible: "",
    year: "",
  };
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Required Field"),
    position: Yup.string().required("Required Field"),
    jobResponsible: Yup.string().required("Required Field"),
    year: Yup.string().required("Required Field"),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios.post(Api, data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Create Experience</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Company Name </label>
            <br />
            <ErrorMessage
              name="companyName"
              component="span"
              className="errorMessage"
            />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="companyName"
              placeholder="(Ex. Software BD...)"
            />

            <label>Position</label>
            <br />
            <ErrorMessage
              name="position"
              component="span"
              className="errorMessage"
            />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="position"
              placeholder="(Ex. Senior angular Developer...)"
            />

            <label>Job Responsibility </label>
            <br />
            <ErrorMessage
              name="jobResponsible"
              component="span"
              className="errorMessage"
            />
            <Field
              as="textarea"
              autoComplete="off"
              className="inputField inputtextField"
              id="inputCreatePost"
              name="jobResponsible"
              placeholder="(Ex. What do you work ...)"
            />
            <label>Joining and Ending Date </label>
            <br />
            <ErrorMessage
              name="year"
              component="span"
              className="errorMessage"
            />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="year"
              placeholder="(Ex. 2021-2022)"
            />
            <button type="submit">Create Experience</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
