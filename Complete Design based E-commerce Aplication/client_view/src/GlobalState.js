import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ProductApi } from "./api/ProductApi";
import { UserApi } from "./api/UserApi";
import { CategoriesApi } from "./api/CategoriesApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const refreshToken = async () => {
        const res = await axios.get("/user/refreshtoken");
        setToken(res.data.accessToken);
        console.log(res.data);
      };
      refreshToken();
    }
  }, []);
  const state = {
    token: [token, setToken],
    productsApi: ProductApi(),
    UserApi: UserApi(token),
    CategoriesApi: CategoriesApi(),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
