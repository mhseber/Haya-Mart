"use client";

import { motion } from "framer-motion";
import React from "react";

const SONewsletter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full max-w-6xl mx-auto rounded-3xl py-16 px-6 overflow-hidden mb-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148906367.jpg')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        >
          📩 Subscribe to Our Newsletter
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-200 mt-3 text-sm sm:text-base md:text-lg"
        >
          Get exclusive offers, Islamic fashion updates & modest-style tips.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/80 backdrop-blur-md shadow-lg p-3 sm:p-4 rounded-full border border-white transition-all duration-300 hover:shadow-xl w-full max-w-2xl mx-auto"
        >
          <div className="flex items-center w-full flex-grow gap-3 px-3">
            <svg
              className="h-6 w-6 text-gray-700 hidden sm:block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full text-center sm:text-left outline-none bg-transparent text-gray-800 placeholder-gray-500 text-sm sm:text-base"
              required
            />
          </div>

          <button
            className="btn text-white font-semibold hover:bg-black hover:text-blue-800
             px-5 py-2 text-sm 
             sm:px-8 sm:py-2.5 sm:text-base 
             rounded-full  
              transition-all duration-300 
             "
          >
            Subscribe
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SONewsletter;
