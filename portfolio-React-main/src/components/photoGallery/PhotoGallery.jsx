import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoGallery = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: true,
          draggable: true,
          speed: 500,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                <a>
                  <img
                    src="img/portfolio/sagor1.jpeg"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a>
                  <img
                    src="img/portfolio/sagor2.jpg"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a>
                  <img
                    src="img/portfolio/sagor3.jpg"
                    data-tip
                    data-for="facebook"
                    alt="portfolio"
                  />
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a>
                  <img
                    src="img/portfolio/sagor4.jpg"
                    data-tip
                    data-for="youtube"
                    alt="portfolio"
                  />
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a>
                  <img
                    src="img/portfolio/sagor5.jpeg"
                    data-tip
                    data-for="web"
                    alt="portfolio"
                  />
                </a>
              </div>
            </div>
          </li>
          {/* End li */}
        </Slider>
      </ul>
    </div>
  );
};

export default PhotoGallery;
