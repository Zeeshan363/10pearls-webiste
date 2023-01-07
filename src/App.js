import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CarouselHomePage from "./components/CarouselHomePage";
import Partners from "./components/Partners";
import CarouselDevelopers from "./components/CarouselDevelopers";
import Motto from "./components/Motto";
import Footer from "./components/Footer";
import MyCarousel from "./components/MyCarousel";

function App() {
  return (
    <>
      <Navbar />
      <CarouselHomePage />
      <Partners />
      {/* <CarouselDevelopers /> */}
      <Motto />
      <Footer />
      {/* <MyCarousel /> */}
    </>
  );
}

export default App;
