import React from "react";
import { Link } from "react-router-dom";
import "../Designs/about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGit,
} from "@fortawesome/free-brands-svg-icons";

export const About = () => {
  return (
    <div className="aboutContainer">
      <div className="py-5 team4">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
              <h3 className="mb-3">Experienced & Professional Team</h3>
              <h6 className="subtitle">
                You can relay on our amazing expertise list and also our
                customer services will be great experience for you without doubt
                and in no-time
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mb-4 ">
              <div className="row">
                <div className="col-md-12 personalImage">
                  <img
                    src={require("../Images/person.jpg")}
                    alt="wrapkit"
                    className="img-fluid rounded-circle aboutImage"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Mizanur Hasan
                    </h5>
                    <h6 className="subtitle mb-3">Full Stack Developer</h6>
                    <p>
                      hi, I am always hungry to learn, passion for perfection. I
                      would like to use my experiences being as a web and server
                      with my clients.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faFacebookF}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faTwitter}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faInstagram}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faGit}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4 personBox">
              <div className="row">
                <div className="col-md-12 personalImage">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg"
                    alt="wrapkit"
                    className="img-fluid rounded-circle aboutImage"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Michael Doe
                    </h5>
                    <h6 className="subtitle mb-3">Property Specialist</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faFacebookF}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faTwitter}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faInstagram}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faGit}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4 personBox">
              <div className="row">
                <div className="col-md-12 personalImage">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg"
                    alt="wrapkit"
                    className="img-fluid rounded-circle aboutImage"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Michael Doe
                    </h5>
                    <h6 className="subtitle mb-3">Property Specialist</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faFacebookF}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faTwitter}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faInstagram}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faGit}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 mb-4 personBox">
              <div className="row">
                <div className="col-md-12 personalImage">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t4.jpg"
                    alt="wrapkit"
                    className="img-fluid rounded-circle aboutImage"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Michael Doe
                    </h5>
                    <h6 className="subtitle mb-3">Property Specialist</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faFacebookF}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faTwitter}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faInstagram}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <FontAwesomeIcon
                            className="loginIcon"
                            icon={faGit}
                            color="#ff5c72"
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            {/* End Person */}
          </div>
        </div>
      </div>
    </div>
  );
};
