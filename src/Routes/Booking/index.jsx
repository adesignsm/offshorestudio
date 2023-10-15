import { InlineWidget } from "react-calendly";
import "./index.css";

const Booking = () => {
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

    return (
        <>
            <div id="booking-container">
                <h1> Booking </h1>
                <InlineWidget url={"https://calendly.com/offshore-booking/osdjbs"} pageSettings={_pageSettings} styles={_styles} />
            </div>
        </>
    )
}

export default Booking;