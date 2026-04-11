"use client";

import React from "react";
import { motion } from "framer-motion";

const Filter = () => {
  const categories = [
    { name: "T-Shirt", target: "tshirt" },
    { name: "Polo T-Shirt", target: "tshirt" },
    { name: "Drop Shoulder", target: "tshirt" },
    { name: "Perfume", target: "perfume" },
    { name: "Visor Cap", target: "caps" },
    { name: "Docker Cap", target: "caps" },
    { name: "Pants", target: "pants" },
    { name: "Panjabi", target: "panjabi" },
    { name: "Accessories", target: "accessories" },
    { name: "Abayas", target: "abayas" },
    { name: "Kifaya", target: "kifaya" },
    { name: "Omani Thobe", target: "othobe" },
  ];

  // scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center p-5 px-4">
      <motion.div
        className="bg-sky-300 w-full max-w-5xl p-6 rounded-3xl shadow-2xl shadow-blue-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-black mb-6 flex items-center justify-center gap-2"
          animate={{ color: ["#000", "#0369a1", "#000"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🛍️ Filter Categories
        </motion.h1>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleScroll(item.target)}
              className="btn  btn-xl border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-500 transition duration-300 bg-black"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Filter;
