import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#63666A",
//         color: "orange",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "#63666A",
//         color: "orange",
//       }}
//       onClick={onClick}
//     />
//   );
// }

export default class MultiCarouselDeveloper extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      //   nextArrow: <SampleNextArrow />,
      //   prevArrow: <SamplePrevArrow />,
    };

    const settings2 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      //   nextArrow: <SampleNextArrow />,
      //   prevArrow: <SamplePrevArrow />,
    };

    const settings3 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      //   nextArrow: <SampleNextArrow />,
      //   prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        {/* carousel till mid screen (md)  */}
        <div className="my-20 px-[10%] sm:px-[15%] md:hidden">
          <h2 className="text-center text-xl text-gray-500 py-5 sm:py-10">
            We help businesses disrupt, accelerate & scale
          </h2>
          <Slider {...settings} className="text-center">
            <div>
              <img src="./pictures/developer1.webp" alt="" />
            </div>
            <div>
              <img src="./pictures/developer2.png" alt="" />
            </div>
            <div>
              <img src="./pictures/developer1.webp" alt="" />
            </div>
            <div>
              <img src="./pictures/developer2.png" alt="" />
            </div>
            <div>
              <img src="./pictures/developer1.webp" alt="" />
            </div>
          </Slider>
        </div>
        {/* carousel till lg screen  */}
        <div className="md:my-14 px-[10%] sm:px-[15%] md:px-[10%] hidden md:block lg:hidden ">
          <h2 className="text-center text-xl text-gray-500 md:py-10">
            We help businesses disrupt, accelerate & scale
          </h2>
          <Slider {...settings2} className="text-center">
            <div>
              <img
                src="./pictures/developer1.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer2.png"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer1.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer2.png"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer1.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
            </div>
          </Slider>
        </div>
        {/* carousel till lg screen  */}
        <div className="lg:my-14 px-[10%] sm:px-[15%] md:px-[10%] hidden lg:block lg:px-[2%] xl:px-[10%] 2xl:px-[15%]">
          <h2 className="text-center text-xl text-gray-500 lg:py-10 xl:text-2xl">
            We help businesses disrupt, accelerate & scale
          </h2>
          <Slider {...settings3} className="text-center">
            <div>
              <img
                src="./pictures/developer1.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer2.png"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer1.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer2.png"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
            </div>
            <div>
              <img
                src="./pictures/developer1.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
