"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("login");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm pt-80 flex justify-center items-center z-50"
        onClick={onClose}
      >
        {/* Modal Box */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0, y: -40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-6 w-[90%] max-w-md shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Tabs */}
          <div className="flex justify-between mb-6">
            <button
              onClick={() => setTab("login")}
              className={`px-4 py-2 rounded-xl font-semibold ${
                tab === "login"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setTab("register")}
              className={`px-4 py-2 rounded-xl font-semibold ${
                tab === "register"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Register
            </button>
          </div>

          {/* Login Form */}
          {tab === "login" && (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-4"
              />
              <button className="btn btn-primary w-full">Login</button>
            </motion.div>
          )}

          {/* Register Form */}
          {tab === "register" && (
            <motion.div
              key="register"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-3"
              />
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-4"
              />
              <button className="btn btn-primary w-full">Register</button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
