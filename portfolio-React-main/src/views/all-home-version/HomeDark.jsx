import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import PhotoGallery from "../../components/photoGallery/PhotoGallery";
import Education from "../../components/education/Education";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import Map from "../../components/Map";
import AnimatedCursor from "react-animated-cursor";
import Quotes from "../../components/quotes/Quotes";

const HomeDark = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light edina_tm_mainpart">
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="221, 221, 221"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
      <About />
      {/* End Hero */}

      <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>What I Do</h3>
            <p>
              I'm Naim Siddiquee Sagor, working with the aim of bringing
              happiness and service to the door of every person in the country.
              My team and I are committed to ensuring the service of my country.
              We will be besides you In Sha Allah.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="edina_tm_portfolio" id="photo">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Photo Gallery</h3>
            <p>Here are some of my photos. You gonna love them.</p>
          </div>
          {/* End edian_tm_title */}
          <PhotoGallery />
        </div>
      </div>
      {/* End end Photo gallery */}

      <div className="edina_tm_testimonials" id="quotes">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Quotes</h3>
            <p>Some quotes from my beloved friends and a famous person.</p>
          </div>
          {/* End edian_tm_title */}
          <div className="list ">
            <ul>
              <Quotes />
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="edina_tm_news" id="education">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Education</h3>
            <p>
              Here you can see my education qualifications. See more to click on
              my slider image.
            </p>
          </div>
          {/* End edian_tm_title */}
          <Education />
        </div>
      </div>
      {/* End Blog */}

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default HomeDark;
