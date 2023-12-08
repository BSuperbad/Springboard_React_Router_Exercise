import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <div>
            <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81WXw8K5yrL._SY879_.jpg"
            alt="Some chips!"
            />
            <button><Link to="/">Go Back</Link></button>
        </div>
    )
};

export default Chips;