import {
  faEnvelope,
  faLocation,
  faLockOpen,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "../Designs/register.css";
import axios from "axios";
import { toast } from "react-toastify";
import { phoneValidation, serverApi } from "../TinnyHelper/TinyHelper";

export const Registration = () => {
  const navigation = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    mobile: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("-").required("-"),
    password: Yup.string().required("-"),
    mobile: Yup.string()
      .matches(phoneValidation, "-")
      .min(11, "-")
      .max(11, "-")
      .required("-"),
    address: Yup.string().required("-"),
  });

  const getUser = (text) => {
    const username = text.email.split("@");
    const name = username[0].replaceAll(".", " ");
    return name[0].toUpperCase() + name.slice(1);
  };
  const onSubmit = (data) => {
    const username = getUser(data);
    axios.post(serverApi + "user", data).then((response) => {
      if (response.data.error) {
        toast.error(`${username} already exist!`);
      } else {
        toast.success(`${username} Success!`);
        navigation("/login");
      }
    });
  };

  return (
    <div>
      <div className="container registerContainer">
        <h2 className="login-title">Sign up your account</h2>
        <section className="vh-100 loginForm">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                className="col-md-8 col-lg-6 col-xl-4 offset-xl-1"
              >
                <Form>
                  <div className="form-outline mb-4 loginFormField">
                    <Field
                      type="email"
                      id="form3Example1"
                      name="email"
                      required
                      className="form-control form-control-lg loginInputField"
                      placeholder="Enter a valid email address"
                    />
                    <FontAwesomeIcon
                      className="loginIcon"
                      icon={faEnvelope}
                      color="#DCDCDC"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="form-outline mb-3 loginFormField">
                    <Field
                      type="password"
                      id="form3Example2"
                      name="password"
                      className="form-control form-control-lg loginInputField"
                      placeholder="Enter password"
                    />
                    <FontAwesomeIcon
                      className="loginIcon"
                      icon={faLockOpen}
                      color="#DCDCDC"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="form-outline mb-3 loginFormField">
                    <Field
                      type="text"
                      id="form3Example3"
                      name="mobile"
                      className="form-control form-control-lg loginInputField"
                      placeholder="Enter phone"
                    />
                    <FontAwesomeIcon
                      className="loginIcon"
                      icon={faMobile}
                      color="#DCDCDC"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="form-outline mb-3 loginFormField">
                    <Field
                      type="text"
                      id="form3Example4"
                      required
                      name="address"
                      className="form-control form-control-lg loginInputField"
                      placeholder="Enter Home Address"
                    />
                    <FontAwesomeIcon
                      className="loginIcon"
                      icon={faLocation}
                      color="#DCDCDC"
                    />
                    <ErrorMessage
                      name="address"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-default">
                      Signup
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/login" className="link-danger">
                        Login
                      </Link>
                    </p>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      </div>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-danger">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>
      </div>
    </div>
  );
};
