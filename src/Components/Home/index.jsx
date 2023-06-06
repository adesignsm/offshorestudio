import React, { useState, useEffect } from "react";
import Slider, { SliderItem } from "../Slider";

import "./index.css";

import SLIDER_IMAGE_1 from "../../Assets/Media/Home/slider1.png";

const Home = () => {
    return (
        <>
            <main id="main-page">
                <div id="left" className="column">
                    <section className="main-content">
                        <section className="events-container">
                            <h3> Upcoming events </h3>
                            <h1> A random event name, August 30th at 1:00pm </h1>
                        </section>
                        <section className="booking-container">
                            <h3> Book a session </h3>
                            <h1> 15 Slots Available </h1>
                        </section>
                        <section className="about-container">
                            <p>
                                Offshorestudio is an automated DJ booking platform.
                                Made by creatives for creatives. We understand the 
                                hardships of finding an environment where creatives
                                are able to excel in their mediums.
                            </p>
                            <p>
                                Here at Offshorestudio we strive to offer a friendly environment
                                for DJ's of all types.
                            </p>
                        </section>
                    </section>
                </div>
                <div id="right" className="column">
                    <Slider>
                        <SliderItem> <img className="slider-image" src={SLIDER_IMAGE_1} /> </SliderItem>
                        <SliderItem> <img className="slider-image" src={SLIDER_IMAGE_1} /> </SliderItem>
                        <SliderItem> <img className="slider-image" src={SLIDER_IMAGE_1} /> </SliderItem>
                    </Slider>
                </div>
            </main>
        </>
    )
}

export default Home;