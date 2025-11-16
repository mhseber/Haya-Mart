"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdCategory } from "react-icons/md";

const ShopByCategory = () => {
  const categories = [
    { id: 1, image: "/Category/abayas.jpg", name: "Abayas" },
    { id: 2, image: "/Category/accessoris.webp", name: "Accessories" },
    { id: 3, image: "/Category/caps.webp", name: "Caps" },
    { id: 4, image: "/Category/kifay.jpeg", name: "Kifaya" },
    { id: 5, image: "/Category/pangabi.jpeg", name: "Panjabi" },
    { id: 6, image: "/Category/t-shart.jpg", name: "T-Shirt" },
    { id: 7, image: "/banner/tp1.PNG", name: "Thobe" },
    { id: 8, image: "/Category/perfume.jpg", name: "Perfume" },
    { id: 9, image: "/Category/pants.jpg", name: "Pants" },
    { id: 9, image: "/Category/offer.avif", name: "OfferZone" },
    { id: 9, image: "/Category/gadget2.jpeg", name: "Gadgets" },
    { id: 9, image: "/Category/ofood.webp", name: "Organic Foods" },
  ];

  return (
    <div>
      {/* text */}
      <section className="flex items-center justify-center gap-3 my-8">
        <MdCategory className="text-4xl text-blue-400" />
        <h2 className="text-3xl text-blue-200 font-bold">Shop by Category</h2>
      </section>

      {/* category cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative group  overflow-hidden shadow-md cursor-pointer"
          >
            {/* motion image */}
            <motion.img
              src={cat.image}
              alt={cat.name}
              className="w-full h-[420px] object-cover"
              whileHover={{ scale: 2.1 }} // zoom effect
              transition={{ duration: 1.7, ease: "easeInOut" }}
            />

            {/* fixed button */}
            <div className="absolute bottom-4 right-4">
              <button
                className="px-6 py-2  border-2 border-black text-black font-semibold 
                   hover:bg-black hover:text-blue-800 transition duration-300"
              >
                {cat.name}
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ShopByCategory;
