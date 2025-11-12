"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingBag, FaTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Summer T-Shirt",
      price: 700,
      img: "https://taibahstyle.com/wp-content/uploads/2024/01/Maroon-Raglan-768x768-1.webp",
    },
    {
      id: 2,
      name: "Classic Tshirt",
      price: 990,
      img: "https://backend.oubd.shop/uploads/all/rVaQcw3P68luohmiBsXd4xWHLa6Ff2wmS0DtF67Y.webp",
    },
    {
      id: 2,
      name: "Classic Tshirt",
      price: 990,
      img: "https://backend.oubd.shop/uploads/all/rVaQcw3P68luohmiBsXd4xWHLa6Ff2wmS0DtF67Y.webp",
    },
    {
      id: 3,
      name: "By 1 Get 1 Free Tshirt",
      price: 1250,
      img: "https://ummahmartbd.com/wp-content/uploads/2024/03/Copy-of-Musterd-Oil-24.jpg",
    },
    {
      id: 3,
      name: "By 1 Get 1 Free Tshirt",
      price: 1250,
      img: "https://ummahmartbd.com/wp-content/uploads/2024/03/Copy-of-Musterd-Oil-24.jpg",
    },
    {
      id: 3,
      name: "By 1 Get 1 Free Tshirt",
      price: 1250,
      img: "https://ummahmartbd.com/wp-content/uploads/2024/03/Copy-of-Musterd-Oil-24.jpg",
    },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-blue-950 pt-26 py-12 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-center mb-8 text-sky-400"
      >
        <IoCartOutline className="inline-block mr-2 text-sky-400" /> Your Cart
      </motion.h1>

      <div className="max-w-3xl mx-auto bg-sky-900/40 backdrop-blur-md rounded-3xl shadow-lg p-6">
        <ul className="list bg-base-100 rounded-box shadow-md text-black">
          <li className="p-4 pb-2 text-xl text-sky-600 font-semibold tracking-wide">
            Added Products
          </li>

          <AnimatePresence>
            {cart.map((item, index) => (
              <motion.li
                key={item.id}
                className="list-row flex items-center gap-3 p-3 border-b border-gray-300/40 last:border-none"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-4xl text-gray-300 font-thin opacity-40 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="size-12 rounded-xl object-cover shadow"
                  />
                </div>

                <div className="flex-grow">
                  <div className="font-semibold text-sky-500">{item.name}</div>
                  <div className="text-xs uppercase font-semibold text-gray-500">
                    ৳ {item.price}
                  </div>
                </div>
                <button className="btn  btn-sm border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-800 transition duration-300">
                  <FaShoppingBag className="text-lg" />
                  Order Now
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="btn btn-square btn-ghost"
                >
                  <FaTrashAlt className="text-red-600 text-lg" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {cart.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-gray-300"
          >
            Your cart is empty 🛒
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default CartPage;
