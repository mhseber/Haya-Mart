"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { IoCartOutline, IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white pt-28 pb-20 px-4 md:px-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-5xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <div className="relative">
            <FaRegHeart className="text-6xl text-sky-500/20" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FaRegHeart className="text-3xl text-sky-400" />
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
            Your <span className="text-sky-500">Wishlist</span>
          </h1>

          <div className="px-4 py-1 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm font-bold">
            {wishlist.length} SAVED ITEMS
          </div>
        </motion.div>
      </div>

      {/* Wishlist Container */}
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="p-6 md:p-8 space-y-4">
            <AnimatePresence mode="popLayout">
              {wishlist.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col md:flex-row items-center gap-6 p-4 rounded-3xl border border-transparent hover:border-sky-500/30 hover:bg-white/[0.03] transition-all duration-500"
                >
                  {/* Serial Number */}
                  <div className="hidden md:block text-4xl font-black text-white group-hover:text-gray-300 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-28 h-28 flex-shrink-0 relative overflow-hidden rounded-2xl">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-center md:justify-start gap-3 mt-1">
                      <span className="text-2xl font-black text-sky-400">
                        ৳{item.price}
                      </span>
                      <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-green-400 uppercase tracking-widest">
                        In Stock
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    {/* এখানে আপনার কার্টে অ্যাড করার লজিক বসাতে পারেন */}
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-sky-500 text-black font-black rounded-xl hover:bg-sky-400 transition-all active:scale-95 shadow-lg shadow-sky-500/20">
                      <IoCartOutline size={20} /> ADD TO CART
                    </button>

                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="p-4 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all shadow-inner"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {wishlist.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="text-6xl mb-6 opacity-10 flex justify-center">
                  <FaRegHeart />
                </div>
                <h2 className="text-2xl font-bold text-gray-500 mb-6">
                  আপনার উইশলিস্ট একদম খালি!
                </h2>
                <Link href="/outfits">
                  <button className="flex items-center gap-2 mx-auto px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-sky-500 hover:text-black transition-all font-bold">
                    <IoArrowBackOutline /> কন্টিনিউ শপিং
                  </button>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
