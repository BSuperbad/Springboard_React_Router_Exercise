import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41Cou-wtNLL._SX300_SY300_QL70_FMwebp_.jpg"
            alt="soda pop"
            />
            <button><Link to="/">Go Back</Link></button>
        </div>
    )
};

export default Soda;