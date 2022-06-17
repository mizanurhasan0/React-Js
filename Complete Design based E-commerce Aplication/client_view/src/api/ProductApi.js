import axios from "axios";
import { useEffect, useState } from "react";

export const ProductApi = () => {
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get("/products");
      setProducts(res.data.products);
      console.log(res.data);
    };
    getProduct();
  }, [callback]);
  return {
    products: [products, setProducts],
    callback: [callback, setCallback],
  };
};
