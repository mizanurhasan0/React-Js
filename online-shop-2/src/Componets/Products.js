import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowRight,
  faTh,
  faList,
  faStar,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import guyerChair from "../Gallary/guyerchair.jpg";
import guyerChair2 from "../Gallary/doubleguyer.jpg";
import guyerChair3 from "../Gallary/guyerchair2.jpg";
import guyerChair4 from "../Gallary/chair4.jpg";

export const Products = () => {
  return (
    <div className="container py-4">
      <div className="flex items-center gap-3">
        <a href="#!">
          <FontAwesomeIcon icon={faHome} className="text-primary" />
        </a>
        <span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
        </span>
        <p className="text-gray-500">Shop</p>
      </div>
      {/*  */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="space-y-5 divide-y-5 divide-y divide-gray-200">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    for="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bedroom
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label for="cat-2" className="text-gray-500 capitalize">
                    Chair
                  </label>
                  <div className="ml-auto text-gray-500">(10)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label for="cat-2" className="text-gray-500 capitalize">
                    Veicals
                  </label>
                  <div className="ml-auto text-gray-500">(20)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label for="cat-2" className="text-gray-500 capitalize">
                    Electronics
                  </label>
                  <div className="ml-auto text-gray-500">(09)</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    for="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    LG
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label for="cat-2" className="text-gray-500 capitalize">
                    Samsung
                  </label>
                  <div className="ml-auto text-gray-500">(10)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label for="cat-2" className="text-gray-500 capitalize">
                    Walton
                  </label>
                  <div className="ml-auto text-gray-500">(20)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label for="cat-2" className="text-gray-500 capitalize">
                    Sony
                  </label>
                  <div className="ml-auto text-gray-500">(09)</div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="pt-4">
              <h3 className="uppercase text-xl text-gray-800 font-medium">
                Price
              </h3>
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  placeholder="min"
                  className="w-full focus:border-primary focus:ring-0  rounded text-gray-600 shadow-sm px-3 py-1"
                />
                <span className="mx-3">-</span>
                <input
                  type="text"
                  placeholder="max"
                  className="w-full focus:border-primary focus:ring-0  rounded text-gray-600 shadow-sm px-3 py-1"
                />
              </div>
            </div>
            <div className="pt-4">
              <h3 className="font-medium uppercase text-xl text-gray-800">
                Size
              </h3>
              <div className="flex uppercase space-x-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-xs"
                  />
                  <label
                    for="size-xs"
                    className="text-xs border border-gray-200
                     rounded-sm h-6 w-6 flex items-center justify-center 
                     cursor-pointer shadow text-gray-600"
                  >
                    xs
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-s"
                  />
                  <label
                    for="size-s"
                    className="text-xs border border-gray-200
                     rounded-sm h-6 w-6 flex items-center justify-center 
                     cursor-pointer shadow text-gray-600"
                  >
                    s
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-md"
                  />
                  <label
                    for="size-md"
                    className="text-xs border border-gray-200
                     rounded-sm h-6 w-6 flex items-center justify-center 
                     cursor-pointer shadow text-gray-600"
                  >
                    md
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    className="hidden"
                    id="size-lg"
                  />
                  <label
                    for="size-lg"
                    className="text-xs border border-gray-200
                     rounded-sm h-6 w-6 flex items-center justify-center 
                     cursor-pointer shadow text-gray-600"
                  >
                    lg
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium uppercase text-xl text-gray-800">
                Color
              </h3>
              <div className="flex space-x-3">
                <div className="color-selection">
                  <input
                    type="radio"
                    name="color"
                    id="color_red"
                    className="hidden"
                  />
                  <label
                    for="color_red"
                    style={{ backgroundColor: "#fc3d57" }}
                    className="block w-6 h-6 rounded border border-gray-200 shadow cursor-pointer"
                  ></label>
                </div>
                <div className="color-selection">
                  <input
                    type="radio"
                    name="color"
                    id="color_white"
                    className="hidden"
                  />
                  <label
                    for="color_white"
                    style={{ backgroundColor: "#fff" }}
                    className="block w-6 h-6 rounded border border-gray-200 shadow cursor-pointer"
                  ></label>
                </div>
                <div className="color-selection">
                  <input
                    type="radio"
                    name="color"
                    id="color_black"
                    className="hidden"
                  />
                  <label
                    for="color_black"
                    style={{ backgroundColor: "black" }}
                    className="block w-6 h-6 rounded border border-gray-200 shadow cursor-pointer"
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-3">
          <div className="flex ">
            <select
              className="w-40 text-sm text-gray-600 py-3 px-4  border-gray-300 shadow-sm 
            focus:ring-primary focus:border-primary"
            >
              <option>Default sorting </option>
              <option>Men </option>
              <option>Women </option>
              <option>Other </option>
            </select>
            <div className="flex gap-1 ml-auto">
              <div className="h-9 w-10 cursor-pointer flex justify-center items-center rounded bg-primary">
                <FontAwesomeIcon icon={faTh} className="text-xl  text-white" />
              </div>
              <div
                className="h-9 w-10 cursor-pointer flex justify-center
               items-center rounded bg-gray-200"
              >
                <FontAwesomeIcon
                  icon={faList}
                  className="text-xl  text-gray-800 "
                  s
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 items-start mt-4 gap-4">
            <div className="shadow group">
              <div className="relative">
                <img src={guyerChair} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
                items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
              "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={guyerChair2} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
                items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
              "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={guyerChair3} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
                items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
              "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={guyerChair2} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
                items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
              "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={guyerChair4} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
                items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
              "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};
