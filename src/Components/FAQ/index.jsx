import React, {useState} from "react";
import "./index.css";

const Accordian = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="accordion-wrapper">
            <article className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <h1>{title}</h1>
            </article>
            <article className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                    {children}
                </div>
            </article>
        </div>
    )
}

const FAQ = () => {
    return (
        <>
            <div id="faq-container">
                <article className="service-accordion-wrapper">
                    <Accordian title="What do I need to bring?">
                        <h3> Please bring your own headphones and USB. 
                            Please ensure that your USB has been analyzed with rekordbox before coming to the studio. 
                        </h3>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="What equipment do you have?">
                        <h3> We have two CDJ 2000 Nexus's and DJM 900 mixer's.</h3>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="How many people can attend my session">
                        <h3> You can have up to 5 people attending your session. </h3>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Where are you located?">
                        <h3> We are located at 201 Weston Avenue, Unit G2. 
                            Your temporary passcode will enable you to enter the space when you get to the door. 
                        </h3>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Do you have parking?">
                        <h3>
                        You are not permitted to park in 201 Weston Avenue’s parking lot, but you can park behind the studio at XYZ Storage or at the neighbouring Stockyard Mall. 
                        </h3>
                    </Accordian>
                </article>
            </div>
        </>
    )
}

export default FAQ;