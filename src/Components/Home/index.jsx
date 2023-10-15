import React, { useState, useEffect } from "react";
import Slider, { SliderItem } from "../Slider";
import { Link } from "react-router-dom";

import "./index.css";

import NewsLetter from "../NewsLetter";
import Footer from "../Footer";

/*Slider images*/
import SLIDER_IMAGE_4 from "../../Assets/Media/Slider/4.jpg";
import SLIDER_IMAGE_5 from "../../Assets/Media/Slider/5.jpg";
import SLIDER_IMAGE_6 from "../../Assets/Media/Slider/6.jpg";

/*Icons*/
import STAR from "../../Assets/Media/Icons/star.svg";
import CALENDAR from "../../Assets/Media/Icons/calendar.svg";
import FAQ from "../FAQ";

const Home = () => {
  const sliderArray = [
    SLIDER_IMAGE_4,
    SLIDER_IMAGE_5,
    SLIDER_IMAGE_6,
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
              <h1> Book a session </h1>
              <div className="content">
                <h3 className="booking-details">
                  {" "}
                  <span>15</span> Slots Available{" "}
                </h3>
                <div className="calendar-circle">
                  <Link to="/booking"><img src={CALENDAR} /></Link>
                </div>

                {/*COMING SOON BLUR TEMP */}
                {/* <div id="coming-soon-blur">
                  <h1> Coming Soon </h1>
                </div> */}
              </div>
            </section>
            <section className="events-container">
              <h1> Upcoming events </h1>
              <h3>
              Join mailing list to receive updates for upcoming DJ workshops.
                <br />
                <br />
                <span>Date to be decided</span>
              </h3>
              {/* <button> Register </button> */}
              <NewsLetter />
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
