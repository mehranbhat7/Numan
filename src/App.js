import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Movingtext from "./Components/Movingtext";
import Services from "./Components/Services";
import Currency from "./Components/Currency";

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <Movingtext />
      <Services />
      <Currency />
    </>
  );
}

export default App;
