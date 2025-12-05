"use client";

import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaUserPlus } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import auth from "@/Firebase/firebase.init";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

// export default function RegisterForm() {
//   const [success, setSuccess] = useState(false);
//   const provider = new GoogleAuthProvider();
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [showPass, setShowPass] = useState(false);

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const name = e.target.name.value;
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const photo = e.target.photo.value;
//     const terms = e.target.terms.checked;

//     console.log(name, email, password, photo, terms);

//     setErrorMessage("");
//     setSuccess(false);

//     if (!terms) {
//       setErrorMessage(
//         "You must agree to the Terms of Service and Privacy Policy."
//       );
//       return;
//     }

//     if (password.length < 6) {
//       setErrorMessage("Password must be at least 6 characters long.");
//       return;
//     }

//     createUserWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         console.log(result.user);
//         setSuccess(true);

//         // send verification email address
//         sendEmailVerification(auth.currentUser).then(() => {
//           console.log("Email verification sent");
//         });

//         // update Profile,Name,Photo,Number
//         const profile = {
//           displayName: name,
//           photoURL: photo,
//         };
//         updateProfile(auth.currentUser, profile)
//           .then(() => {
//             console.log("Profile Updated");
//           })
//           .catch((error) => {
//             console.error("Profile update error:", error);
//           });
//       })
//       .catch((error) => {
//         console.error("ERROR", error);
//         setErrorMessage(error.message);
//         setSuccess(false);
//       });
//   };

//   const handleGoogleLogin = () => {
//     setLoading(true);

//     signInWithPopup(auth, provider)
//       .then(() => {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Login Successful!",
//           timer: 1200,
//           showConfirmButton: false,
//         });

//         setTimeout(() => router.push("/"), 1200);
//       })
//       .catch(() => {
//         Swal.fire({
//           icon: "error",
//           title: "Google Login Failed",
//         });
//       })
//       .finally(() => setLoading(false));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 25 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="backdrop-blur-xl bg-white/10 border mb-10 border-white/20 shadow-2xl shadow-sky-500 rounded-2xl p-8 lg:w-[550px]"
//     >
//       <div className="flex justify-center mb-4">
//         <FaUserPlus className="text-6xl text-white/90" />
//       </div>

//       <h2 className="text-2xl font-semibold text-center text-white mb-6">
//         Create an Account
//       </h2>

//       <form onSubmit={handleRegister}>
//         {/* GRID: NAME + NUMBER */}
//         <div className="grid grid-cols-2 gap-4">
//           {/* Name */}
//           <div>
//             <label className="label pb-1">
//               <span className="label-text font-bold">
//                 <i>Name</i>
//               </span>
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               className="input input-bordered input-primary w-full bg-white/20 text-white mb-3"
//             />
//           </div>
//         </div>

//         {/* Photo */}
//         <div>
//           <label className="label pb-1">
//             <span className="label-text font-bold">
//               <i>Photo</i>
//             </span>
//           </label>
//           <input
//             type="text"
//             name="photo"
//             placeholder="url link"
//             className="input input-bordered input-primary w-full bg-white/20 text-white mb-3"
//           />
//         </div>

//         {/* GRID: EMAIL + PASSWORD */}
//         <div className="grid grid-cols-2 gap-4">
//           {/* Email */}
//           <div>
//             <label className="label pb-1">
//               <span className="label-text font-bold">
//                 <i>Email</i>
//               </span>
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input input-bordered input-primary w-full bg-white/20 text-white mb-3"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative">
//             <label className="label pb-1">
//               <span className="label-text font-bold">
//                 <i>Password</i>
//               </span>
//             </label>
//             <input
//               type={showPass ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               className="input input-bordered input-primary w-full bg-white/20 text-white mb-4"
//             />

//             {/* Eye Button */}
//             <button
//               type="button"
//               onClick={() => setShowPass(!showPass)}
//               className="btn btn-xs absolute right-2 top-8"
//             >
//               {showPass ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>
//         </div>
//         {/* checkbox */}
//         <div className="pb-4 flex gap-2">
//           <input
//             type="checkbox"
//             name="terms"
//             className="checkbox checkbox-info"
//           />{" "}
//           <p>I agree to the Terms of Service and Privacy Policy</p>
//         </div>

//         <button className="btn border-2 rounded-xl border-black bg-black text-white font-semibold w-full mb-3">
//           <FaUserPlus className="text-xl text-white/90" />
//           CREATE ACCOUNT
//         </button>

//         <button
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="btn bg-black hover:bg-sky-700 text-white w-full rounded-xl"
//         >
//           <FcGoogle className="text-xl" />
//           {loading ? "Loading..." : "CONTINUE WITH GOOGLE"}
//         </button>
//       </form>

//       {errorMessage && (
//         <p className="text-red-500 pt-2">
//           <i>{errorMessage}</i>
//         </p>
//       )}
//       {success && (
//         <p className="text-green-600 pt-2">
//           <i>Create User Successful!</i>
//         </p>
//       )}
//     </motion.div>
//   );
// }

export default function RegisterForm() {
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;

    setErrorMessage("");

    if (!terms) {
      setErrorMessage(
        "You must agree to the Terms of Service and Privacy Policy."
      );
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Send email verification
        sendEmailVerification(auth.currentUser);

        // Update profile
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });

        // SweetAlert success
        Swal.fire({
          icon: "success",
          title: "Account Created Successfully!",
          text: "Please login to continue.",
          confirmButtonColor: "#0f172a",
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
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
      className="backdrop-blur-xl bg-white/10 border mb-10 border-white/20 
      shadow-2xl rounded-2xl p-8 w-full max-w-xl shadow-sky-500"
    >
      <div className="flex justify-center mb-4">
        <FaUserPlus className="text-6xl text-white/90" />
      </div>

      <h2 className="text-2xl font-semibold text-center text-white mb-6">
        Create an Account
      </h2>

      {/* FORM */}
      <form onSubmit={handleRegister}>
        {/* Name */}
        <label className="label pb-1">
          <span className="label-text font-bold">
            <i>Name</i>
          </span>
        </label>
        <input
          type="text"
          name="name"
          className="input input-bordered input-primary w-full bg-white/20 text-white mb-3"
          placeholder="Full Name"
        />

        {/* Photo */}
        <label className="label pb-1">
          <span className="label-text font-bold">
            <i>Photo URL</i>
          </span>
        </label>
        <input
          type="text"
          name="photo"
          className="input input-bordered input-primary w-full bg-white/20 text-white mb-3"
          placeholder="Image URL"
        />

        {/* Email */}
        <label className="label pb-1">
          <span className="label-text font-bold">
            <i>Email</i>
          </span>
        </label>
        <input
          type="email"
          name="email"
          className="input input-bordered input-primary w-full bg-white/20 text-white mb-3"
          placeholder="Email Address"
        />

        {/* Password */}
        <label className="label pb-1">
          <span className="label-text font-bold">
            <i>Password</i>
          </span>
        </label>
        <div className="relative mb-3">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            className="input input-bordered input-primary w-full bg-white/20 text-white"
            placeholder="Password"
          />

          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="btn btn-xs absolute right-2 top-2"
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Terms */}
        <div className="flex gap-2 pb-4">
          <input
            type="checkbox"
            name="terms"
            className="checkbox checkbox-info"
          />
          <p className="text-white">I agree to Terms & Policy</p>
        </div>

        {/* Register Button */}
        <button className="btn bg-black text-white w-full rounded-xl mb-3">
          <FaUserPlus className="text-2xl" /> Create Account
        </button>

        {/* Google Login */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="btn bg-black text-white w-full rounded-xl"
        >
          <FcGoogle className="text-2xl" />
          {loading ? "Loading..." : "Continue with Google"}
        </button>
      </form>

      {/* ERRORS */}
      {errorMessage && <p className="text-red-400 mt-2">{errorMessage}</p>}
    </motion.div>
  );
}
