import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Styles/auth.css";
import axios from "axios";

export const Auth = () => {
  const navigate = useNavigate();

  const [loginChecking, setLogingChecking] = useState(true);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [imageField, setImageFile] = useState(null);

  const initialValues = {
    email: "",
    password: "",
  };
  const initialValueForSignUp = {
    username: "",
    password: "",
    image: "",
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Required Field"),
    password: Yup.string().required("Required Field"),
  });
  const validationForSignUp = Yup.object().shape({
    username: Yup.string().required("Required Field"),
    password: Yup.string().required("Required Field"),
    email: Yup.string().required("Required Field"),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        alert("Wrong Authenticate");
      }
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/view");
      }
    });
  };

  const onSubmit2 = (data) => {
    // data.preventDefault();
    const bodyFormData = new FormData(data.target);
    bodyFormData.append("username", data.username);
    bodyFormData.append("email", data.email);
    bodyFormData.append("password", data.password);
    bodyFormData.append("image", imageField);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:3001/auth", bodyFormData, config)
      .then((response) => {
        console.log(response);
      });
  };
  const onPhotoChange = (e) => {
    // console.log(e.target.files[0]);
    setImageFile(e.target.files[0]);
  };
  return (
    <div className="AppAuth">
      <div className="AuthBox">
        <img src={require("../Images/logo.png")} alt="craeteLogo" />
        <h1>Admin Panel</h1>
        {loginChecking ? (
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form className="formContainer">
                <label>Email Address</label>
                <br />
                <ErrorMessage name="email" component="span" />
                <Field
                  autoComplete="off"
                  className="inputField"
                  name="email"
                  placeholder="(Ex. admin@gmail.com...)"
                />

                <label>Password </label>
                <br />
                <ErrorMessage name="password" component="span" />
                <Field
                  type="password"
                  autoComplete="off"
                  className="inputField"
                  name="password"
                  placeholder="(Ex. pass123...)"
                />

                <button type="submit" className="actionButton">
                  Login
                </button>
              </Form>
            </Formik>
            <button
              className="OptionalUserButton"
              onClick={() => {
                setLogingChecking(!loginChecking);
              }}
            >
              <i className="fa fa-user-plus"></i>SignUp
            </button>
          </div>
        ) : (
          <div>
            <h1>SImple File Upload</h1>

            <Formik
              initialValues={initialValueForSignUp}
              onSubmit={onSubmit2}
              validationSchema={validationForSignUp}
            >
              <Form className="formContainer">
                <label>Personal Image</label>
                <br />
                <br />
                <ErrorMessage name="image" component="span" />
                <Field
                  type="file"
                  onChange={onPhotoChange}
                  // id="inputCreatePost"

                  className="inputField"
                  name="image"
                />

                <label>Username</label>
                <br />
                <ErrorMessage name="username" component="span" />
                <Field
                  autoComplete="off"
                  // id="inputCreatePost"
                  className="inputField"
                  name="username"
                  placeholder="(Ex. admin...)"
                />

                <label>Email Address</label>
                <br />
                <ErrorMessage name="email" component="span" />
                <Field
                  autoComplete="off"
                  // id="inputCreatePost"
                  className="inputField"
                  name="email"
                  placeholder="(Ex. admin@gmail.com...)"
                />

                <label>Password </label>
                <br />
                <ErrorMessage name="password" component="span" />
                <Field
                  type="password"
                  autoComplete="off"
                  className="inputField"
                  // id="inputCreatePost"
                  name="password"
                  placeholder="(Ex. pass123...)"
                />

                <button type="submit" className="actionButton">
                  Sign up
                </button>
              </Form>
            </Formik>

            <button
              className="OptionalUserButton"
              onClick={() => {
                setLogingChecking(!loginChecking);
              }}
            >
              <i className="fa fa-arrow-right"></i> Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
