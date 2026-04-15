"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdCategory } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const ShopByCategory = () => {
  const categories = [
    { id: 1, image: "/Category/abayas.jpeg", name: "Abayas" },
    { id: 2, image: "/Category/accessoris.webp", name: "Accessories" },
    { id: 3, image: "/Category/caps.webp", name: "Caps" },
    { id: 4, image: "/Category/kifaya.png", name: "Kifaya" },
    { id: 5, image: "/Category/pangabi2.jpeg", name: "Panjabi" },
    { id: 6, image: "/Category/t-shart.jpg", name: "T-Shirt" },
    { id: 7, image: "/Category/thobe.jpg", name: "Thobe" },
    { id: 8, image: "/Category/perfume.jpg", name: "Perfume" },
    { id: 9, image: "/Category/pants.jpg", name: "Pants" },
    { id: 10, image: "/Category/offerz.avif", name: "Offer Zone" },
    { id: 11, image: "/Category/gadget.avif", name: "Gadgets" },
    { id: 12, image: "/Category/ofood.webp", name: "Organic Foods" },
  ];

  return (
    <div className="bg-[#000814] py-16 px-4 sm:px-10">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-2 mb-14"
      >
        <div className="flex items-center gap-3">
          <MdCategory className="text-4xl text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          <h2 className="text-3xl md:text-5xl text-white font-black tracking-tight uppercase">
            Shop by <span className="text-sky-500">Category</span>
          </h2>
        </div>
        <div className="h-1 w-28 bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full mt-3" />
      </motion.section>

      {/* Balanced Grid - Mobile 2, Desktop 3 columns */}
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1300px] mx-auto">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // aspect-[3/4] দেওয়া হয়েছে যা খুব বেশি লম্বা বা চ্যাপ্টা নয়
            className="relative group aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 cursor-pointer shadow-xl"
          >
            {/* Image Section */}
            <div className="relative w-full h-full">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority={cat.id <= 3}
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
            </div>

            {/* Premium Button */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 md:pb-8">
              <Link href="/Outfits" className="w-[85%]">
                <motion.button
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  initial="initial"
                  className="relative w-full py-3.5 px-4 rounded-xl font-black text-white overflow-hidden group transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-[#000d1a]/90 backdrop-blur-md border border-sky-500/30 group-hover:border-transparent transition-all duration-500" />

                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.5 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-[1px]"
                  />

                  <motion.span
                    variants={{
                      initial: { x: "-100%" },
                      hover: { x: "100%" },
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent w-1/2 -skew-x-12 z-10"
                  />

                  <span className="relative z-20 flex items-center justify-center gap-2 tracking-[0.15em] uppercase text-[10px] sm:text-xs">
                    {cat.name}
                    <span className="text-sm">→</span>
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default ShopByCategory;
