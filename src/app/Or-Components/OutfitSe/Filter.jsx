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

  // Scroll handler with offset for sticky header
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 100; // আপনার স্টিকি নববার থাকলে সেটার জন্য গ্যাপ
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Animation variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative py-10 px-4 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto backdrop-blur-md bg-slate-900/40 border border-white/10 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
      >
        {/* Title with Underline Effect */}
        <div className="text-center mb-10">
          <motion.h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="text-sky-400">⚡</span> Quick{" "}
            <span className="text-sky-400">Explore</span>
          </motion.h2>
          <div className="h-1 w-20 bg-sky-500 mx-auto mt-3 rounded-full shadow-[0_0_10px_#0ea5e9]" />
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {categories.map((item, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(56, 189, 248, 1)",
                color: "#000",
                boxShadow: "0px 0px 20px rgba(56, 189, 248, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll(item.target)}
              className="px-5 py-2.5 rounded-xl border border-sky-500/30 bg-slate-800/50 text-sky-400 text-sm md:text-base font-bold transition-all duration-300 backdrop-blur-sm"
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
