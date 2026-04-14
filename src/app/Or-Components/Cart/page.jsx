"use client";

import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { IoBagCheckOutline, IoArrowBackOutline } from "react-icons/io5";
import { FaTrashAlt, FaMinus, FaPlus } from "react-icons/fa";
import Link from "next/link";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
    <div className="min-h-screen bg-[#020617] text-white pt-28 pb-20 px-4 md:px-10">
      {/* Header Area */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <div className="p-4 bg-sky-500/10 rounded-2xl border border-sky-500/20">
            <IoCartOutline className="text-4xl text-sky-400" />
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
              Your <span className="text-sky-500">Cart</span>
            </h1>
            <p className="text-gray-400 text-sm">
              You have {cart.length} items in your bag
            </p>
          </div>
        </motion.div>

        <Link
          href="/Outfits"
          className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors font-medium"
        >
          <IoArrowBackOutline /> Continue Shopping
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* --- Left: Product List --- */}
        <div className="lg:col-span-2 space-y-6">
          <AnimatePresence mode="popLayout">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -50 }}
                className="relative group backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-[2rem] p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 hover:border-sky-500/30 transition-all shadow-xl"
              >
                {/* Index Number */}
                <span className="absolute -left-3 -top-3 w-8 h-8 bg-slate-800 border border-white/10 rounded-full flex items-center justify-center text-xs font-bold text-sky-400 shadow-lg">
                  {index + 1}
                </span>

                {/* Product Image */}
                <div className="w-full md:w-32 h-32 flex-shrink-0">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-2xl border border-white/5"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-sky-400 text-2xl font-black mt-1">
                    ৳ {item.price}
                  </p>
                </div>

                {/* Quantity Controls (Optional but recommended) */}
                <div className="flex items-center gap-4 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <FaMinus size={12} />
                  </button>
                  <span className="font-bold w-4 text-center">1</span>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <FaPlus size={12} />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-black font-black rounded-xl hover:bg-sky-400 transition-all active:scale-95 text-sm">
                    ORDER
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {cart.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 backdrop-blur-md bg-white/[0.02] border border-dashed border-white/10 rounded-[3rem]"
            >
              <div className="text-6xl mb-4 opacity-20 flex justify-center">
                <IoCartOutline />
              </div>
              <h2 className="text-2xl font-bold text-gray-500">
                Your cart is feeling lonely...
              </h2>
              <Link href="/Outfits">
                <button className="mt-6 px-8 py-3 bg-sky-500/10 text-sky-400 border border-sky-500/20 rounded-full hover:bg-sky-500 hover:text-black transition-all">
                  Browse Collection
                </button>
              </Link>
            </motion.div>
          )}
        </div>

        {/* --- Right: Order Summary --- */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="sticky top-28 backdrop-blur-2xl bg-gradient-to-br from-sky-900/20 to-blue-900/20 border border-sky-500/20 rounded-[2.5rem] p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-black mb-6 uppercase italic tracking-tighter">
              Order <span className="text-sky-400">Summary</span>
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal ({cart.length} items)</span>
                <span className="text-white font-bold">৳ {totalPrice}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping Fee</span>
                <span className="text-green-400 font-bold font-mono">FREE</span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between items-end">
                <span className="text-lg font-bold">Total Amount</span>
                <span className="text-3xl font-black text-sky-400">
                  ৳ {totalPrice}
                </span>
              </div>
            </div>

            <button className="w-full py-5 bg-sky-500 text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-sky-400 transition-all shadow-[0_10px_30px_rgba(56,189,248,0.3)] active:scale-95 mb-4">
              <IoBagCheckOutline size={24} /> CHECKOUT ALL
            </button>

            <p className="text-center text-[10px] text-gray-500 uppercase tracking-[0.2em]">
              Secure Checkout Guaranteed
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
