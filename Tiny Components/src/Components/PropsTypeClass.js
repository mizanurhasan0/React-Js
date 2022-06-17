import "./propsTypeStyle.css";
import React from "react";
import Person from "./PropsTypePerson";

function PropsTypeClass() {
  //   const hasan = {
  //     name: "Hasan",
  //     age: 29,
  //     email: "jack@gmail.com",
  //     isMarried: true,
  //     children: [""],
  //   };

  return (
    <>
      {/* <Person props={hasan}/> */}
      <div className="propsApp">
        <Person
          name={"Hasan"}
          age={29}
          email="jack@gmail.com"
          isMarried={true}
          children={[]}
        />
        <Person
          name="Jack"
          age={29}
          email="jack@gmail.com"
          isMarried={true}
          children={["Jennie", "Jessica"]}
        />
        <Person
          name="Jack"
          age={29}
          email="jack@gmail.com"
          isMarried={true}
          children={["Jennie", "Jessica"]}
        />
        <Person
          name="Jack"
          age={29}
          email="jack@gmail.com"
          isMarried={true}
          children={["Jennie"]}
        />
      </div>
    </>
  );
}

export default PropsTypeClass;
