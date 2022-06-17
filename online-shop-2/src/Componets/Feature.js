import { faCar, faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Feature = () => {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-3 gap-6 justify-center mx-auto">
        <div
          className=" border border-primary
         flex items-center rounded-sm px-3 py-6 gap-5"
        >
          <FontAwesomeIcon icon={faCar} className="w-12 h-12 text-primary" />
          <div>
            <h4 className="font-medium capitalize text-lg">Free shopping</h4>
            <p className="text-gray-500 text-sm">order over $200</p>
          </div>
        </div>

        {/*  */}
        <div className="flex border border-primary rounded-sm px-3 items-center gap-5">
          <FontAwesomeIcon icon={faClock} className="text-primary w-12 h-12" />
          <div>
            <h4 className="capitalize text-lg font-medium">24/7 support</h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
        {/*  */}
        <div className="flex border border-primary rounded-sm px-3 items-center gap-5">
          <FontAwesomeIcon
            icon={faMoneyBill}
            className="text-primary w-12 h-12"
          />
          <div>
            <h4 className="capitalize text-lg font-medium">Money return</h4>
            <p className="text-gray-500 text-sm">30 days money return</p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
