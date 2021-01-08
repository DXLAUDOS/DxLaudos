import React from "react";
import Slider from "react-slick";

import "./index.scss";

const Carousel = ({
  settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  },
  photos,
}) => {
  return (
    <div className={"Carousel"}>
      <Slider {...settings}>
        {photos &&
          photos.map((el, i) => {
            return (
              <div key={i} className={"Carousel__image"}>
                <img src={el} alt={`DxLaudos Portifolio ${i + 1}`} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
