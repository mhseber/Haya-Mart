"use client";
import { motion } from "framer-motion";
import Filter from "../Or-Components/OutfitSe/Filter";
import Tshirt from "../Or-Components/OutfitSe/Tshirt";
import Panjabi from "../Or-Components/OutfitSe/Panjabi";
import Caps from "../Or-Components/OutfitSe/Caps";
import Perfume from "../Or-Components/OutfitSe/Perfume";
import Pants from "../Or-Components/OutfitSe/Pants";
import Accessories from "../Or-Components/OutfitSe/Accessories";
import Abayas from "../Or-Components/OutfitSe/Abayas";
import Kifaya from "../Or-Components/OutfitSe/Kifaya";
import Othobe from "../Or-Components/OutfitSe/Othobe";

// const OutfitsPage = () => {
//   return (
//     <div>
//       {/* banner */}
//       <section
//         className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/extray/outfits-bg.jpg')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-4 max-w-3xl">
//           <motion.h1
//             className="text-4xl md:text-6xl font-extrabold text-sky-400 mb-5"
//             animate={{
//               color: ["#38bdf8", "#0ea5e9", "#0284c7"],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//           >
//             Haya OutFits
//           </motion.h1>

//           <motion.p
//             className="text-base md:text-lg text-gray-100 font-medium italic leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 2 }}
//           >
//             “Modesty is the jewel of faith. Dress with grace, walk with dignity,
//             and let your outfit reflect your Imaan.”
//           </motion.p>
//         </div>
//       </section>
//       {/* Filter */}
//       <Filter />
//       {/* product Section with IDs */}
//       <div id="panjabi">
//         <Panjabi />
//       </div>
//       <div id="othobe">
//         <Othobe />
//       </div>
//       <div id="kifaya">
//         <Kifaya />
//       </div>
//       <div id="caps">
//         <Caps />
//       </div>
//       <div id="tshirt">
//         <Tshirt />
//       </div>
//       <div id="pants">
//         <Pants />
//       </div>
//       <div id="perfume">
//         <Perfume />
//       </div>
//       <div id="abayas">
//         <Abayas />
//       </div>
//       <div id="accessories">
//         <Accessories />
//       </div>
//     </div>
//   );
// };

// export default OutfitsPage;

const OutfitsPage = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {/* --- Modern Hero Banner --- */}
      <section className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/extray/outfits-bg.jpg')" }}
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-slate-950"></div>

        {/* Content Box with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <div className="backdrop-blur-md bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <motion.h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 mb-6 uppercase tracking-tighter">
              Haya Outfits
            </motion.h1>

            <motion.p className="text-lg md:text-2xl text-gray-200 font-light italic leading-relaxed max-w-2xl mx-auto">
              “Modesty is the jewel of faith. Dress with grace, walk with
              dignity, and let your outfit reflect your Imaan.”
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* --- Filter Section --- */}
      <div className="container mx-auto py-10">
        <Filter />
      </div>

      {/* --- Dynamic Product Sections --- */}
      <main className="container mx-auto  pb-10 ">
        {[
          { id: "panjabi", component: <Panjabi /> },
          { id: "othobe", component: <Othobe /> },
          { id: "kifaya", component: <Kifaya /> },
          { id: "caps", component: <Caps /> },
          { id: "tshirt", component: <Tshirt /> },
          { id: "pants", component: <Pants /> },
          { id: "perfume", component: <Perfume /> },
          { id: "abayas", component: <Abayas /> },
          { id: "accessories", component: <Accessories /> },
        ].map((item, index) => (
          <motion.div
            key={item.id}
            id={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Section Separator/Title can go here if needed inside components */}
            <div className="scroll-mt-24">{item.component}</div>
          </motion.div>
        ))}
      </main>

      {/* --- Footer Scroll Shadow --- */}
      <div className="h-20 bg-gradient-to-t from-black to-transparent"></div>

      {/* Custom Styles for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default OutfitsPage;
