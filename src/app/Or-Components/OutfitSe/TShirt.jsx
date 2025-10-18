// import React from "react";

// const TShirt = () => {
//   return (
//     <div className="px-4">
//       {/* text */}
//       <div className="px-6">
//         <section className="flex justify-start gap-3 my-4 pl-5">
//           <h2 className="text-3xl text-blue-200 font-bold">T-Shirt</h2>
//         </section>
//         <div className="divider divide-gray-300"></div>
//       </div>
//       {/* card */}
//     </div>
//   );
// };

// export default TShirt;

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TShirt = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/productData/tshirt.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load JSON");
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="px-4 py-10 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Header */}
      <div className="px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-sky-400 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Signature T-Shirt Collection
        </motion.h2>
        <p className="text-gray-400 mb-8">
          Premium comfort. Modest style. Everyday confidence.
        </p>
        <div className="divider divide-gray-500"></div>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/60 rounded-2xl shadow-md hover:shadow-sky-600 transition duration-300 overflow-hidden"
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={item.img}
              alt={item.name}
              className="w-full h-64 object-cover rounded-t-2xl"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-sm text-gray-400 mb-2">{item.description}</p>
              <p className="text-sky-400 font-bold">{item.color}</p>
              <p
                className={`text-sm font-semibold mt-1 ${
                  item.inStock ? "text-green-400" : "text-red-500"
                }`}
              >
                {item.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default TShirt;
