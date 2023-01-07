import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarouselWork extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };

    const settings2 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
    };

    const settings3 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
    };
    return (
      <>
        {/* carousel till mid screen (md)  */}
        <div className="my-20 px-[10%] sm:px-[15%] md:hidden">
          <h2 className="text-center text-xl text-gray-500 py-5 sm:py-10">
            OUR WORK
          </h2>
          <Slider {...settings} className="text-center">
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img src="./pictures/carousel-work1.webp" alt="" />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur est repellendus quas?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img src="./pictures/carousel-work2.webp" alt="" />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur est repellendus quas?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img src="./pictures/carousel-work1.webp" alt="" />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur est repellendus quas?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img src="./pictures/carousel-work2.webp" alt="" />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur est repellendus quas?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img src="./pictures/carousel-work1.webp" alt="" />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur est repellendus quas?
              </p>
            </div>
          </Slider>
        </div>
        {/* carousel till lg screen  */}
        <div className="md:my-14 px-[10%] sm:px-[15%] md:px-[10%] hidden md:block lg:hidden ">
          <h2 className="text-center text-xl text-gray-500 md:py-10">
            OUR WORK
          </h2>
          <Slider {...settings2} className="text-center">
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work1.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus sed te
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work2.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dicta ut dolor?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work1.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dicta ut dolor?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work2.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dicta ut dolor?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work1.webp"
                className="md:mx-5 md:w-[96%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                dicta ut dolor?
              </p>
            </div>
          </Slider>
        </div>
        {/* carousel till lg screen  */}
        <div className="lg:my-14 px-[10%] sm:px-[15%] md:px-[10%] hidden lg:block lg:px-[2%] xl:px-[10%] 2xl:px-[15%]">
          <h2 className="text-center text-xl text-gray-500 lg:py-10 xl:text-2xl">
            OUR WORK
          </h2>
          <Slider {...settings3} className="text-center">
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work1.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur exercitationem nesciunt natus?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work2.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                alias molestias eveniet?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work1.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                alias molestias eveniet?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work2.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                alias molestias eveniet?
              </p>
            </div>
            <div>
              <h1 className="py-5 text-xl text-gray-600">Heading</h1>
              <img
                src="./pictures/carousel-work1.webp"
                className="md:mx-5 lg:w-[95%]"
                alt=""
              />
              <p className="bg-[#FAFAFA] mx-[5%] py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                alias molestias eveniet?
              </p>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
