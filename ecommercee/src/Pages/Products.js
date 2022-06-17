import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Designs/product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../Helper/GlobalContext";
import { headers, serverApi } from "../TinnyHelper/TinyHelper";
import axios from "axios";
import { toast } from "react-toastify";

export const Products = () => {
  let navigation = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { globalVariable, setGlobalVariable, products, setProducts } =
    useContext(GlobalContext);

  const addToCart = (data) => {
    axios.post(serverApi + "cart", data, headers).then((res) => {
      if (res.data.error) {
        setGlobalVariable({ ...globalVariable, cart: globalVariable.cart + 1 });
        toast.success("Add Succesfully");
      } else {
        toast.error("Already Added");
      }
    });
  };
  return (
    <div className="container1">
      <div className="banner">
        <h3 className="baner-title">
          <span className="baner-title-text">Software Development</span>
        </h3>
      </div>
      {/* Body */}
      <div>
        <div className="product-body">
          <h3 className="body-title">Products</h3>
          {/* Search  Bar */}

          <div className="mb-4 container searchbar-container">
            <input
              type="search"
              required
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <label>Search</label>
          </div>

          {/* ENd Search Bar */}
          {/* 1s */}
          <div className="product-list container">
            {products
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((data, key) => {
                return (
                  <div className="card" key={key}>
                    <img
                      src={`${serverApi}images/${data.p_image}`}
                      className="card-img-top"
                      alt="default"
                      onClick={() => {
                        navigation(`/details/${data.id}`);
                      }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text postDesc">{data.description}</p>
                      <span className="text-muted text-decoration-line-through card-oldPrice">
                        {data.reg_price} TK
                      </span>

                      <button
                        onClick={() => {
                          addToCart({
                            UserId: data.UserId,
                            ProductId: data.id,
                            qty: 1,
                          });
                        }}
                        className="btn"
                      >
                        <span className="card-exactPrice">
                          {" "}
                          {data.dis_price}
                          {" TK"}
                        </span>

                        <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          {/* End Product List */}
        </div>
      </div>
    </div>
  );
};
