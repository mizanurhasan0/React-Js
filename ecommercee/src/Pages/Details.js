import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Designs/details.css";
import { serverApi } from "../TinnyHelper/TinyHelper";

export const Details = () => {
  const [toggleState, setToggleState] = useState(1);
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
  };
  useEffect(() => {
    axios.get(serverApi + `product/${id}`).then((res) => {
      setProduct(res.data);
    });
  });
  return (
    <div className="container details">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={serverApi + `images/${product.p_image}`}
                className="d-block w-100"
                alt="product"
              />
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 short-specification">
          <p className="newArrival text-center">New</p>
          <h2>{product.title}</h2>
          <p>Product Code : {product.code}</p>

          <p className="price">
            TK{" "}
            <span className="text-muted text-decoration-line-through card-oldPrice">
              {product.reg_price}
            </span>
            {" - "}
            {product.dis_price}
          </p>
          <p>
            <b>Availabililty</b> In Stock
          </p>
          <p>
            <b>Condition</b> New
          </p>
          <p>
            <b>Brand</b> {product.brand} Company
          </p>
          <label>Quantity</label>
          <input type="text" defaultValue={1} className="details-qty-field" />
          <button type="button" className="btn btn-default cartbtn">
            Add to card
          </button>
        </div>
      </div>
      {/* Speciment Description Description */}
      <div className="row ">
        <div className="col-md-12">
          <div className="block-tabs">
            <button
              onClick={() => toggleTab(1)}
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            >
              Details
            </button>
            <button
              onClick={() => toggleTab(2)}
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            >
              Specification
            </button>
            <button
              onClick={() => toggleTab(3)}
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            >
              Rating
            </button>
          </div>
          <div className="content-tabs">
            <div className={toggleState === 1 ? "active-content" : "content"}>
              <h2>Basic Info</h2>
              <hr />
              {/*  */}
              <p>{product.description}</p>
            </div>
            <div className={toggleState === 2 ? "active-content" : "content"}>
              <h2>Description</h2>
              <hr />
              <p>{product.specification}</p>
            </div>
            <div className={toggleState === 3 ? "active-content" : "content"}>
              <h2>Review</h2>
              <hr />
              <p>
                Get specific details about this product from customers who own
                it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
