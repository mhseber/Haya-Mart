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
    <div className="w-full pt-24 px-4 sm:px-10 md:px-20 lg:px-32 xl:px-48">
      <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-100 bg-white">
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
              color: "#aaa",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "18px", // ইন্ডিকেটর সাইজ কিছুটা কমানো হয়েছে
            };
            const style = isSelected
              ? { ...defStyle, color: "#3b82f6" } // আপনার ব্লু থিমের সাথে মিল রেখে ব্লু কালার
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
              // হাইট কমানো হয়েছে (h- values updated)
              className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] group"
            >
              <Image
                src={src}
                alt={`Premium Banner ${index + 1}`}
                fill
                priority={index === 0}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
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
