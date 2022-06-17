import React from "react";
import Reg from "./Components/Reg";
import Main from "./Components/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
export const Login = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reg" element={<Reg />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
