import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Designs/login.css";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { serverApi } from "../TinnyHelper/TinyHelper";
import { toast } from "react-toastify";
import { GlobalContext } from "../Helper/GlobalContext";

export const Login = () => {
  const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
  const navigation = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("-").required("-"),
    password: Yup.string().required("-"),
  });
  const onSubmit = (data) => {
    axios.post(serverApi + "user/login", data).then((response) => {
      if (response.data.error) {
        setGlobalVariable({ ...globalVariable, status: false, activeNav: 4 });
        toast.error(response.data.error);
      } else {
        toast.success("Currect Authenticate!");
        localStorage.setItem("accessToken", response.data.token);

        setGlobalVariable({
          ...globalVariable,
          status: true,
          activeNav: 1,
        });
        navigation("/");
      }
    });
  };

  return (
    <div>
      <div className="container loginContainer">
        <h2 className="login-title">Sign into your account</h2>
        <section className="vh-100 loginForm">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src={require("../Images/defaultlogin.webp")}
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
                      id="form3Example3"
                      name="email"
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
                      id="form3Example4"
                      className="form-control form-control-lg loginInputField"
                      placeholder="Enter password"
                      name="password"
                    />
                    <FontAwesomeIcon
                      className="loginIcon"
                      icon={faLock}
                      color="#DCDCDC"
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <Field
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link to="/" className="text-body">
                      Forgot password?
                    </Link>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="submit" className="btn btn-default">
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/reg" className="link-danger">
                        Register
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
