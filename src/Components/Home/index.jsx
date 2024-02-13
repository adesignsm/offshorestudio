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
  const [isDurationDropdownOpen, setIsDurationDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  const sliderArray = [
    SLIDER_IMAGE_4,
    SLIDER_IMAGE_5,
    SLIDER_IMAGE_6,
  ]

  const toggleDurationDropdown = () => {
    setIsDurationDropdownOpen(!isDurationDropdownOpen);
  };

  const handleDurationSelect = (e) => {
    const selectedDuration = e.target.getAttribute('data-duration');
    setSelectedDuration(selectedDuration);
    setIsDurationDropdownOpen(false);
  }

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const handleLocationSelect = (e) => {
    const selectedLocation = e.target.getAttribute('data-location');
    setSelectedLocation(selectedLocation);
    setIsLocationDropdownOpen(false);
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
                  {/* {" "} */}
                  {/* <span>15</span> Slots Available{" "} */}
                </h3>
                <div className="session-selection">
                  <div className="session-location-container">
                    <div className="session-location-dropdown">
                      <button onClick={toggleLocationDropdown}> 
                        {selectedLocation === '' ? 'LOCATION' : selectedLocation}
                      </button>
                      <nav className={`drop-down-content ${isLocationDropdownOpen ? "show" : ""}`}>
                        <a data-location="montreal" onClick={handleLocationSelect}> Montreal </a>
                        <a data-location="paris" onClick={handleLocationSelect}> Paris </a>
                      </nav>
                    </div>
                  </div>
                  <div className="session-duration-container">
                    <div className="session-duration-dropdown">
                      <button onClick={toggleDurationDropdown}>
                        {selectedDuration === '' ? 'DURATION' : selectedDuration} 
                      </button>
                      <nav className={`drop-down-content ${isDurationDropdownOpen ? "show" : ""}`}>
                        <a data-duration="1-hour" onClick={handleDurationSelect}> 1 hour </a>
                        <a data-duration="2-hours" onClick={handleDurationSelect}> 2 hours </a>
                        <a data-duration="3-hours" onClick={handleDurationSelect}> 3 hours </a>
                      </nav>
                    </div>
                  </div>
                  <button type="submit">
                    <a 
                      href={`/booking/${selectedLocation}/${selectedDuration}`}
                      style={{pointerEvents: `${selectedDuration === '' && selectedLocation === '' ? (
                        'none'
                      ) : (
                        'all'
                      )}`}}
                    >
                      {selectedDuration === '' || selectedLocation === '' ? 'select a time and location' : 'SUBMIT'}
                    </a>
                  </button>
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
