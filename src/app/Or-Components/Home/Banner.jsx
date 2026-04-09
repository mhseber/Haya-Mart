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
    "/banner/p2.png",
    "/banner/abayas2.png",
  ];

  return (
    <div className="w-full pt-10 md:pt-28 px-4 pb-10 sm:px-6 lg:px-12 max-w-[1600px] mx-auto">
      <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-sky-900/20 bg-[#000814]">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          interval={5000}
          transitionTime={1000}
          stopOnHover={true}
          swipeable
          emulateTouch
          renderIndicator={(onClickHandler, isSelected, index) => (
            <li
              className={`inline-block mx-1 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "w-8 h-2 bg-sky-500 rounded-full"
                  : "w-2 h-2 bg-gray-500 rounded-full opacity-50"
              }`}
              onClick={onClickHandler}
              key={index}
              role="button"
            />
          )}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[25/9] lg:max-h-[500px]"
            >
              <Image
                src={src}
                alt={`Haya Mart Premium Collection ${index + 1}`}
                fill
                priority={index < 2} // প্রথম ২টা ইমেজ দ্রুত লোড হবে
                quality={100} // সর্বোচ্চ কোয়ালিটি নিশ্চিত করতে
                sizes="100vw"
                className="object-cover md:object-center transition-transform duration-[2000ms] hover:scale-105"
                unoptimized={src.endsWith(".png")} // PNG ইমেজের শার্পনেস ঠিক রাখতে
              />

              {/* প্রিমিয়াম লুকের জন্য হালকা গ্রেডিয়েন্ট ওভারলে */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
