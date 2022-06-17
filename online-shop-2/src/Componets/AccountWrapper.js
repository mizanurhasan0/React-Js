import React from "react";
import avater from "../Gallary/avater.png";
import {
  faArrowRight,
  faHome,
  faContactBook,
  faShoppingBasket,
  faMoneyBill,
  faHeart,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AccountWrapper = () => {
  return (
    <div className="container py-4 ">
      <div className="flex items-center gap-3">
        <a href="#!">
          <FontAwesomeIcon icon={faHome} className="text-primary" />
        </a>
        <span>
          <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
        </span>
        <p className="text-gray-500">Product View</p>
      </div>
      <div
        className="grid grid-cols-12 
      items-start gap-6 pt-4 pb-16"
      >
        <div className="col-span-3">
          <div className="px-4 py-3 shadow flex gap-4 items-center">
            <div className="">
              <img
                src={avater}
                alt=""
                className="w-14 h-14 border border-gray-200 rounded-full p-1 object-cover"
              />
            </div>
            <div className="flex-grow">
              <p className="text-gray-600">Hello,</p>
              <h2 className="text-gray-800 font-medium">Mizanur Hasan</h2>
            </div>
          </div>

          <div
            className="mt-6 bg-white shadow rounded p-4 divide-y space-y-4 text-gray-600
          divide-gray-200 "
          >
            <div className="space-y-1 pl-8">
              <a
                href="#!"
                className="relative text-primary block font-medium capitalize"
              >
                <FontAwesomeIcon
                  icon={faContactBook}
                  className="absolute -left-8 top-1 text-base"
                />
                Manage Account
              </a>
              <a
                href="#!"
                className="text-gray-700 relative block trasnition capitalize hover:text-primary"
              >
                Profile information
              </a>
              <a
                href="#!"
                className="text-gray-700 relative block trasnition capitalize hover:text-primary"
              >
                Manage Address
              </a>
              <a
                href="#!"
                className="text-gray-700 relative block trasnition capitalize hover:text-primary"
              >
                Change Password
              </a>
            </div>
            {/*  */}
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#!"
                className="relative text-black block font-medium capitalize"
              >
                <FontAwesomeIcon
                  icon={faShoppingBasket}
                  className="absolute -left-8 top-1 text-base"
                />
                My Return
              </a>
              <a
                href="#!"
                className="text-gray-700 relative block trasnition capitalize hover:text-primary"
              >
                My Cancellation
              </a>
              <a
                href="#!"
                className="text-gray-700 relative block trasnition capitalize hover:text-primary"
              >
                My Reviews
              </a>
            </div>
            {/*  */}
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#!"
                className="relative text-black block font-medium capitalize"
              >
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="absolute -left-8 top-1 text-base"
                />
                Payment Methods
              </a>
              <a
                href="#!"
                className="text-gray-700 relative block trasnition capitalize hover:text-primary"
              >
                Voucher
              </a>
            </div>
            {/*  */}
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#!"
                className="relative text-black block font-medium capitalize"
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className="absolute -left-8 top-1 text-base"
                />
                My Wishlist
              </a>
            </div>
            {/*  */}
            <div className="space-y-1 pl-8 pt-4">
              <a
                href="#!"
                className="relative text-black block font-medium capitalize"
              >
                <FontAwesomeIcon
                  icon={faDoorOpen}
                  className="absolute -left-8 top-1 text-base"
                />
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-3 gap-4">
          <div className="shadow rounded  bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between">
              <h3 className="capitalize font-bold text-xl">Personal Profile</h3>
              <a href="#!" className="text-primary font-medium">
                Edit
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Mizanur hasan</h3>
              <h3>example@mail.com</h3>
              <span>(880)18186-74298 </span>
            </div>
          </div>
          {/*  */}
          <div className="shadow rounded  bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between">
              <h3 className="capitalize font-bold text-xl">Shipping Address</h3>
              <a href="#!" className="text-primary font-medium">
                Edit
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Mizanur hasan</h3>
              <h3>1216 Mirpur-2</h3>
              <span>(880)18186-74298 </span>
            </div>
          </div>
          {/*  */}
          <div className="shadow rounded  bg-white px-4 pt-6 pb-8">
            <div className="flex justify-between">
              <h3 className="capitalize font-bold text-xl">Billing Address</h3>
              <a href="#!" className="text-primary font-medium">
                Edit
              </a>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Mizanur hasan</h3>
              <h3>1216 Mirpur-2</h3>
              <span>(880)18186-74298 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
