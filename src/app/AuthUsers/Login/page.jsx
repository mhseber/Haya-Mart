"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "@/Firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Google Login
  const handleGoogleLogin = () => {
    setLoading(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1200,
        });

        setTimeout(() => {
          router.push("/"); // Go Home
        }, 1200);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Google login failed!",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://wallpaper.forfun.com/fetch/84/84738f85d5f04b91e003c35a0b5c40e2.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[350px]"
      >
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-6xl text-white/90" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Login to Continue
        </h2>

        {/* Email & Password UI (Static Only) */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/40 focus:border-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/40 focus:border-white"
          />

          {/* Normal Login (Dummy Button) */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl"
          >
            <LuLogIn className="text-2xl" />
            Login
          </motion.button>

          {/* Google Login */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleLogin}
            disabled={loading}
            className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl"
          >
            <FcGoogle className="text-2xl" />
            {loading ? "Please wait..." : "Login with Google"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
