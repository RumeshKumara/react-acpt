import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Home from "../pages/Home/Home";
import "./App.css";
import About from "../pages/About/About";
import NIC from "../pages/NIC/NIC";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        {login ? (
          <Dashboard />
        ) : (
          <Routes>
            <Route path="*" element={<Navigate to={"/login"} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
