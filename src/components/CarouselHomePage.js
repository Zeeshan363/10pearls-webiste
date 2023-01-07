import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default class CarouselHomePage extends Component {
  render() {
    return (
      <>
        {/* mobile carousel */}
        <Carousel
          autoPlay={true}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          stopOnHover={true}
          className="block  md:hidden"
        >
          <div className="">
            <img
              className="sm:h-[500px]"
              src="./pictures/carousel-pic1-mobile.webp"
            />
          </div>
          <div className="">
            <img
              className="sm:h-[500px]"
              src="./pictures/carousel-pic2-mobile.webp"
            />
          </div>
        </Carousel>
        {/* carousel for laptop and large comps image + text */}
        <Carousel
          autoPlay={true}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          stopOnHover={true}
          className="hidden md:block"
        >
          <div className="">
            <img
              className="hidden md:block lg:h-[500px] xl:h-[600px]"
              src="./pictures/carousel-pic1.webp"
            />
            <div className="absolute top-[30%] right-[30%] py-5 mx-[20%] md:hidden lg:block text-start">
              <h1 className="text-2xl">Reimagine With Purpose</h1>
              <p className="text-xl py-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, harum iste.
              </p>
              <button className="text-lg py-2 px-10 my-5 border border-[#0045a6] hover:border-white hover:bg-[#0045a6] hover:text-white">
                Let's Build Something
              </button>
            </div>
          </div>
          <div className=" border border-black">
            <img
              className="hidden md:block lg:h-[500px] xl:h-[600px]"
              src="./pictures/carousel-pic2.webp"
            />
            <div className="absolute top-[30%] left-[30%] py-5 mx-[20%] md:hidden lg:block text-start">
              <h1 className="text-2xl">Reimagine With Purpose</h1>
              <p className="text-xl py-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, harum iste.
              </p>
              <button className="text-lg py-2 px-10 my-5 border border-[#0045a6] hover:border-white hover:bg-[#0045a6] hover:text-white">
                Let's Build Something
              </button>
            </div>
          </div>
        </Carousel>
        {/* text in mobile  */}
        <Carousel
          autoPlay={true}
          showThumbs={false}
          interval={2000}
          infiniteLoop={true}
          stopOnHover={true}
          className="block lg:hidden sm:px-[10%]"
        >
          <div className=" flex flex-col justify-center items-center py-5">
            <h1 className="text-xl">Reimagine With Purpose</h1>
            <p className="text-lg py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, harum iste.
            </p>
            <button className="text-sm py-2 px-10 my-5 border border-[#0045a6]">
              Let's Build Something
            </button>
          </div>

          <div className=" flex flex-col justify-center items-center py-5">
            <p className="text-xl">Reimagine With Purpose</p>
            <p className="text-lg py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, harum iste.
            </p>
            <button className="text-sm py-2 px-10 my-5 border border-[#0045a6] hover:border-white hover:bg-[#0045a6] hover:text-white">
              Let's Build Something
            </button>
          </div>
        </Carousel>
      </>
    );
  }
}
