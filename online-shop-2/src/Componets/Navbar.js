import {
  faBars,
  faBed,
  faChair,
  faCookie,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Navbar = () => {
  return (
    <div className="bg-gray-800 ">
      <div className="container flex">
        <div
          className=" relative px-8 py-4 flex items-center
         cursor-pointer text-white bg-primary
         group "
        >
          <FontAwesomeIcon icon={faBars} />
          <span className="ml-2 capitalize"> All category</span>

          <div
            className="absolute w-full left-0 top-full bg-gray-100 shadow-md py-3 
          text-gray-800 divide-y divide-gray-300 divide-dashed 
          opacity-0 group-hover:opacity-100 transition duration-500 
          invisible group-hover:visible
          "
          >
            <a
              href="#!"
              className="flex items-center py-3 px-6 hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon
                icon={faChair}
                className="text-primary h-5 w-5 object-contain"
              />
              <span className="ml-6">Sofa</span>
            </a>
            <a
              href="#!"
              className="flex items-center py-3 px-6 hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon
                icon={faBed}
                className="text-primary h-5 w-5 object-contain"
              />
              <span className="ml-6">Bedroom</span>
            </a>
            <a
              href="#!"
              className="flex items-center py-3 px-6 hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon
                icon={faDoorOpen}
                className="text-primary h-5 w-5 object-contain"
              />
              <span className="ml-6">Outdoor</span>
            </a>
            <a
              href="#!"
              className="flex items-center py-3 px-6 hover:bg-gray-200 transition"
            >
              <FontAwesomeIcon
                icon={faCookie}
                className="text-primary h-5 w-5 object-contain"
              />
              <span className="ml-6">Dining</span>
            </a>
          </div>
        </div>
        <div className="flex flex-grow items-center justify-between text-white pl-12">
          <div className="space-x-5">
            <a href="#!" className="text-gray-200 hover:text-white transition">
              Home
            </a>
            <a href="#!" className="text-gray-200 hover:text-white transition">
              Shop
            </a>
            <a href="#!" className="text-gray-200 hover:text-white transition">
              About Us
            </a>
            <a href="#!" className="text-gray-200 hover:text-white transition">
              Contact Us
            </a>
          </div>
          <a href="#!" className="text-gray-200 hover:text-white transition">
            Login/Register
          </a>
        </div>
      </div>
    </div>
  );
};
