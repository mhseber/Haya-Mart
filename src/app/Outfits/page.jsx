"use client";
import { motion } from "framer-motion";
import Filter from "../Or-Components/OutfitSe/Filter";
import TShirt from "../Or-Components/OutfitSe/Tshirt";
import Panjabi from "../Or-Components/OutfitSe/Panjabi";
import Caps from "../Or-Components/OutfitSe/Caps";

const OutfitsPage = () => {
  return (
    <div>
      {/* banner */}
      <section
        className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/extray/outfits-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-sky-400 mb-5"
            animate={{
              color: ["#38bdf8", "#0ea5e9", "#0284c7"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            Haya OutFits
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-100 font-medium italic leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            “Modesty is the jewel of faith. Dress with grace, walk with dignity,
            and let your outfit reflect your Imaan.”
          </motion.p>
        </div>
      </section>
      {/* Filter */}
      <Filter />
      {/* product Section */}
      <Panjabi />
      <TShirt />
      <Caps />
    </div>
  );
};

export default OutfitsPage;
