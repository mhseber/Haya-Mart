"use client";

import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "@/Firebase/firebase.init";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, number, email, password);

    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error("ERROR", error);
      });
  };
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
      className="backdrop-blur-xl bg-white/10 border mb-10 border-white/20 shadow-2xl rounded-2xl p-8 w-[350px]"
    >
      <div className="flex justify-center mb-4">
        <FaUserPlus className="text-6xl text-white/90" />
      </div>

      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Create an Account
      </h2>
      {/* form */}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full bg-white/20 text-white mb-3"
        />
        <input
          type="number"
          name="number"
          placeholder="01XXXXXXXXX"
          className="input input-bordered w-full bg-white/20 text-white mb-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full bg-white/20 text-white mb-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full bg-white/20 text-white mb-4"
        />

        <button className=" btn border-2  border-black bg-black text-white font-semibold  w-full mb-3">
          <FaUserPlus className="text-xl text-white/90" />
          CREATE ACCOUNT
        </button>
        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="btn bg-black hover:bg-sky-700 text-white w-full"
        >
          <FcGoogle className="text-xl" />
          {loading ? "Loading..." : "Google Login"}
        </button>
      </form>
    </motion.div>
  );
}
