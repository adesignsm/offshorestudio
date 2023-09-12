import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const NewsLetter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            'https://us9.api.mailchimp.com/3.0/lists/59b40def54/members',
            {
              email_address: email,
              status: 'subscribed',
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Authorization: '4cb23385b90f619480c20604f6e35668-us9',
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