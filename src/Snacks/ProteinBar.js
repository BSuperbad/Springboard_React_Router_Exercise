import React from "react";
import { Link } from "react-router-dom";

const ProteinBar = () => {
    return (
        <div>
            <img src="https://powercrunch.com/cdn/shop/products/pro-triple-chocolate-149200.png?v=1673546766&width=1400"
            alt="Power bar"
            />
            <button><Link to="/">Go Back</Link></button>
        </div>
    )
};

export default ProteinBar;