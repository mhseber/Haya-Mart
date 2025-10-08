// import React from "react";

// const SONewsletter = () => {
//   return (
//     <div className="my-20">
//       <div
//         className="hero "
//         style={{
//           backgroundImage:
//             "url(https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148906367.jpg)",
//         }}
//       >
//         <div className="hero-overlay"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="p-10">
//             <h1 className="mb-5 text-4xl font-bold">
//               Subscribe Our Newsletter
//             </h1>
//             <p className="mb-5">
//               Get notification about coupons, product updates and good tips.
//             </p>
//             {/* input */}
//             <section>
//               <div className="join">
//                 <div>
//                   <label className="input validator join-item">
//                     <svg
//                       className="h-[1em] opacity-50"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 24 24"
//                     >
//                       <g
//                         strokeLinejoin="round"
//                         strokeLinecap="round"
//                         strokeWidth="2.5"
//                         fill="none"
//                         stroke="currentColor"
//                       >
//                         <rect width="20" height="16" x="2" y="4" rx="2"></rect>
//                         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
//                       </g>
//                     </svg>
//                     <input
//                       type="email"
//                       placeholder="Enter valid email address"
//                       required
//                     />
//                   </label>
//                   <div className="validator-hint hidden">
//                     Enter valid email address
//                   </div>
//                 </div>
//                 <button className="btn btn-neutral join-item">Subscribe</button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SONewsletter;

"use client";

import { motion } from "framer-motion";
import React from "react";

const SubscribeSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-[1300px] justify-center mx-auto rounded-3xl py-16 overflow-hidden mb-10"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/flat-design-polygonal-background_23-2148906367.jpg')",
        }}
      ></div>

      {/* Dark overlay to improve readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          📩 Subscribe to Our Newsletter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-200 mt-3"
        >
          Get exclusive offers, Islamic fashion updates & modest-style tips.
        </motion.p>

        {/* Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white/80 backdrop-blur-md shadow-lg p-3 rounded-full border border-white transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-center w-full sm:w-auto flex-grow gap-3 px-3">
            <svg
              className="h-6 w-6 text-gray-700"
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
              className="w-full outline-none bg-transparent text-gray-800 placeholder-gray-500"
              required
            />
          </div>

          <button className="btn   px-6 rounded-full text-white font-semibold hover:bg-black hover:text-blue-800 transition-all duration-300">
            Subscribe
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SubscribeSection;
