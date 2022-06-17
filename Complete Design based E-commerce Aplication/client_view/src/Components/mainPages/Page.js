import React, { useContext } from "react";
import { Products } from "./products/Products";
import { DetailsProduct } from "./detailsProduct/DetailsProduct";

import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { OrderHistory } from "./history/OrderHistory";
import { Orderdetails } from "./history/Orderdetails";
import { Cart } from "./cart/Cart";
import { NotFound } from "./utilits/not_found/NotFound";
import { Category } from "./category/Category";
import { CreateProduct } from "./createProduct/CreateProduct";

import { Route, Routes } from "react-router-dom";
import { GlobalState } from "../../GlobalState";

export const Page = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.UserApi.isLogged;
  const [isAdmin] = state.UserApi.isAdmin;

  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/detail/:id" element={<DetailsProduct />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/category" element={isAdmin ? <Category /> : <NotFound />} />
      <Route
        path="/create_product"
        element={isAdmin ? <CreateProduct /> : <NotFound />}
      />
      <Route
        path="/edit_product/:id"
        element={isAdmin ? <CreateProduct /> : <NotFound />}
      />

      <Route
        path="/history"
        element={isLogged ? <OrderHistory /> : <NotFound />}
      />
      <Route
        path="/history/:id"
        element={isLogged ? <Orderdetails /> : <NotFound />}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
