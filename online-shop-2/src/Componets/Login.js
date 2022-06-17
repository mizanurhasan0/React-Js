import React from "react";

export const Login = () => {
  return (
    <div className="container py-16">
      <div className="max-w-xl mx-auto shadow px-6 py-7 rounded overflow-hidden">
        <h2 className="font-medium text-2xl uppercase">Login</h2>
        <p className="text-gray-600  mb-6 text-sm">
          Login if you are a returning customer
        </p>
        <form action="#!">
          <div>
            <label for="email" className="text-gray-600 mb-2 block ">
              Email address
            </label>
            <input
              type="email"
              className="focus:border-primary focus:ring-0 border
               border-gray-300 rounded block w-full placeholder-gray-400"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mt-4">
            <label for="email" className="text-gray-600 mb-2 block  ">
              Password
            </label>
            <input
              type="password"
              className="focus:border-primary focus:ring-0 border
               border-gray-300 rounded block w-full placeholder-gray-400"
              placeholder="type password"
            />
          </div>
          <div className="flex mt-4 items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 text-primary focus:ring-0 rounded"
              />
              <span>Remember Me</span>
            </div>
            <a href="#!" className="text-primary font-medium">
              Forgot Password?
            </a>
          </div>

          <button
            className="bg-primary block w-full text-white mt-4 p-2 
          font-semibold uppercase
          rounded hover:bg-transparent border border-primary 
          hover:text-gray-500"
          >
            Login
          </button>
        </form>
        <div className="mt-6 flex justify-center relative">
          <div className="uppercase z-10 relative bg-white">Or login with</div>
          <div className="w-full border-b-2 border-gray-700 absolute top-3"></div>
        </div>
        <div className="flex space-x-4 mt-4">
          <button className="text-white bg-blue-700 w-full p-2 rounded uppercase font-semibold">
            Facebook
          </button>
          <button className="text-white bg-yellow-600 w-full p-2 rounded uppercase font-semibold">
            Google
          </button>
        </div>
        <div className="text-center mt-4 ">
          <p className="font-semibold">
            Don't have an account?
            <a href="#!" className="text-primary ml-1">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
