import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import Home from "../pages/Home/Home";
import "./App.css";
import About from "../pages/About/About";
import NIC from "../pages/NIC/NIC";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <About /> */}
      <NIC />
    </BrowserRouter>
  );
}

export default App;
