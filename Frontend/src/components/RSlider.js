import React from "react";
import Slider from "react-slick";
import { certificatesArray } from "./data";
const RSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    initialSlide:0,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ],
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "white",
          borderRadius: "50%",
          border: "1px solid #007BFF",
        }}
      ></div>
    ),
    
  };
  return (
    <>
      <h2 className="text-center">Certifications</h2>
      <Slider {...settings}>
        {certificatesArray.map((certificate) => {
          return (
            <div className="certificates">
              <img src={certificate.img} />
              <h6 className="text-center">{certificate.name}</h6>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default RSlider;
