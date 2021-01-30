import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "../Modal";

import "./index.scss";

const Carousel = ({
  settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  photos,
}) => {
  const [ModalContent, setModalContent] = useState(null);
  const setModalImage = (el, i) => {
    setModalContent(
      <div className={"Modal__image"}>
        <img src={el} alt={`DxLaudos Portifolio ${i + 1}`} />
      </div>
    );
  };
  return (
    <>
      {ModalContent && (
        <Modal onClick={() => setModalContent(null)}>{ModalContent}</Modal>
      )}
      <div className={"Carousel"}>
        <Slider {...settings}>
          {photos &&
            photos.map((el, i) => {
              return (
                <div key={i} className={"Carousel__image"}>
                  <img
                    onClick={() => setModalImage(el, i)}
                    src={el}
                    alt={`DxLaudos Portifolio ${i + 1}`}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
