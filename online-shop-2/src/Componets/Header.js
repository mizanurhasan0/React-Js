import {
  faHeart,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Header = () => {
  return (
    <header className="shadow-md p-5 ">
      <div className="container flex justify-between items-center">
        <a href="#!" className="uppercase text-primary text-2xl font-bold">
          SoftwareBD
        </a>
        <div className="w-full max-w-xl relative flex">
          <span className="absolute top-3 text-gray-400 text-xl ml-4">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className="w-full border rounded-md border-r-0  pl-12 
            border-primary p-3 focus:outline-none"
            type="text"
            placeholder="Search ..."
          />
          <button
            className="bg-primary absolute 
          right-0 h-full w-32 text-white rounded-md rounded-l-none"
          >
            Search
          </button>
        </div>
        <div className="text-center flex space-x-4">
          <a href="#!" className="relative ">
            <span className="text-2xl hover:text-primary text-gray-500">
              <FontAwesomeIcon icon={faHeart} />
            </span>
            <div>Wish list</div>
            <span
              className="absolute w-5 h-5 bg-primary -top-1 rounded-full 
            flex justify-center right-0 items-center text-white text-xs"
            >
              8
            </span>
          </a>

          <a href="#!" className="relative ">
            <span className="text-2xl hover:text-primary text-gray-500">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            <div>Cart</div>
            <span
              className="absolute w-5 h-5 bg-primary -top-1 rounded-full 
            flex justify-center -right-3 items-center text-white text-xs"
            >
              8
            </span>
          </a>

          <a href="#!" className="relative ">
            <span className="text-2xl hover:text-primary text-gray-500">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <div>Account</div>
          </a>
        </div>
      </div>
    </header>
  );
};
