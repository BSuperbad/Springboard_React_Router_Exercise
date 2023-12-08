import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=> {
    return (
        <nav className="NavBar">
            <Link to="/chips">
                chips
            </Link>
            ·
            <Link to="/soda">
                Soda
            </Link> 
            ·
            <Link to="/bar">
                Protein Bar
            </Link>
        </nav>
    )
};

export default NavBar;