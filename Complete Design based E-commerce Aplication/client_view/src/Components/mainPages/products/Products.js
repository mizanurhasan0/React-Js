import axios from "axios";
import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import { ProductItem } from "../utilits/productItem/ProductItem";

export const Products = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [products] = state.productsApi.products;
  const [callback, setCallback] = state.productsApi.callback;

  const deleteProduct = (id, public_id) => {
    try {
      axios.post(
        "/images/delete",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      axios.delete(`/products/${id}`, {
        headers: { Authorization: token },
      });

      setCallback(!callback);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <ProductItem
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
};
