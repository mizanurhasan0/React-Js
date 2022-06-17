import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Quotes() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  const quotesContent = [
    {
      img: "Hasib",
      desc: `Life is a journey, not a destination. Life is what happens when you're busy making other plans. Just follow your brain.`,
      name: "Md. Masud Rana Hasib",
      designation: "Software Engineer",
      delayAnimation: "",
    },
    {
      img: "anik",
      desc: `If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
      name: "Golam Rabbe Anik",
      designation: "Photographer",
      delayAnimation: "100",
    },
    {
      img: "elon",
      desc: `When something is important enough, you do it even if the odds are not in your favor. Life is too short for long-term grudges.`,
      name: "Elon Musk",
      designation: "SpaceX CEO",
      delayAnimation: "200",
    },
  ];

  return (
    <Slider {...settings}>
      {quotesContent.map((val, i) => (
        <li
          key={i}
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={val.delayAnimation}
        >
          <div className="list_inner">
            <div className="details">
              <div className="author">
                <div className="image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        `img/testimonials/${val.img}.jpg`
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}

                <div className="short">
                  <h3>{val.name}</h3>
                  <span>{val.designation}</span>
                </div>
                {/* End short description */}
              </div>
              {/* End author */}

              <div className="icon">
                <img className="svg" src="img/svg/quote.svg" alt="quote" />
              </div>
              {/* End right quote icon */}
            </div>

            <div className="text">
              <p>{val.desc}</p>
            </div>
            {/* End description */}
          </div>
        </li>
      ))}
    </Slider>
  );
}
