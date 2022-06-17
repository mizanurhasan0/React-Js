import { faHeart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import guyerChair from "../Gallary/guyerchair.jpg";
import guyerChair2 from "../Gallary/doubleguyer.jpg";

export const ProductWrapper = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl uppercase font-medium text-gray-800 mb-6">
        Top new Arrival
      </h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={guyerChair} alt="" />
            <div
              className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
            >
              <a href="#!">
                <FontAwesomeIcon icon={faSearch} className="text-primary" />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faHeart} className="text-primary" />
              </a>
            </div>
          </div>
          <div>
            <div className="pt-4 mx-3 ">
              <a href="#!" className="uppercase font-medium">
                Guyer chair
              </a>
              <div className="flex items-baseline gap-2">
                <span className="text-primary text-md font-medium">$45.00</span>
                <span className="text-gray-400 line-through text-xs">
                  $55.00
                </span>
              </div>
              <div className="flex pt-2 gap-2">
                <div className="text-yellow-400 gap-1 flex">
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                </div>
                <h4 className="text-gray-700 text-xs">(150)</h4>
              </div>
            </div>
            <a
              href="#!"
              className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={guyerChair2} alt="" />
            <div
              className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
            >
              <a href="#!">
                <FontAwesomeIcon icon={faSearch} className="text-primary" />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faHeart} className="text-primary" />
              </a>
            </div>
          </div>
          <div>
            <div className="pt-4 mx-3 ">
              <a href="#!" className="uppercase font-medium">
                Guyer chair
              </a>
              <div className="flex items-baseline gap-2">
                <span className="text-primary text-md font-medium">$45.00</span>
                <span className="text-gray-400 line-through text-xs">
                  $55.00
                </span>
              </div>
              <div className="flex pt-2 gap-2">
                <div className="text-yellow-400 gap-1 flex">
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                </div>
                <h4 className="text-gray-700 text-xs">(150)</h4>
              </div>
            </div>
            <a
              href="#!"
              className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={guyerChair} alt="" />
            <div
              className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
            >
              <a href="#!">
                <FontAwesomeIcon icon={faSearch} className="text-primary" />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faHeart} className="text-primary" />
              </a>
            </div>
          </div>
          <div>
            <div className="pt-4 mx-3 ">
              <a href="#!" className="uppercase font-medium">
                Guyer chair
              </a>
              <div className="flex items-baseline gap-2">
                <span className="text-primary text-md font-medium">$45.00</span>
                <span className="text-gray-400 line-through text-xs">
                  $55.00
                </span>
              </div>
              <div className="flex pt-2 gap-2">
                <div className="text-yellow-400 gap-1 flex">
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                </div>
                <h4 className="text-gray-700 text-xs">(150)</h4>
              </div>
            </div>
            <a
              href="#!"
              className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
            >
              Add to cart
            </a>
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden group">
          <div className="relative">
            <img src={guyerChair2} alt="" />
            <div
              className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
            >
              <a href="#!">
                <FontAwesomeIcon icon={faSearch} className="text-primary" />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faHeart} className="text-primary" />
              </a>
            </div>
          </div>
          <div>
            <div className="pt-4 mx-3 ">
              <a href="#!" className="uppercase font-medium">
                Guyer chair
              </a>
              <div className="flex items-baseline gap-2">
                <span className="text-primary text-md font-medium">$45.00</span>
                <span className="text-gray-400 line-through text-xs">
                  $55.00
                </span>
              </div>
              <div className="flex pt-2 gap-2 items-center">
                <div className="text-yellow-400 gap-1 flex">
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                  <FontAwesomeIcon icon={faStar} className="text-md" />
                </div>
                <h4 className="text-gray-500 text-xs">(150)</h4>
              </div>
            </div>
            <a
              href="#!"
              className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
