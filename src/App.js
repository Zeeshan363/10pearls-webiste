import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CarouselHomePage from "./components/CarouselHomePage";
import Partners from "./components/Partners";
import CarouselDevelopers from "./components/CarouselDevelopers";
import Motto from "./components/Motto";
import Footer from "./components/Footer";
import MyCarousel from "./components/MyCarousel";
import MultiCarouselDeveloper from "./components/MultiCarouselDeveloper";
import CarouselWork from "./components/CarouselWork";

function App() {
  return (
    <>
      <Navbar />
      <CarouselHomePage />
      <Partners />
      <MultiCarouselDeveloper />
      <Motto />
      <CarouselWork />
      <Footer />
    </>
  );
}

export default App;
