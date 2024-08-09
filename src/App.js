import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Movingtext from "./Components/Movingtext";
import Services from "./Components/Services";
import Currency from "./Components/Currency";
import Bottomnav from "./Components/Bottomnav";

function App() {
  return (
    <>
      <div className="h-auto bg-gray-900">
        <Navbar />
        <Slider />
        <Movingtext />
        <Services />
        <Currency />
        <Bottomnav />
      </div>
    </>
  );
}

export default App;
