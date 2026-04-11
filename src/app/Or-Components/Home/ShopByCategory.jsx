// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { MdCategory } from "react-icons/md";
// import Link from "next/link";

// const ShopByCategory = () => {
//   const categories = [
//     { id: 1, image: "/Category/abayas.jpg", name: "Abayas" },
//     { id: 2, image: "/Category/accessoris.webp", name: "Accessories" },
//     { id: 3, image: "/Category/caps.webp", name: "Caps" },
//     { id: 4, image: "/Category/kifay2.png", name: "Kifaya" },
//     { id: 5, image: "/Category/pangabi2.jpeg", name: "Panjabi" },
//     { id: 6, image: "/Category/t-shart.jpg", name: "T-Shirt" },
//     { id: 7, image: "/banner/tp1.PNG", name: "Thobe" },
//     { id: 8, image: "/Category/perfume.jpg", name: "Perfume" },
//     { id: 9, image: "/Category/pants.jpg", name: "Pants" },
//     { id: 10, image: "/Category/offer.avif", name: "OfferZone" },
//     { id: 11, image: "/Category/gadget2.jpeg", name: "Gadgets" },
//     { id: 12, image: "/Category/ofood.webp", name: "Organic Foods" },
//   ];

//   return (
//     <div>
//       {/* text */}
//       <section className="flex items-center justify-center gap-3 my-8">
//         <MdCategory className="text-4xl text-blue-400" />
//         <h2 className="text-3xl text-blue-200 font-bold">Shop by Category</h2>
//       </section>

//       {/* category cards */}
//       <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className="relative group  overflow-hidden shadow-md cursor-pointer"
//           >
//             {/* motion image */}
//             <motion.img
//               src={cat.image}
//               alt={cat.name}
//               className="w-full h-[420px] object-cover"
//               whileHover={{ scale: 2.1 }} // zoom effect
//               transition={{ duration: 1.7, ease: "easeInOut" }}
//             />

//             {/* fixed button */}
//             <div className="absolute bottom-4 right-4">
//               <Link href="/Outfits">
//                 <button
//                   className="px-6 py-2  border-2 border-black text-black font-semibold
//                    hover:bg-black hover:text-blue-800 transition duration-300"
//                 >
//                   {cat.name}
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default ShopByCategory;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { MdCategory } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const ShopByCategory = () => {
  const categories = [
    { id: 1, image: "/Category/abayas.jpg", name: "Abayas" },
    { id: 2, image: "/Category/accessoris.webp", name: "Accessories" },
    { id: 3, image: "/Category/caps.webp", name: "Caps" },
    { id: 4, image: "/Category/kifay2.png", name: "Kifaya" },
    { id: 5, image: "/Category/pangabi2.jpeg", name: "Panjabi" },
    { id: 6, image: "/Category/t-shart.jpg", name: "T-Shirt" },
    { id: 7, image: "/banner/tp1.PNG", name: "Thobe" },
    { id: 8, image: "/Category/perfume.jpg", name: "Perfume" },
    { id: 9, image: "/Category/pants.jpg", name: "Pants" },
    { id: 10, image: "/Category/offer.avif", name: "Offer Zone" },
    { id: 11, image: "/Category/gadget2.jpeg", name: "Gadgets" },
    { id: 12, image: "/Category/ofood.webp", name: "Organic Foods" },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#000814] py-16 px-4 sm:px-10">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-2 mb-12"
      >
        <div className="flex items-center gap-3">
          <MdCategory className="text-4xl text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
          <h2 className="text-4xl text-white font-black tracking-tight uppercase">
            Shop by <span className="text-sky-500">Category</span>
          </h2>
        </div>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full mt-2" />
      </motion.section>

      {/* Category Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            variants={cardVariants}
            className="relative group aspect-[3/4] overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900 cursor-pointer"
          >
            {/* Image Section */}
            <motion.div className="relative w-full h-full">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={cat.id <= 4}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </motion.div>

            {/* Premium Button Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
              <Link href="/Outfits" className="w-[80%]">
                <motion.button
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  initial="initial"
                  className="relative w-full py-4 px-6 rounded-2xl font-black text-white overflow-hidden group transition-all duration-500"
                >
                  {/* --- Background Layer (Default: Dark Glass) --- */}
                  <div className="absolute inset-0 bg-[#000d1a] border border-sky-500/30 group-hover:border-transparent transition-all duration-500" />

                  {/* --- Animated Gradient Overlay (Hover) --- */}
                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0.5 },
                      hover: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 blur-[2px]"
                  />

                  {/* --- Moving Shine/Light Streak --- */}
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
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/2 -skew-x-12 z-10"
                  />

                  {/* --- Text Content --- */}
                  <span className="relative z-20 flex items-center justify-center gap-2 tracking-[0.2em] uppercase text-xs sm:text-sm drop-shadow-lg">
                    {cat.name}
                    <motion.span
                      variants={{
                        initial: { x: -5, opacity: 0 },
                        hover: { x: 0, opacity: 1 },
                      }}
                    >
                      →
                    </motion.span>
                  </span>

                  {/* --- Outer Glow Effect --- */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(14,165,233,0.5)] rounded-2xl" />
                </motion.button>
              </Link>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 border-[3px] border-sky-500/0 group-hover:border-sky-500/20 rounded-[2rem] transition-all duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default ShopByCategory;
