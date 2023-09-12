import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./index.css";

const mailchimpUrl = process.env.REACT_APP_MAILCHIMP_URL;

const NewsLetter = () => {

    return (
        <>
            <div id="newsletter-form">
                <MailchimpSubscribe url={mailchimpUrl} />
            </div>
        </>
    )
}

export default NewsLetter;