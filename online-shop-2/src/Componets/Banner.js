import React from "react";
import insideImage from "../Gallary/insidehome.jpg";

export const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-28"
      style={{
        backgroundImage: `url(${insideImage})`,
      }}
    >
      <div className="container">
        <h1 className="text-6xl text-gray-800 capitalize font-medium mb-4">
          best collection for <br /> home decoration
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button
          className="bg-primary mt-6 px-8 py-3 rounded-md 
        text-white hover:bg-transparent hover:text-black border 
         border-primary transition duration-500 "
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};
