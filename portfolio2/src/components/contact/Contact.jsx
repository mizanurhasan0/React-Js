import React, { useContext, useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import phone from "../../img/phone.png";
import email from "../../img/email.png";
import address from "../../img/address.png";
import { ThemeContext } from "../../ContextApi";

export const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_f7lgoya",
        "template_pxr5fld",
        formRef.current,
        "2FLYumGd4ZeCOrGnY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h2 className="c-title">Let's discuss your project</h2>
          <div className="c-info-item">
            <img src={phone} alt="" className="c-icon" />
            +880 96966 742 98
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={email} alt="" />
            Eng.Mizanur.Hasan@gmail.com
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={address} alt="" />
            27, Dhanmondi, Dhaka-1209
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
