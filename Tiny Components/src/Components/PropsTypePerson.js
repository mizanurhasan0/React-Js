import React from "react";
import "./propsTypeStyle.css";
import propTypes from "prop-types";

const Person = (props) => {
  return (
    <div className="person">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
      <h3>{props.isMarried}</h3>
      <h3>Children:</h3>
      <ul>
        {props.children.map((child, key) => {
          return <li key={key}>{child}</li>;
        })}
      </ul>
    </div>
  );
};
Person.propTypes = {
  // if "props" comes to Object
  // props: propTypes.shape({
  //   name: propTypes.string,
  // age: propTypes.number,
  // })
  name: propTypes.string,
  age: propTypes.number,
  email: propTypes.string,
  isMarried: propTypes.bool,
  children: propTypes.arrayOf(propTypes.string),
};
export default Person;
