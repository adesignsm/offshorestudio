import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY;
const audienceId = process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID;

console.log(apiKey)

const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            `https://us9.api.mailchimp.com/3.0/lists/${audienceId}/members`,
            {
              email_address: email,
              status: 'subscribed',
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: `${apiKey}`,
              },
            }
          );
    
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <>
            <div>
                <h2>Subscribe to Our Newsletter</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default NewsLetter;