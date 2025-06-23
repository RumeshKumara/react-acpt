import React from "react";
import Navbar from "../../components/ui/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import NIC from "../NIC/NIC";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<NIC />} />
        {/* Remove login route since it's now handled at app level */}
        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default Dashboard;
