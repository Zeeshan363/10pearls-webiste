import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class CarouselHomePage extends Component {
  render() {
    return (
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        stopOnHover={true}
      >
        <div className=" border border-black">
          <img
            className="relative lg:h-[570px] xl:h-[700px]"
            src="./pictures/carousel-pic1.webp"
          />
          <div className="absolute top-[40%]">
            <h1 className="">Reimagine With Purpose</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, harum iste.
            </p>
            <button>Let's Build Something</button>
          </div>
        </div>
        <div className=" border border-black">
          <img
            className="relative lg:h-[570px] xl:h-[700px]"
            src="./pictures/carousel-pic2.webp"
          />
          <div className="absolute top-[40%]">
            <p className="">Reimagine With Purpose</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, harum iste.
            </p>
            <button>Let's Build Something</button>
          </div>
        </div>
      </Carousel>
    );
  }
}
