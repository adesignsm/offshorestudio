import React, { useState, useEffect } from "react";
import Slider, { SliderItem } from "../Slider";

import "./index.css";

import Footer from "../Footer";

/*Slider images*/
import SLIDER_IMAGE_1 from "../../Assets/Media/Slider/1.jpg";
import SLIDER_IMAGE_2 from "../../Assets/Media/Slider/2.jpg";
import SLIDER_IMAGE_3 from "../../Assets/Media/Slider/3.jpg";
import SLIDER_IMAGE_4 from "../../Assets/Media/Slider/4.jpg";
import SLIDER_IMAGE_5 from "../../Assets/Media/Slider/5.jpg";
import SLIDER_IMAGE_6 from "../../Assets/Media/Slider/6.jpg";
import SLIDER_IMAGE_7 from "../../Assets/Media/Slider/7.jpg";

/*Icons*/
import STAR from "../../Assets/Media/Icons/star.svg";
import CALENDAR from "../../Assets/Media/Icons/calendar.svg";
import FAQ from "../FAQ";

const Home = () => {
  const sliderArray = [
    SLIDER_IMAGE_1,
    SLIDER_IMAGE_2,
    SLIDER_IMAGE_3,
    SLIDER_IMAGE_4,
    SLIDER_IMAGE_5,
    SLIDER_IMAGE_6,
    SLIDER_IMAGE_7
  ]
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
            <section className="about-container">
              <div className="about-star">
                <img src={STAR} />
              </div>
              <p>
                Offshore is a Toronto based DJ studio that strives to connect creativity, culture and community.
                We offer an autonomous practice experience for DJs of all levels to hone their craft and find their sound.
              </p>
            </section>
            <section className="booking-container">
              <h3> Book a session </h3>
              <div className="content">
                <h1 className="booking-details">
                  {" "}
                  <span>15</span> Slots Available{" "}
                </h1>
                <div className="calendar-circle">
                  <a href="//bookings.reservio.com/modal/offshorestudio/?backlink=http%3A%2F%2Flocalhost%3A3000%2F" target="_blank">
                    <img src={CALENDAR} />
                  </a>
                </div>

                {/*COMING SOON BLUR TEMP */}
                <div id="coming-soon-blur">
                  <h1> Coming Soon </h1>
                </div>
              </div>
            </section>
            <section className="events-container">
              <h3> Upcoming events </h3>
              <h1>
                Join mailing list for updates on practices hours and DJ workshops
                <br />
                <span>Date to be decided</span>
              </h1>
              <button> Register </button>
            </section>
            <section id="faq-section" className="faq-container">
              <FAQ />
            </section>
          </section>
          <Footer />
        </div>
        <div id="right" className="column">
          <Slider>
            {sliderArray.map((slide, index) => {
              return (
                <SliderItem>
                  <img key={index} className="slider-image" src={slide} />
                </SliderItem>
              )
            })}
          </Slider>
        </div>
      </main>
    </>
  );
};

export default Home;
