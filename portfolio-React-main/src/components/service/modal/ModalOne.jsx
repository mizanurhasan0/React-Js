import React from "react";
import Slider from "react-slick";

const ModalOne = () => {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 500,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="popup_informations">
      <div className="my_carousel gallery_zoom">
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
          {/* End li */}
        </Slider>
      </ul>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>
          <a
            href="https://www.sohosro.com/"
            className="sohosro_Hlink"
            target="_blank"
          >
            Sohosro
          </a>
        </h3>
        <p>
          Just because we can't get out and about like we normally would,
          doesn’t mean we have to taking pictures. There’s still plenty you can
          do, provided you're prepared to use some imagination. Here are a few
          ideas to keep you shooting until normal life resumes.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
        <h3>What Is Branding?</h3>
        <p>
          Nullam blandit constituto eam ne, te nam ignota vituper.atoribus.
          Malis cetero quem saipe, prou thendrerit voluptaria.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Email is a crucial channel in any marketing.</p>
            </li>
            <li>
              <p>Curious what to say? How to say it?</p>
            </li>
            <li>
              <p>Whether you’re kicking off a new ca mpaign.</p>
            </li>
            <li>
              <p>Habitasse per feugiat aliquam luctus accumsan curae</p>
            </li>
          </ul>
        </div>
        {/* End list */}
        <p>
          Streets empty that are usually busy are remarkable and can evoke the
          sense of historical pictures from before the invention of the
          motorcar. Other things that are different at the moment will be queues
          to get into stores and the lines marked out on the floor to show how
          far apart we should be.
        </p>
      </div>
    </div>
  );
};

export default ModalOne;
