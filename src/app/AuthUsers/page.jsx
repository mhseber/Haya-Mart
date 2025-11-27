// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaUserCircle } from "react-icons/fa";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import auth from "@/Firebase/firebase.init";
// import { FcGoogle } from "react-icons/fc";
// import { LuLogIn, LuLogOut } from "react-icons/lu";
// import Swal from "sweetalert2";
// import { useRouter } from "next/navigation";

// const AuthUsersPage = () => {
//   const provider = new GoogleAuthProvider();
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   // Google Login
//   const handleGoogleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         setUser(result.user);

//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Login Successful!",
//           showConfirmButton: false,
//           timer: 1200,
//         });
//         // Redirect after success
//         setTimeout(() => {
//           router.push("/"); // <-- Redirect to Home
//         }, 1200);
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: "error",
//           title: "Login Failed",
//           text: "Google login failed!",
//         });
//       });
//   };

//   // Logout
//   const handleLogout = () => {
//     signOut(auth).then(() => {
//       setUser(null);
//     });
//   };

//   return (
//     <div
//       className="min-h-screen flex justify-center items-center bg-cover bg-center relative"
//       style={{
//         backgroundImage:
//           "url('https://wallpaper.forfun.com/fetch/84/84738f85d5f04b91e003c35a0b5c40e2.jpeg')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>
//       {/* btn */}
//       <button className="btn">Login</button>
//       <button className="btn">Register</button>
//       <motion.div
//         initial={{ opacity: 0, y: 25 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10 w-[350px]"
//       >
//         {/* ----------------- CONDITIONAL RENDERING ------------------ */}

//         {!user ? (
//           /* ----------------- LOGIN UI ------------------ */
//           <>
//             <div className="flex justify-center mb-4">
//               <FaUserCircle className="text-6xl text-white/90" />
//             </div>

//             <h2 className="text-2xl font-semibold text-center text-white mb-6">
//               Login to Continue
//             </h2>

//             <div className="space-y-4">
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/40 focus:border-white"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="input input-bordered w-full bg-white/20 text-white placeholder-white/70 border-white/40 focus:border-white"
//               />

//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl"
//               >
//                 <LuLogIn className="text-2xl" />
//                 Login
//               </motion.button>

//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleGoogleLogin}
//                 className="btn bg-sky-500 hover:bg-sky-600 text-white w-full rounded-xl"
//               >
//                 <FcGoogle className="text-2xl" />
//                 Login with Google
//               </motion.button>
//             </div>
//           </>
//         ) : (
//           /* ----------------- USER PROFILE UI ------------------ */
//           <div className="text-center text-white space-y-5">
//             <img
//               src={user.photoURL}
//               alt="User Photo"
//               className="w-24 h-24 rounded-full mx-auto border-4 border-white/40 shadow-xl"
//             />

//             <h2 className="text-2xl font-bold">{user.displayName}</h2>

//             <motion.button
//               whileTap={{ scale: 0.95 }}
//               onClick={handleLogout}
//               className="btn bg-red-500 hover:bg-red-600 text-white w-full rounded-xl"
//             >
//               <LuLogOut className="text-xl" /> Logout
//             </motion.button>
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default AuthUsersPage;

// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";

// const AuthUsersPage = () => {
//   const router = useRouter();

//   return (
//     <div
//       className="min-h-screen flex flex-col gap-4 justify-center items-center bg-cover bg-center relative"
//       style={{
//         backgroundImage:
//           "url('https://wallpaper.forfun.com/fetch/84/84738f85d5f04b91e003c35a0b5c40e2.jpeg')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* Buttons */}
//       <div className="relative z-10 flex gap-4">
//         <button
//           onClick={() => router.push("/AuthUsers/Login")}
//           className="btn bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-xl"
//         >
//           Login
//         </button>

//         <button
//           onClick={() => router.push("/AuthUsers/Register")}
//           className="btn bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-xl"
//         >
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AuthUsersPage;

"use client";

import { useState } from "react";
import LoginPage from "./LoginForm";
import RegisterPage from "./RegisterForm";

export default function AuthUsersPage() {
  const [activeTab, setActiveTab] = useState("login"); // toggle login / register

  return (
    <div
      className="min-h-screen flex flex-col gap-6 justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://wallpaper.forfun.com/fetch/84/84738f85d5f04b91e003c35a0b5c40e2.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Buttons (Fixed) */}
      <div className="relative z-10 flex gap-4">
        <button
          onClick={() => setActiveTab("login")}
          className={`px-6 py-2 rounded-xl text-white font-semibold 
            ${activeTab === "login" ? "bg-sky-600" : "bg-sky-500/60"}`}
        >
          Login
        </button>

        <button
          onClick={() => setActiveTab("register")}
          className={`px-6 py-2 rounded-xl text-white font-semibold 
            ${activeTab === "register" ? "bg-purple-600" : "bg-purple-500/60"}`}
        >
          Register
        </button>
      </div>

      {/* Toggle Border Below Buttons */}
      <div className="relative z-10 w-60 border-b-2 border-white/40"></div>

      {/* Forms */}
      <div className="relative z-10">
        {activeTab === "login" ? <LoginPage /> : <RegisterPage />}
      </div>
    </div>
  );
}
