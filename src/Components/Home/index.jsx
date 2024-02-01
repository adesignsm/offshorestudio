import React, { useState, useEffect } from "react";
import Slider, { SliderItem } from "../Slider";

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
  const [sessionDuration, setSessionDuration] = useState("1-hour");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sliderArray = [
    SLIDER_IMAGE_4,
    SLIDER_IMAGE_5,
    SLIDER_IMAGE_6,
  ]

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSessionDurationClick = (e) => {
    if (e.target.dataset.duration === "1-hour") {
      setSessionDuration("1-hour")
    } else if (e.target.dataset.duration === "2-hour") {
      setSessionDuration("2-hour");
    } else if (e.target.dataset.duration === "3-hour") {
      setSessionDuration("3-hour");
    }

    setIsDropdownOpen(false);
  }
  
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
              {/* <p>
                Offshore is a Toronto based DJ studio that strives to connect creativity, culture and community.
                We offer an autonomous practice experience for DJs of all levels to hone their craft and find their sound.
              </p> */}
              <p>Offshore is a DJ Studio that strives to connect creativity, culture and community. We offer an autonomous practice exxperience for DJs of all levels to hone their craft and find their sound.</p>
            </section>
            <section className="booking-container">
              <h1> Book a session </h1>
              <div className="content">
                <h3 className="booking-details">
                  {" "}
                  <span>15</span> Slots Available{" "}
                </h3>
                {/* <div className="calendar-circle">
                  <Link to="/booking"><img src={CALENDAR} /></Link>
                </div> */}
                <div className="session-duration-container">
                  <div className="session-duration-dropdown">
                    <button onClick={toggleDropdown}> SELECT A SESSION DURATION </button>
                    <nav className={`drop-down-content ${isDropdownOpen ? "show" : ""}`}>
                      <a data-duration="1-hour" href="/booking/1-hour"> 1 hour </a>
                      <a data-duration="2-hour" href="/booking/2-hour"> 2 hours </a>
                      <a data-duration="3-hour" href="/booking/3-hour"> 3 hours </a>
                    </nav>
                  </div>
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
