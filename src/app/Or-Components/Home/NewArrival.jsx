"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../../public/banner/p1.webp";
import slide2 from "../../../../public/banner/p2.jpg";
import slide3 from "../../../../public/banner/p3.webp";
import slide4 from "../../../../public/banner/p4.jpg";
import slide5 from "../../../../public/banner/p5.jpg";
import slide6 from "../../../../public/banner/p1.webp";
import slide7 from "../../../../public/banner/p2.jpg";
import slide8 from "../../../../public/banner/p3.webp";
import slide9 from "../../../../public/banner/p4.jpg";
import slide10 from "../../../../public/banner/p5.jpg";
import slide11 from "../../../../public/banner/p1.webp";
import slide12 from "../../../../public/banner/p2.jpg";
import slide13 from "../../../../public/banner/p3.webp";
import slide14 from "../../../../public/banner/p4.jpg";
import slide15 from "../../../../public/banner/p5.jpg";

const NewArrival = () => {
  return (
    <div className="px-6">
      <section>
        <h2 className="text-3xl font-bold pl-2 my-8">New Arrival</h2>
        <div className="divider divide-gray-300"></div>
      </section>

      <section>
        <Swiper
          className="mySwiper" // <-- important: use this class in CSS
          slidesPerView={3}
          spaceBetween={18} // gap কমানো হয়েছে
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            // responsive slidesPerView
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 18 },
          }}
        >
          {[
            slide1,
            slide2,
            slide3,
            slide4,
            slide5,
            slide6,
            slide7,
            slide8,
            slide9,
            slide10,
            slide11,
            slide12,
            slide13,
            slide14,
            slide15,
          ].map((s, i) => (
            <SwiperSlide key={i}>
              <div className="card bg-base-100 w-full shadow-sm">
                <figure>
                  <img
                    src={s.src}
                    alt={`slide-${i}`}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Item {i + 1}</h2>
                  <p className="text-sm text-gray-600">
                    Short description for item {i + 1}.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order Now</button>
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* styled-jsx global CSS to override Swiper defaults */}
      <style jsx global>{`
        /* make sure swiper container leaves room for pagination */
        .mySwiper {
          position: relative;
          padding-bottom: 34px !important; /* add space below slides so pagination sits outside */
        }

        /* place pagination below slides (tweak bottom as needed) */
        .mySwiper .swiper-pagination {
          bottom: 8px !important;
          top: auto !important;
          width: 100% !important;
          display: flex;
          justify-content: center;
          pointer-events: auto;
        }

        /* white bullets and full opacity */
        .mySwiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 6px !important;
        }

        /* active bullet styling */
        .mySwiper .swiper-pagination-bullet-active {
          background: #2563eb !important; /* change active color as you like */
          transform: scale(1.25);
          transition: all 0.25s ease;
        }

        /* smaller dots on mobile if needed */
        @media (max-width: 640px) {
          .mySwiper .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NewArrival;
