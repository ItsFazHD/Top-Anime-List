// eslint-disable-next-line no-unused-vars
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
      <div className="w-full sm:w-11/12 p-6 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto py-10 relative ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <div className="relative">
                <div className="w-full h-96 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                    style={{
                      objectPosition: image.objectPosition || "center top",
                    }} // Apply object position per image
                  />
                </div>
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black opacity-75 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p>{image.description}</p>
                      <p className="m-4 text-xs">{image.descriptionText}</p>
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
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      objectPosition: PropTypes.string, // Add objectPosition propType
    })
  ).isRequired,
};

export default ImageCarousel;
