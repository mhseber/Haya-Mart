"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { FaCartPlus, FaRegHeart, FaShoppingBag, FaStar } from "react-icons/fa";

const NewArrival = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/NewArrival.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="px-6">
      <section className="flex justify-start gap-3 my-8 pl-5">
        <FaStar className="text-4xl text-blue-400" />
        <h2 className="text-3xl text-blue-200 font-bold">New Arrival</h2>
      </section>
      <div className="divider divide-gray-300"></div>
      <section>
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={18}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 18 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card bg-base-100 w-full shadow-sm h-[500px] flex flex-col">
                <motion.figure
                  className="h-[280px] overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.figure>
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <h2 className="card-title uppercase text-base">
                      {item.title}
                    </h2>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-sm text-blue-300 pt-3">
                        <span className="text-sky-500">Price : </span> ৳{" "}
                        {item.price}
                      </p>
                      <button className="btn btn-sm rounded-2xl border-sky-700 mt-2">
                        <FaRegHeart className="text-lg text-sky-500" />
                      </button>
                    </div>
                  </div>
                  <div className="card-actions justify-center mt-4">
                    <button className="btn  btn-sm border-2 border-black text-black font-semibold hover:bg-black hover:text-blue-800 transition duration-300">
                      <FaShoppingBag className="text-lg" />
                      Order Now
                    </button>
                    <button className="btn btn-outline btn-sm">
                      <FaCartPlus className="text-lg" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <style jsx global>{`
        .mySwiper {
          position: relative;
          padding-bottom: 34px !important;
        }
        .mySwiper .swiper-pagination {
          bottom: 8px !important;
          top: auto !important;
          width: 100% !important;
          display: flex;
          justify-content: center;
          pointer-events: auto;
        }
        .mySwiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          margin: 0 6px !important;
        }
        .mySwiper .swiper-pagination-bullet-active {
          background: #2563eb !important;
          transform: scale(1.25);
          transition: all 0.25s ease;
        }
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
