import React from "react";
import { faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Checkout = () => {
  return (
    <div className="container pt-16">
      <div className="flex items-center gap-3">
        <a href="#!">
          <FontAwesomeIcon icon={faHome} className="text-primary" />
        </a>
        <span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
        </span>
        <p className="text-gray-500">Product View</p>
      </div>
      <div className="grid grid-cols-12 pt-6 mb-16 gap-5 items-start">
        <div
          className="col-span-8 border 
        rounded p-4 border-gray-200"
        >
          <h3 className="text-lg font-medium capitalize mb-4">Checkout</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 mb-2 block">
                  First Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
                />
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Last Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Company Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Country/Region <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Street Address <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Town/City <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Zip Code <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                type="number"
                className="block w-full border border-gray-300 px-4 py-3 
              text-gray-600 placeholder-gray-400 focus:border-primary focus:ring-0"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 border border-gray-200 p-4 rounded ">
          <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
            Order summary
          </h4>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">Italiean Shape Sofa</h3>
              <p className="text-sm">Size:M</p>
            </div>
            <p className="text-gray-600">×3</p>
            <p className="font-semibold">$320</p>
          </div>

          <div
            className="flex justify-between border-b
           border-gray-200 text-gray-800 font-medium py-3 uppercase"
          >
            <p>Subtotal</p>
            <p>$320</p>
          </div>
          <div
            className="flex justify-between border-b
           border-gray-200 text-gray-800 font-medium py-3 uppercase"
          >
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div
            className="flex justify-between border-b
           border-gray-200 text-gray-800 font-medium py-3 uppercase"
          >
            <p>Total</p>
            <p>$320</p>
          </div>
          <div className="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              id="agreement"
              className="text-primary focus:ring-0 cursor-pointer w-3 h-3 mr-2"
            />
            <label for="agreement">
              Agree to our{" "}
              <a href="#!" className="text-primary">
                terms & conditions
              </a>{" "}
            </label>
          </div>
          <button
            className="bg-primary block w-full text-white mt-4 p-2 
          font-semibold uppercase
          rounded hover:bg-transparent border border-primary 
          hover:text-gray-500"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};
