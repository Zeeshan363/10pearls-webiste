import React from "react";
import Slider from "react-slick";

class MyCarousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <Slider {...settings}>
        <div>
          <img src="./pictures/motto.png" alt="Slide 1" />
        </div>
        <div>
          <img src="./pictures/motto.png" alt="Slide 2" />
        </div>
        <div>
          <img src="./pictures/motto.png" alt="Slide 3" />
        </div>
      </Slider>
    );
  }
}

export default MyCarousel;
