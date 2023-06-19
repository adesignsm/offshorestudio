import React, { useState, useEffect } from "react";
import Slider, { SliderItem } from "../Slider";

import "./index.css";

import Footer from "../Footer";

/*Slider images*/
import SLIDER_IMAGE_1 from "../../Assets/Media/Home/slider1.png";

/*Icons*/
import STAR from "../../Assets/Media/Icons/star.svg";
import CALENDAR from "../../Assets/Media/Icons/calendar.svg";

const Home = () => {
  return (
    <>
      <main id="main-page">
        <div id="left" className="column">
          <section className="subtext-container">
              <p>
                Automated DJ booking studio based in Toronto, Ontario. Lorem
                ipsum text to fill up space.
              </p>
            </section>
          <section className="main-content">
            <section className="events-container">
              <h3> Upcoming events </h3>
              <h1>
                A random event name, <span>August 30th at 1:00pm</span>
              </h1>
            </section>

            <section className="booking-container">
              <h3> Book a session </h3>
              <div className="content">
                <h1>
                  {" "}
                  <span>15</span> Slots Available{" "}
                </h1>
                <div className="calendar-circle">
                  <img src={CALENDAR} />
                </div>
              </div>
            </section>
            <section className="about-container">
              <div className="calendar-circle">
                <img src={STAR} />
              </div>
              <p>
                Offshorestudio is an automated DJ booking platform. Made by
                creatives for creatives. We understand the hardships of finding
                an environment where creatives are able to excel in their
                mediums.
              </p>

              <p>
                Here at Offshorestudio we strive to offer a friendly environment
                for DJ's of all types.
              </p>
            </section>
          </section>
          <Footer />
        </div>
        <div id="right" className="column">
          <Slider>
            <SliderItem>
              {" "}
              <img className="slider-image" src={SLIDER_IMAGE_1} />{" "}
            </SliderItem>
            <SliderItem>
              {" "}
              <img className="slider-image" src={SLIDER_IMAGE_1} />{" "}
            </SliderItem>
            <SliderItem>
              {" "}
              <img className="slider-image" src={SLIDER_IMAGE_1} />{" "}
            </SliderItem>
          </Slider>
        </div>
      </main>
    </>
  );
};

export default Home;
