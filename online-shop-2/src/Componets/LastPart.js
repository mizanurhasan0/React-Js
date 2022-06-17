import {
  faHeart,
  faSearch,
  faStar,
  faMessage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import guyerChair from "../Gallary/guyerchair.jpg";
import guyerChair2 from "../Gallary/doubleguyer.jpg";
import banner from "../Gallary/banner.jpg";

export const LastPart = () => {
  return (
    <div className="container pt-16">
      <img src={banner} alt="" className=" w-full overflow-hidden mb-16" />
      <h2 className="text-2xl uppercase font-medium text-gray-800 mb-6">
        Recomended for you
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

      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
          <div className="col-span-1 space-y-8">
            <h3 className="font-medium texy-xl text-primary">SoftwareBD</h3>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faMessage} />
              </a>
              <a href="#!" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a href="#!" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faMessage} />
              </a>
              <a href="#!" className="text-gray-400 hover:text-gray-500">
                <FontAwesomeIcon icon={faMessage} />
              </a>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a href="#!" className="text-base text-gray-500 block">
                    Marketing
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Anaytics
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Commerce
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Insight
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a href="#!" className="text-base text-gray-500 block">
                    Pricing
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Documentation
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Price
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Guides
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a href="#!" className="text-base text-gray-500 block">
                    Marketing
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Anaytics
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Commerce
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Insight
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a href="#!" className="text-base text-gray-500 block">
                    Pricing
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Documentation
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Price
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Guides
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800">
        <div className="container flex items-center justify-center">
          <p className="text-white">SoftwareBd- All right reserved</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
