"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const OfferZonePage = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const offers = [
    {
      id: 1,
      title: "Winter Collection Sale",
      discount: "Up to 50% Off",
      desc: "Jual Jaket Hoodie Dakwah Islami Prophet Muhammad Bonus Topi + Sticker | Haya Mart Stay cozy this winter with our premium jackets and hoodies.",
      img: "https://down-id.img.susercontent.com/file/dc9ff75d510a1f2e3853f81db1f2951c",
    },
    {
      id: 2,
      title: "Buy One Get One Attar Combo With Free T-Shirt",
      discount: "Limited Time Offer",
      desc: "Grab your favorite perfumes with our BOGO deal!",
      img: "https://ummahmartbd.com/wp-content/uploads/2024/03/Copy-of-Musterd-Oil-24.jpg",
    },
    {
      id: 3,
      title: "Exclusive New Arrivals",
      discount: "20% Off",
      desc: "New styles just dropped — get yours before they're gone!",
      img: "https://taibahstyle.com/wp-content/uploads/2024/01/Maroon-Raglan-768x768-1.webp",
    },
    {
      id: 4,
      title: "Classic Flex Black Loafer (Code: M42)",
      discount: "Flat 30% Off",
      desc: "Celebrate this Eid with elegance! Shop premium Loafer at discounted prices.",
      img: "https://ummahbd.com/wp-content/uploads/2025/04/1-M-42.jpg",
    },
    {
      id: 5,
      title: "Accessories Bonanza",
      discount: "Buy 2 Get 1 Free",
      desc: "Upgrade your look with our stylish caps, watches, and sunglasses. Perfect for everyday wear.",
      img: "https://img.freepik.com/premium-photo/men-s-accessories-black-leather-shoes-belt-watch-black-background_9083-2891.jpg",
    },
    {
      id: 6,
      title: "Hot Summer Deals",
      discount: "Up to 40% Off",
      desc: "Elegant abayas and modest fashion pieces designed for comfort and grace — at unbeatable prices!",
      img: "https://cdn.shopify.com/s/files/1/0603/9288/9263/files/abaya-collection.webp?v=1675422904",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-blue-950 text-white py-12 ">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-sky-400 mb-12 mt-16"
      >
        ✨ Special Offer Zone ✨
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8 px-6 md:px-16">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900 to-sky-900 p-4 rounded-2xl shadow-lg hover:shadow-sky-500/40 transition-all"
          >
            <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-6 bg-[#0a192f] p-6 rounded-2xl">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="rounded-xl w-full h-[400px] object-cover  shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left md:w-2/3">
                <h3 className="text-5xl font-bold text-sky-400 mb-2">
                  {offer.title}
                </h3>
                <p className="text-2xl text-yellow-200 font-extrabold mb-2 pt-6">
                  {offer.discount}
                </p>
                <p className="text-gray-300 text-xl leading-relaxed pt-6">
                  {offer.desc}
                </p>
                {/* Sizes */}
                <div className="mt-4 sm:mt-6">
                  <h3 className="text-xs sm:text-sm text-sky-500 font-semibold mb-2">
                    Select Size :{" "}
                    <span className="text-[#38bdf8]">{selectedSize || ""}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          setSelectedSize(selectedSize === size ? "" : size)
                        }
                        className={`border px-3 sm:px-4 py-[3px] sm:py-1 rounded-lg text-xs sm:text-sm transition-all ${
                          selectedSize === size
                            ? "bg-[#38bdf8] text-black border-[#38bdf8]"
                            : "text-[#38bdf8] border-[#38bdf8] hover:bg-[#38bdf8] hover:text-black"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <section className="flex gap-2 mt-2 ">
                  <button
                    className="px-6 py-2  border-2 border-black text-white font-semibold 
                   hover:bg-black hover:text-blue-800 transition duration-300"
                  >
                    Grab Offer
                  </button>
                  <div>
                    <button className="btn btn-sm rounded-2xl border-sky-700 mt-2">
                      <IoCartOutline className="text-lg text-sky-500" />
                    </button>
                  </div>
                  <div>
                    <button className="btn btn-sm rounded-2xl border-sky-700 mt-2">
                      <FaRegHeart className="text-lg text-sky-500" />
                    </button>
                  </div>
                </section>
              </div>
            </section>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfferZonePage;
