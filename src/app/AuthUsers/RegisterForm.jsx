"use client";

import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";

export default function RegisterForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 w-[350px]"
    >
      <div className="flex justify-center mb-4">
        <FaUserPlus className="text-6xl text-white/90" />
      </div>

      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Create an Account
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="input input-bordered w-full bg-white/20 text-white mb-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full bg-white/20 text-white mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="input input-bordered w-full bg-white/20 text-white mb-4"
      />

      <button className="btn bg-purple-500 hover:bg-purple-600 text-white w-full">
        Register
      </button>
    </motion.div>
  );
}
