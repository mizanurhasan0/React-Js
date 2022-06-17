import React from "react";
import "./FormValidationYup.css";
import { userValidation } from "./UserValidation";

export default function FormValidationYup() {
  const createUser = async (event) => {
    event.preventDefault();
    const formData = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    const checkValidation = await userValidation.isValid(formData);
    console.log(checkValidation);
  };
  return (
    <div className="formValidApp">
      <form onSubmit={createUser}>
        <input type="text" placeholder="Name..." />
        <input type="text" placeholder="Email@gmail.com" />
        <input type="text" placeholder="Password123" />
        <input type="submit" />
      </form>
    </div>
  );
}
