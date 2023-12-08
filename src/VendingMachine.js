import React from "react";
import { Link } from "react-router-dom";



const VendingMachine = ()=> {
      return (
        <div>
          <h1>Hello I'm a vending machine. what would you like to eat?</h1>
          <nav className="NavBar">
            <Link to="/chips">
                chips
            </Link>
            <br></br>
            <Link to="/soda">
                Soda
            </Link>
            <br></br>
            <Link to="/bar">
                Protein Bar
            </Link>
        </nav>    
        </div>
      )

};

export default VendingMachine;