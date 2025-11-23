"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "@/Firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";

const AuthUsersPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error during Google login:", error);
      });
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

      {/* Main Card */}
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
          {loggedIn ? "Welcome!" : "Login to Continue"}
        </h2>

        {!loggedIn ? (
          // LOGIN FORM
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

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLoggedIn(true)}
              className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl"
            >
              <LuLogIn className="text-2xl" />
              Login
            </motion.button>
            {/* GoogleLogin */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleGoogleLogin}
              className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl"
            >
              <FcGoogle className="text-2xl" />
              Login with Google
            </motion.button>
          </div>
        ) : (
          // LOGOUT SECTION
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center text-white"
          >
            <p className="mb-4 text-white/80">
              You are successfully logged in!
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setLoggedIn(false)}
              className="btn bg-red-500 hover:bg-red-600 text-white w-full rounded-xl"
            >
              Logout
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthUsersPage;
