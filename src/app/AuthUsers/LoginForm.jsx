"use client";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { LuLogIn } from "react-icons/lu";
import { FaEye, FaEyeSlash, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "@/Firebase/firebase.init";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log("Email:", email, "Password:", password);

    // reset status
    setSuccess(false);
    setLoginError("");

    // login user

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(true);

        // Show Success Alert
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          timer: 1200,
          showConfirmButton: false,
        });

        // Redirect to Home
        setTimeout(() => router.push("/"), 1200);
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        setLoginError(error.message);

        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: error.message,
        });
      });
  };

  // Handle Google Login
  const handleGoogleLogin = () => {
    setLoading(true);

    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful!",
          timer: 1200,
          showConfirmButton: false,
        });

        setTimeout(() => router.push("/"), 1200);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl shadow-sky-500 rounded-2xl p-8 w-[350px] mb-10"
    >
      <div className="flex justify-center mb-4">
        <FaUserCircle className="text-6xl text-white/90" />
      </div>

      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Login to Continue
      </h2>
      <form onSubmit={handleLogin}>
        {/* Email */}
        <div>
          <label className="label pb-1">
            <span className="label-text font-bold">
              <i>Email</i>
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered  input-primary w-full bg-white/20 text-white mb-3"
          />
        </div>
        {/* Password */}
        {/* <div>
          <label className="label pb-1">
            <span className="label-text font-bold">
              <i>Password</i>
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full bg-white/20 text-white mb-4"
          />
        </div> */}
        {/* Password */}
        <div className="relative">
          <label className="label pb-1">
            <span className="label-text font-bold">
              <i>Password</i>
            </span>
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full bg-white/20 text-white mb-4"
          />

          {/* Eye Button */}
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="btn btn-xs absolute right-2 top-8"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Normal Login */}
        <button className="btn border-2  border-black bg-black text-white font-semibold  rounded-xl w-full mb-3">
          <LuLogIn className="text-xl" /> Login
        </button>
      </form>
      {/* Google Login */}
      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="btn bg-black hover:bg-sky-700 text-white w-full rounded-xl"
      >
        <FcGoogle className="text-xl" />
        {loading ? "Loading..." : "CONTINUE WITH GOOGLE"}
      </button>

      {/* success message */}
      {success && (
        <p className="text-green-600 pt-2">
          <i>Login Successful!</i>
        </p>
      )}
      {loginError && (
        <p className="text-red-600 pt-2">
          <i>{loginError}</i>
        </p>
      )}
    </motion.div>
  );
}
