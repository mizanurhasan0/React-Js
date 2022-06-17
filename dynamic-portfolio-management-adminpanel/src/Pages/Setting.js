import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/formDesign.css";

export const Setting = () => {
  const initialValues = {
    currentPass: "",
    newPass: "",
    againNewPass: "",
  };
  const validationSchema = Yup.object().shape({
    currentPass: Yup.string().required("Input University Name"),
    newPass: Yup.string().required(),
  });

  const onSubmit = () => {
    console.log("alert");
  };
  return (
    <div className="AppExperience">
      <div className="CreateBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />

        <h1>Change Password</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <label>Current Password</label>
            <br />
            <ErrorMessage name="currentPass" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="currentPass"
              placeholder="(Ex. Passowrd...)"
            />
            <label>New Password</label>
            <br />
            <ErrorMessage name="newPass" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="newPass"
              placeholder="(Ex. New Password...)"
            />
            <label> Again New Password </label>
            <br />
            <ErrorMessage name="againNewPass" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="againNewPass"
              placeholder="(Ex. New Password...)"
            />
            <label>Software Configuration Management (SCM) </label>
            <br />

            <button type="submit">Change Password</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
