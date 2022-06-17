import "./Carousel.css";
import React, { useState } from "react";
import { images } from "./CarouselHelper";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="carouselApp">
      <div className="carousel">
        <div
          className="innerCarousel"
          style={{ backgroundImage: `url(${images[currentImg].img})` }}
        >
          <div
            className="left"
            onClick={() => {
              currentImg > 0 && setCurrentImg(currentImg - 1);
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: 30 }} />
          </div>
          <div className="center">
            <h1>{images[currentImg].title}</h1>
            <p>{images[currentImg].subtitle}</p>
          </div>
          <div
            className="right"
            onClick={() => {
              currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
            }}
          >
            <ArrowForwardIosIcon style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
