import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Footer from "../../Components/Footer";
import "./index.css";

const Booking = () => {
    const { pathname } = window.location;
    const sessionDurationType = pathname.split('/').pop();
    const [bookingUrl, setBookingUrl] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

    const _pageSettings = {
        backgroundColor: '#000',
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        hideGdprBanner: true,
        hideCustomBranding: true,
        hideSecondaryHeader: true,
        primaryColor: '#ea040e',
        textColor: '#fff',
        borderColor: "#000",
        fontSize: "6em",
    };

    const _styles = {
        height: "100vh",
        width: "100vw",
        border: "none",
    };

    useEffect(() => {
        if (sessionDurationType === "1-hour") {
            setBookingUrl("https://calendly.com/offshore-booking/osdjbs");
        } else if (sessionDurationType === "2-hour") {
            setBookingUrl("https://calendly.com/offshore-booking/2hr-dj-practice-session");
        } else if (sessionDurationType === "3-hour") {
            setBookingUrl("https://calendly.com/offshore-booking/2-hr-dj-practice-session-clone");
        }
    }, [sessionDurationType])

    return (
        <>
            <div className="booking-page-container">
                <div id="booking-container">
                    <InlineWidget url={bookingUrl} pageSettings={_pageSettings} styles={_styles} />
                </div>
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
            </div>
            <div className="booking-footer">
                <Footer />
            </div>
        </>
    )
}

export default Booking;