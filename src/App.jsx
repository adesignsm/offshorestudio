import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from "./Components/Header";
import Home from "./Components/Home";

import Booking from "./Routes/Booking";

import "./root.css";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;