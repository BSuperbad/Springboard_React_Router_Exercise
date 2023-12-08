import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import VendingMachine from "./VendingMachine";
import Chips from "./Snacks/Chips";
import Soda from "./Snacks/Soda";
import ProteinBar from "./Snacks/ProteinBar";
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/bar" element={<ProteinBar/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
