import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import axios from "axios";

export const Registration = () => {
  const apiLink = "http://localhost:3001/auth";
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (data) => {
    axios.post(apiLink, data).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="AppLogin">
      <div className="loginBox">
        <img
          src={require("./avater.png")}
          className="avater"
          alt="avater img"
        />
        <h1>Registration </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <p>Username</p>
            <Field
              autoComplete="off"
              name="username"
              id="registerUser"
              className="input"
              placeholder="Enter Username..."
            />
            <p>Password</p>
            <Field
              autoComplete="off"
              name="password"
              id="registerUser"
              className="input"
              placeholder="Enter Password..."
            />

            <button type="submit">Registration</button>
          </Form>
        </Formik>
        <Link className="link" to="/login">
          Go to Login?
        </Link>
      </div>
    </div>
  );
};
