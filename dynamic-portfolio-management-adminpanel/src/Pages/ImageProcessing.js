import React from "react";

export const ImageProcessing = () => {
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target[0].value);
  //   console.log(e.target.elements.name.value);
  //   console.log(e.target.name.value);
  //   // const data = new FormData();
  //   // console.log(data);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("username", event.target[0].value);
    data.append("email", event.target[1].value);
    console.log(data.get("email")); // reference by form input's `name` tag
    console.log(data.get("username"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="username" name="username" type="text" />
        <input id="email" name="email" type="email" />

        <button>Send data!</button>
      </form>
    </div>
  );
};
