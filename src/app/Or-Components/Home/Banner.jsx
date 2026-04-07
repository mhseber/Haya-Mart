"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const images = [
    "/banner/Haya mart.png",
    "/banner/p8.webp",
    "/banner/p7.webp",
    "/banner/banner1.webp",
    "/banner/t-shirt2.png",
    "/banner/p5.png",
    "/banner/p2.2.png",
    "/banner/abayas2.png",
  ];

  return (
    <div className="w-full pt-38 px-4 md:px-8">
      <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={4000}
          transitionTime={800}
          stopOnHover={true}
          swipeable
          emulateTouch
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              marginLeft: 6,
              color: "#ccc",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "24px",
            };
            const style = isSelected
              ? { ...defStyle, color: "#000" }
              : { ...defStyle };
            return (
              <span
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                {isSelected ? "●" : "○"}
              </span>
            );
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] group"
            >
              <Image
                src={src}
                alt={`Premium Banner ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/5"></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
