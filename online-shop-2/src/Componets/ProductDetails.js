import React from "react";
import {
  faArrowRight,
  faHome,
  faShoppingBag,
  faStar,
  faHeart,
  faEnvelope,
  faBridge,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import guyerChair from "../Gallary/guyerchair.jpg";
import guyerChair2 from "../Gallary/doubleguyer.jpg";
import guyerChair3 from "../Gallary/guyerchair2.jpg";
import guyerChair4 from "../Gallary/chair4.jpg";

export const ProductDetails = () => {
  return (
    <div className="container py-14">
      {" "}
      <div className="flex items-center gap-3">
        <a href="#!">
          <FontAwesomeIcon icon={faHome} className="text-primary" />
        </a>
        <span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
        </span>
        <p className="text-gray-500">Product View</p>
      </div>
      {/*  */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <img src={guyerChair} alt="" />
          <div className="grid grid-cols-5 gap-2 ">
            <img
              src={guyerChair}
              alt=""
              className="w-full shadow border border-primary"
            />
            <img src={guyerChair4} alt="" className="w-full shadow" />
            <img src={guyerChair2} alt="" className="w-full shadow" />
            <img src={guyerChair3} alt="" className="w-full shadow" />
            <img src={guyerChair4} alt="" className="w-full shadow" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            Italien L shape sofa
          </h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-sm"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400 text-sm"
              />
            </div>
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Avilability:</span>
              <span className="text-green-500">in Stock</span>
            </p>

            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Brand:</span>
              <span className="text-gray-500">Apex</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Category:</span>
              <span className="text-gray-500">Sofa</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Sku:</span>
              <span className="text-gray-500">BE45VGT</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-bold text-primary">$45.00</span>
              <span className="text-gray-400 line-through text-sm">$55.00</span>
            </p>
          </div>
          <p className="pt-5">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document{" "}
          </p>
          {/*  */}
          <div className="pt-4">
            <h3 className="font-sm uppercase  text-gray-800">Size</h3>
            <div className="flex uppercase space-x-2">
              <div className="size-selector">
                <input
                  type="radio"
                  name="size"
                  className="hidden"
                  id="d-size-xs"
                />
                <label
                  for="d-size-xs"
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
                  id="d-size-s"
                />
                <label
                  for="d-size-s"
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
                  id="d-size-md"
                />
                <label
                  for="d-size-md"
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
                  id="d-size-lg"
                />
                <label
                  for="d-size-lg"
                  className="text-xs border border-gray-200
                     rounded-sm h-6 w-6 flex items-center justify-center 
                     cursor-pointer shadow text-gray-600"
                >
                  lg
                </label>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="pt-4">
            <h3 className="font-sm uppercase  text-gray-800">Color</h3>
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
          {/*
           */}
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div
              className="flex border border-gray-300 text-gray-600 divide-x-2 divide-gray-300
           w-max "
            >
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer ">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center ">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer ">
                +
              </div>
            </div>
          </div>
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a
              href="#!"
              className="bg-primary border border-primary text-white px-8 
              py-2 font-medium rounded uppercase flex items-center gap-2 
              hover:bg-transparent hover:text-black"
            >
              <FontAwesomeIcon icon={faShoppingBag} /> Add to cart
            </a>
            <a
              href="#!"
              className=" border border-gray-300 text-gray-800 px-8 
              py-2 font-medium rounded uppercase flex items-center gap-2 
              hover:bg-transparent hover:text-primary"
            >
              <FontAwesomeIcon icon={faHeart} /> Wish list
            </a>
          </div>
          {/*  */}
          <div className="flex gap-3 mt-4">
            <a
              href="#!"
              className="border rounded-full border-gray-400 hover:text-gray-500
               h-8 w-8 flex items-center justify-center text-gray-400"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="#!"
              className="border rounded-full border-gray-400 hover:text-gray-500
               h-8 w-8 flex items-center justify-center text-gray-400"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="#!"
              className="border rounded-full border-gray-400 hover:text-gray-500
               h-8 w-8 flex items-center justify-center text-gray-400"
            >
              <FontAwesomeIcon icon={faBridge} />
            </a>
          </div>
        </div>
      </div>
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 text-gray-800 font-medium">
          Product Details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Color
              </th>
              <td className="py-2 px-4 border border-gray-300  ">
                Black,Brown,red
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <td className="py-2 px-4 border border-gray-300  ">
                Artifical Leadther
              </td>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <td className="py-2 px-4 border border-gray-300  ">55 Kg</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="pt-6">
        <h2 className="text-2xl uppercase font-medium text-gray-800 mb-6">
          Related Products
        </h2>

        <div className="grid grid-cols-4 gap-6 pb-16">
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
                  <span className="text-primary text-md font-medium">
                    $45.00
                  </span>
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
                  <span className="text-primary text-md font-medium">
                    $45.00
                  </span>
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
                  <span className="text-primary text-md font-medium">
                    $45.00
                  </span>
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
                  <span className="text-primary text-md font-medium">
                    $45.00
                  </span>
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
    </div>
  );
};
