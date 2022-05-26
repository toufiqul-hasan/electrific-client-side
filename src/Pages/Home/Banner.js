import React from "react";
import slider1 from "../../Assets/Images/slider1.jpg";
import slider2 from "../../Assets/Images/slider2.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img className="w-full" src={slider1} alt="slide" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide2" className="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img className="w-full" src={slider2} alt="slide" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-ghost">
            ❮
          </a>
          <a href="#slide1" className="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;