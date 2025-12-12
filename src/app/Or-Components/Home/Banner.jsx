"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="w-full pt-20">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover={false}
        swipeable
      >
        <div>
          <img
            src="/banner/p1.png"
            alt="Banner 1"
            className="w-full h-[450px] object-cover"
          />
        </div>
        <div>
          <img
            src="/banner/tp1.PNG"
            alt="Banner 2"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="/banner/p3.webp"
            alt="Banner 3"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="/banner/p4.jpg"
            alt="Banner 4"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="/banner/p5.jpg"
            alt="Banner 5"
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <img
            src="/banner/p2.jpg"
            alt="Banner 6"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
