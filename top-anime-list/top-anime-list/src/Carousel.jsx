// src/ImageCarousel.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="w-full h-full relative">
      <div className="w-5/12 mx-auto py-10 relative">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <div className="relative">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  style={{ width: "800px", height: "400px" }} // Adjust the width and height here
                />

                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center">
                    <div className="text-white text-center">
                      {/* Display information here */}
                      <p>Image {index + 1} Description</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
