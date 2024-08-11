import "./App.css";
// import Navbar from "./Components/Navbar";
// import Slider from "./Components/Slider";
// import Movingtext from "./Components/Movingtext";
// import Services from "./Components/Services";
// import Currency from "./Components/Currency";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bottomnav from "./Components/Bottomnav";
import Home from "./Components/Home/Home";
import Marketnav from "./Components/Market/Marketnav";

function App() {
  return (
    <>
      <Router>
        <div className="h-auto bg-gray-900">
          {/* <Navbar />
        <Slider />
        <Movingtext />
        <Services />
        <Currency /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="market" element={<Marketnav />} />
          </Routes>
          <Bottomnav />
        </div>
      </Router>
    </>
  );
}

export default App;
