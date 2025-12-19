"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingBag, FaTrashAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
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

      <div className="max-w-5xl mx-auto bg-sky-900/40 backdrop-blur-md rounded-3xl shadow-lg p-6">
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
                    className="size-22 rounded-xl object-cover shadow"
                  />
                </div>

                <div className="flex-grow">
                  <div className="font-semibold text-xl text-sky-500">
                    {item.name}
                  </div>
                  <div className="text-xl uppercase font-semibold text-gray-500">
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
