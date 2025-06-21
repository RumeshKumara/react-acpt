import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Home from "../pages/Home/Home";
import "./App.css";
import About from "../pages/About/About";
import NIC from "../pages/NIC/NIC";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nic" element={<NIC />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
