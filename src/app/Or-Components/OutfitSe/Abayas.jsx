"use client";

import React, { useEffect, useState } from "react";
import { FaShoppingBag, FaCartPlus, FaRegHeart } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import AbayasMo from "../ProductModalPage/AbayasMo";

const Abayas = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    // fetch("http://localhost:3000/api/items/abayas")
    fetch("ProductData/abayas.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching T-shirt data:", err));
  }, []);

  // এই ফাংশন দিয়ে modal open করো
  const handleViewDetails = (item) => {
    setSelectedItem(item);
  };

  // modal close করার জন্য
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="px-6 py-6">
      {/* Title Section */}
      <section className=" gap-3 my-8 pl-5">
        <h2 className="text-3xl font-bold text-blue-200">Abayas</h2>
      </section>
      <div className="divider divide-gray-300"></div>

      {/* Product Swiper Section */}
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
          {items.map((item, index) => (
            <SwiperSlide key={index}>
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
                    alt={item.name}
                    className="h-full w-full object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.figure>

                <div className="card-body flex flex-col justify-between">
                  <div>
                    <h2 className="card-title uppercase text-base">
                      {item.name}
                    </h2>

                    <div className="flex justify-between items-center pt-2">
                      <p className="text-sm text-blue-300 pt-3">
                        <span className="text-sky-500">Price: </span>
                        {item.price}
                      </p>
                      <div className="flex gap-2">
                        <button className="btn btn-sm rounded-2xl border-sky-700 mt-2">
                          <FaRegHeart className="text-lg text-sky-500" />
                        </button>
                        <button
                          onClick={() => handleViewDetails(item)}
                          className="btn btn-sm  rounded-2xl border-sky-700 mt-2"
                        >
                          <AiFillEye className="text-lg text-sky-500" />
                        </button>
                      </div>
                    </div>
                    <p
                      className={`text-sm font-semibold mt-2 ${
                        item.inStock ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>

                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-sm border-2 border-black text-black font-semibold hover:bg-black hover:text-blue-800 transition duration-300">
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

      {/* ✅ Islamic Modal placed here */}
      {selectedItem && (
        <AbayasMo item={selectedItem} onClose={handleCloseModal} />
      )}

      {/* Swiper Custom Styling */}
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
          background: #38bdf8 !important; /* sky-400 */
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

export default Abayas;
