import { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import Footer from "../../Components/Footer";
import "./index.css";

const Booking = () => {
    const { pathname } = window.location;
    const pathnameParts = pathname.split('/');

    const [isDurationDropdownOpen, setIsDurationDropdownOpen] = useState(false);
    const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const [bookingUrl, setBookingUrl] = useState("");

    const bookingLinksArr = {
        montreal: [
            'https://calendly.com/offshore-booking/1-hr-breakglass',
            'https://calendly.com/offshore-booking/2-hr-breakglass',
            'https://calendly.com/offshore-booking/3-hr-breakglass',
        ],
        paris: [
            'https://calendly.com/bookings-offshore/offshore-the-base-house',
            'https://calendly.com/bookings-offshore/2hr-offshore-the-base-house-',
            'https://calendly.com/bookings-offshore/3hr-offshore-the-base-house-',
        ]
    }

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

    useEffect(() => {
        if (pathnameParts[2] === 'montreal' && pathnameParts[3] === '1-hour') {
            setBookingUrl(bookingLinksArr.montreal[0])
        } else if (pathnameParts[2] === 'montreal' && pathnameParts[3] === '2-hours') {
            setBookingUrl(bookingLinksArr.montreal[1])
        } else if (pathnameParts[2] === 'montreal' && pathnameParts[3] === '3-hours') {
            setBookingUrl(bookingLinksArr.montreal[2])
        } else if (pathnameParts[2] === 'paris' && pathnameParts[3] === '1-hour') {
            setBookingUrl(bookingLinksArr.paris[0])
        } else if (pathnameParts[2] === 'paris' && pathnameParts[3] === '2-hours') {
            setBookingUrl(bookingLinksArr.paris[1])
        } else if (pathnameParts[2] === 'paris' && pathnameParts[3] === '3-hours') {
            setBookingUrl(bookingLinksArr.paris[2])
        }
    })

    return (
        <>
            <div className="booking-page-container">
                <div id="booking-container">
                    <header className='filter'>
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
                    </header>
                    <InlineWidget url={bookingUrl} pageSettings={_pageSettings} styles={_styles} />
                </div>
            </div>
            <div className="booking-footer">
                <Footer />
            </div>
        </>
    )
}

export default Booking;