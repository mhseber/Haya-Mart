// import Image from "next/image";
// import React from "react";
// import SocialIcons from "../Or-Components/NavIcons/SocialIcons";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
//         <aside>
//           <div className="text-center sm:text-left space-y-2">
//             <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">
//               Haya Mart
//             </h1>
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Empowering the Muslim lifestyle since 2025. <br /> Dedicated to
//               providing quality products that align <br /> with faith, culture,
//               and modern living
//             </p>
//             <section className="mt-8">
//               <div>
//                 <p className="text-gray-300 font-extrabold text-xl">
//                   we accept :
//                 </p>
//               </div>
//               <div className="flex gap-2 mt-2">
//                 <Image
//                   src="/extray/payment.png"
//                   alt="Visa Card"
//                   width={290}
//                   height={50}
//                   className="object-contain "
//                 />
//               </div>
//             </section>
//             <section>
//               <div className="divider divider-primary w-full"></div>
//               <p className="text-xs text-gray-500">
//                 © {new Date().getFullYear()}{" "}
//                 <span className="to-blue-400">Haya Mart</span>. All rights
//                 reserved.
//               </p>
//               <p>Design & Developed by MH.SEBER</p>
//             </section>
//           </div>
//         </aside>
//         <nav>
//           <h6 className="footer-title">Quick Links</h6>
//           <a className="link link-hover">Security</a>
//           <a className="link link-hover">Investment</a>
//           <a className="link link-hover">Track Order</a>
//           <a className="link link-hover">Store Locator</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Legal</h6>
//           <a className="link link-hover">Return and Exchange</a>
//           <a className="link link-hover">Terms & Conditions</a>
//           <a className="link link-hover">Privacy Policy</a>
//         </nav>
//         <nav>
//           <h6 className="footer-title">Contact us</h6>
//           <a className="link link-hover">+88017998894176</a>
//           <a className="link link-hover">sebermh@gmail.com</a>
//           <div className="mt-4">
//             <h6 className="footer-title">Follow Us</h6>
//             <p>
//               <SocialIcons />
//             </p>
//           </div>
//         </nav>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import SocialIcons from "../Or-Components/NavIcons/SocialIcons";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content p-10">
      <div className="footer sm:footer-horizontal">
        {/* ----- Brand Section ----- */}
        <aside>
          <div className="text-center sm:text-left space-y-2">
            <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide">
              Haya Mart
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering the Muslim lifestyle since 2025. <br /> Dedicated to
              providing quality products that align <br /> with faith, culture,
              and modern living.
            </p>

            {/* Payment Section */}
            <section className="mt-8">
              <p className="text-gray-300 font-extrabold text-xl">
                We Accept :
              </p>
              <div className="flex gap-2 mt-2">
                <Image
                  src="/extray/payment.png"
                  alt="Payment Methods"
                  width={290}
                  height={50}
                  className="object-contain"
                />
              </div>
            </section>
          </div>
        </aside>

        {/* ----- Quick Links ----- */}
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Investment</a>
          <a className="link link-hover">Track Order</a>
          <a className="link link-hover">Store Locator</a>
        </nav>

        {/* ----- Legal ----- */}
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Return and Exchange</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>

        {/* ----- Contact ----- */}
        <nav>
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover">+88017998894176</a>
          <a className="link link-hover">sebermh@gmail.com</a>

          <div className="mt-4">
            <h6 className="footer-title">Follow Us</h6>
            <SocialIcons />
          </div>
        </nav>
      </div>

      {/* ----- Animated Divider ----- */}
      <motion.div
        className="divider divider-primary w-full my-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* ----- Footer Bottom ----- */}
      <div className="text-center space-y-1">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">Haya Mart</span>. All
          rights reserved.
        </p>
        <p className="text-gray-400 text-xs">Design & Developed by MH.SEBER</p>
      </div>
    </footer>
  );
};

export default Footer;
