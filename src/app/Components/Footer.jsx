// "use client";
// import Image from "next/image";
// import React from "react";
// import { motion } from "framer-motion";
// import SocialIcons from "../Or-Components/NavIcons/SocialIcons";
// import logo from "../../../public/logo/hm-logo2.png";

// const Footer = () => {
//   return (
//     <footer className="bg-base-200 text-base-content p-10">
//       <div className="footer sm:footer-horizontal">
//         {/* ----- Brand Section ----- */}
//         <aside>
//           <div className="space-y-2 text-center sm:text-left">
//             {/* Logo + Brand */}
//             <div className="flex flex-col sm:flex-row items-center gap-4">
//               <div className="relative">
//                 <Image
//                   src={logo}
//                   alt="Haya Mart Logo"
//                   width={70} // ফুটারের জন্য একটু স্ট্যান্ডার্ড সাইজ
//                   height={70}
//                   className="object-contain transition-all duration-500 hover:rotate-[10deg]"
//                   // ফিল্টার সরিয়ে দেওয়া হয়েছে যাতে লোগো ক্লিয়ার দেখায়
//                 />
//               </div>

//               {/* Brand Name & Slogan Section */}
//               <div className="flex flex-col items-center sm:items-start">
//                 <h3 className="font-extrabold text-3xl sm:text-4xl tracking-tighter leading-none">
//                   <motion.span
//                     animate={{
//                       color: ["#F0F9FF", "#7dd3fc", "#0ea5e9"],
//                       textShadow: [
//                         "0px 0px 10px #0ea5e950",
//                         "0px 0px 0px #0ea5e900",
//                       ],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                     }}
//                     className="inline-block"
//                   >
//                     Haya
//                   </motion.span>
//                   <span className="text-white ml-2">Mart</span>
//                 </h3>

//                 {/* Slogan added for professional look */}
//                 <p className="text-[10px] sm:text-[12px] uppercase tracking-[4px] text-sky-400 font-semibold mt-1">
//                   More Than Fashion, It's a Lifestyle
//                 </p>
//               </div>
//             </div>

//             {/* Description */}
//             <p className="text-gray-300 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
//               Empowering the Muslim lifestyle since 2025.
//               <br />
//               Dedicated to providing quality products that align
//               <br />
//               with faith, culture, and modern living.
//             </p>

//             {/* Payment Section */}
//             <section className="pt-4">
//               <p className="text-gray-300 font-bold text-lg mb-2">We Accept:</p>

//               <div className="flex justify-center sm:justify-start">
//                 <Image
//                   src="/extray/payment.png"
//                   alt="Payment Methods"
//                   width={260}
//                   height={40}
//                   className="object-contain"
//                 />
//               </div>
//             </section>
//           </div>
//         </aside>

//         {/* ----- Quick Links ----- */}
//         <nav>
//           <h6 className="footer-title">Quick Links</h6>
//           <a className="link link-hover">Security</a>
//           <a className="link link-hover">Investment</a>
//           <a className="link link-hover">Track Order</a>
//           <a className="link link-hover">Store Locator</a>
//         </nav>

//         {/* ----- Legal ----- */}
//         <nav>
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Return and Exchange</a>
//           <a className="link link-hover">Terms & Conditions</a>
//           <a className="link link-hover">Privacy Policy</a>
//         </nav>

//         {/* ----- Contact ----- */}
//         <nav>
//           <h6 className="footer-title">Contact Us</h6>
//           <a className="link link-hover">+88017998894176</a>
//           <a className="link link-hover">sebermh@gmail.com</a>

//           <div className="mt-4">
//             <h6 className="footer-title">Follow Us</h6>
//             <SocialIcons />
//           </div>
//         </nav>
//       </div>

//       {/* ----- Animated Divider ----- */}
//       <motion.div
//         className="divider divider-primary w-full my-6"
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{
//           duration: 1,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//       />

//       {/* ----- Footer Bottom ----- */}
//       <div className="text-center space-y-1">
//         <p className="text-xs text-gray-500">
//           © {new Date().getFullYear()}{" "}
//           <span className="text-blue-400 font-semibold">Haya Mart</span>. All
//           rights reserved.
//         </p>
//         <p className="text-gray-400 text-xs">Design & Developed by MH.SEBER</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../Or-Components/NavIcons/SocialIcons";
import logo from "../../../public/logo/hm-logo2.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#000814] text-white pt-16 pb-8 overflow-hidden border-t border-sky-900/30">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* ----- Brand Section ----- */}
          <aside className="space-y-6">
            <div className="flex flex-col items-center md:items-start gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative bg-sky-900/20 p-2 rounded-2xl backdrop-blur-sm border border-sky-500/20"
              >
                <Image
                  src={logo}
                  alt="Haya Mart Logo"
                  width={65}
                  height={65}
                  className="object-contain"
                />
              </motion.div>

              <div className="flex flex-col items-center md:items-start">
                <h3 className="font-extrabold text-3xl tracking-tighter leading-none">
                  <motion.span
                    animate={{ color: ["#F0F9FF", "#7dd3fc", "#0ea5e9"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    Haya
                  </motion.span>
                  <span className="text-white ml-2">Mart</span>
                </h3>
                <p className="text-[10px] uppercase tracking-[3px] text-sky-400 font-bold mt-1">
                  Lifestyle & Modesty
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating your lifestyle with modesty and grace. Since 2025, Haya
              Mart has been your trusted partner for quality and faith-inspired
              fashion.
            </p>

            <div className="flex flex-col gap-3 text-sm text-gray-300 items-center md:items-start">
              <div className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <FaPhoneAlt className="text-sky-500" />{" "}
                <span>+88017998894176</span>
              </div>
              <div className="flex items-center gap-3 hover:text-sky-400 transition-colors">
                <FaEnvelope className="text-sky-500" />{" "}
                <span>sebermh@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 hover:text-sky-400 transition-colors text-center md:text-left">
                <FaMapMarkerAlt className="text-sky-500 shrink-0" />{" "}
                <span>Gandaria, Dhaka, Bangladesh</span>
              </div>
            </div>
          </aside>

          {/* ----- Navigation Links ----- */}
          <nav className="flex flex-col gap-4">
            <h6 className="text-white font-bold text-lg border-b-2 border-sky-500 w-fit mx-auto md:mx-0 pb-1">
              Explore
            </h6>
            <div className="flex flex-col gap-2 text-gray-400">
              {[
                "Outfits",
                "Offer Zone",
                "New Arrivals",
                "Best Sellers",
                "Track Order",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-sky-400 hover:translate-x-2 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* ----- Legal & Support ----- */}
          <nav className="flex flex-col gap-4">
            <h6 className="text-white font-bold text-lg border-b-2 border-sky-500 w-fit mx-auto md:mx-0 pb-1">
              Support
            </h6>
            <div className="flex flex-col gap-2 text-gray-400">
              {[
                "Terms & Conditions",
                "Privacy Policy",
                "Return Policy",
                "Store Locator",
                "Help Center",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-sky-400 hover:translate-x-2 transition-all duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>

          {/* ----- Social & Payment ----- */}
          <div className="flex flex-col gap-6 items-center md:items-start">
            <div>
              <h6 className="text-white font-bold text-lg mb-4">
                Follow Our Journey
              </h6>
              <div className="bg-sky-900/10 p-4 rounded-xl border border-sky-500/10 backdrop-blur-md">
                <SocialIcons />
              </div>
            </div>

            <div className="w-full">
              <h6 className="text-white font-bold text-sm mb-3 text-center md:text-left uppercase tracking-widest">
                Secure Payment
              </h6>
              <div className="bg-white/5 p-3 rounded-lg flex justify-center md:justify-start">
                <Image
                  src="/extray/payment.png"
                  alt="Payment Methods"
                  width={240}
                  height={40}
                  className="object-contain brightness-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ----- Divider ----- */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-sky-900/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#000814] px-4 text-sky-500/50 text-2xl italic font-serif">
              Haya Mart
            </span>
          </div>
        </div>

        {/* ----- Footer Bottom ----- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-sky-400 font-semibold">Haya Mart</span>.
            Crafting Modesty with Love.
          </p>
          <div className="flex items-center gap-1">
            <span>Powered by</span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white font-bold tracking-widest"
            >
              MH.SEBER
            </motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
