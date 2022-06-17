import guyerChair from "../Gallary/guyerchair.jpg";
import guyerChair2 from "../Gallary/doubleguyer.jpg";
import guyerChair4 from "../Gallary/chair4.jpg";
import table from "../Gallary/table.jpg";
import chair from "../Gallary/chair2.jpg";
import React from "react";

export const Categories = () => {
  return (
    <div className="container py-16">
      <h2 className="uppercase font-medium text-3xl text-gray-800 mb-6">
        Shop by category
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="relative group rounded-sm overflow-hidden">
          <img src={chair} alt="" className="h-full w-full " />
          <a
            href="#!"
            className="absolute inset-0 bg-black bg-opacity-40 
            flex items-center justify-center text-xl text-white
            font-roboto font-medium group-hover:bg-opacity-50"
          >
            Chair
          </a>
        </div>
        {/*  */}
        <div className="relative group rounded-sm overflow-hidden">
          <img src={guyerChair} alt="" className="h-full w-full " />
          <a
            href="#!"
            className="absolute inset-0 bg-black bg-opacity-40 
            flex items-center justify-center text-xl text-white
            font-roboto font-medium group-hover:bg-opacity-50"
          >
            Sofa
          </a>
        </div>
        {/*  */}
        <div className="relative group rounded-sm overflow-hidden">
          <img src={guyerChair2} alt="" className="h-full w-full " />
          <a
            href="#!"
            className="absolute inset-0 bg-black bg-opacity-40 
            flex items-center justify-center text-xl text-white
            font-roboto font-medium group-hover:bg-opacity-50"
          >
            Guyer
          </a>
        </div>
        {/*  */}
        <div className="relative group rounded-sm overflow-hidden">
          <img src={guyerChair4} alt="" className="h-full w-full " />
          <a
            href="#!"
            className="absolute inset-0 bg-black bg-opacity-40 
            flex items-center justify-center text-xl text-white
            font-roboto font-medium group-hover:bg-opacity-50"
          >
            Bed
          </a>
        </div>
        {/*  */}
        <div className="relative group rounded-sm overflow-hidden">
          <img src={guyerChair2} alt="" className="h-full w-full " />
          <a
            href="#!"
            className="absolute inset-0 bg-black bg-opacity-40 
            flex items-center justify-center text-xl text-white
            font-roboto font-medium group-hover:bg-opacity-50"
          >
            Chair
          </a>
        </div>
        {/*  */}
        <div className="relative group rounded-sm overflow-hidden">
          <img src={table} alt="" className="h-full w-full " />
          <a
            href="#!"
            className="absolute inset-0 bg-black bg-opacity-40 
            flex items-center justify-center text-xl text-white
            font-roboto font-medium group-hover:bg-opacity-50"
          >
            Table
          </a>
        </div>
      </div>
    </div>
  );
};
