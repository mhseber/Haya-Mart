"use client";

import auth from "@/Firebase/firebase.init";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaPercent, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoFlash } from "react-icons/io5";
import Swal from "sweetalert2";
import {
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

import React, { useState } from "react";

const OfferZonePage = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "Winter Collection Sale",
      discount: "Up to 50% Off",
      mainPrice: 1500,
      offerPrice: 750,
      desc: "Jual Jaket Hoodie Dakwah Islami Prophet Muhammad Bonus Topi + Sticker | Haya Mart Stay cozy this winter with our premium jackets and hoodies.",
      img: "https://down-id.img.susercontent.com/file/dc9ff75d510a1f2e3853f81db1f2951c",
    },
    {
      id: 2,
      title: "Buy One Get One Attar Combo With Free T-Shirt",
      discount: "Limited Time Offer",
      mainPrice: 990,
      offerPrice: 590,
      desc: "Grab your favorite perfumes with our BOGO deal!",
      img: "https://i.ibb.co.com/LDjmH30Y/offerb1g1.png",
    },
    {
      id: 3,
      title: "Exclusive New Arrivals",
      discount: "20% Off",
      mainPrice: 990,
      offerPrice: 792,
      desc: "DROP SHOULDER BACK CANVAS - CYCLE BLACK | Haya Mart Elevate your style with our latest collection of trendy DROP SHOULDER.",
      img: "https://backend.oubd.shop/uploads/all/aE7FvFZNnJhf5iMNVbCfAcwSuLXduSXvn4rQK250.webp",
    },
    {
      id: 4,
      title: "Classic Flex Black Loafer (Code: M42)",
      discount: "Flat 30% Off",
      mainPrice: 2000,
      offerPrice: 1000,
      desc: "Celebrate this Eid with elegance! Shop premium Loafer at discounted prices.",
      img: "https://ummahbd.com/wp-content/uploads/2025/04/1-M-42.jpg",
    },
    {
      id: 5,
      title: "Luxury Premium Perfume Combo",
      discount: "3 For 999",
      mainPrice: 1990,
      offerPrice: 999,
      desc: "Ready Stock] Kahf Eau De Toilette Men's Perfume 100ml + Kah",
      img: "https://down-my.img.susercontent.com/file/my-11134207-7r98v-luatqi8wqv9pa3",
    },
    {
      id: 6,
      title: "Hot Summer Deals",
      discount: "Up to 40% Off",
      mainPrice: 500,
      offerPrice: 300,
      desc: "Stay cool this summer with our soft, breathable T-shirts — perfect for everyday comfort and effortless style.",
      img: "https://backend.oubd.shop/uploads/all/rVaQcw3P68luohmiBsXd4xWHLa6Ff2wmS0DtF67Y.webp",
    },
  ];

  // Offer Confirm Order Handler ///////////////////////

  const handleConfirmOfferOrder = (offer) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to place order",
        confirmButtonText: "Login Now",
      }).then(() => {
        router.push("/AuthUsers");
      });
      return;
    }

    const order = {
      id: Date.now(),
      name: offer.title,
      price: offer.offerPrice,
      img: offer.img,
      status: "Confirmed",
      type: "offer",
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    Swal.fire({
      icon: "success",
      title: "Order Confirmed 🎉",
      text: "Your offer order has been placed successfully!",
    });

    setSelectedOffer(null);
  };

  // Wishlist Handler/////////////////////////////////////

  const handleAddToWishlist = (offer) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to add items to your wishlist",
        confirmButtonText: "Login Now",
      }).then(() => {
        router.push("/AuthUsers");
      });
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.some(
      (p) => p.id === offer.id && p.type === "offer",
    );

    if (exists) {
      Swal.fire({
        icon: "info",
        title: "Already Added",
        timer: 1200,
        showConfirmButton: false,
      });
      return;
    }

    wishlist.push({
      id: offer.id,
      name: offer.title,
      price: offer.offerPrice,
      img: offer.img,
      type: "offer",
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    Swal.fire({
      icon: "success",
      title: "Added to Wishlist ❤️",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  // Offer Add To Cart Handler ///////////////////////
  const handleAddToCart = (offer) => {
    // ❌ User not logged in
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login to add items to your cart",
        confirmButtonText: "Login Now",
      }).then(() => {
        router.push("/AuthUsers");
      });
      return;
    }

    // ✅ Get existing cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // ❌ Already exists (offer check)
    const exists = cart.some((p) => p.id === offer.id && p.type === "offer");

    if (exists) {
      Swal.fire({
        icon: "info",
        title: "Already in Cart",
        timer: 1200,
        showConfirmButton: false,
      });
      return;
    }

    // ✅ Add offer to cart
    cart.push({
      id: offer.id,
      name: offer.title,
      price: offer.offerPrice,
      img: offer.img,
      quantity: 1,
      type: "offer",
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
      icon: "success",
      title: "Added to Cart 🛒",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white py-20 px-4 md:px-10 relative overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold mb-4 uppercase tracking-[0.2em]"
        >
          <IoFlash className="text-yellow-400" /> Flash Sale is Live
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase">
          Special{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Offer
          </span>{" "}
          Zone
        </h1>
        <div className="h-1.5 w-32 bg-sky-500 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
      </motion.div>

      {/* Offers List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12 relative z-10">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Card Glass Container */}
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-4 md:p-8 shadow-2xl transition-all duration-500 group-hover:border-sky-500/40 group-hover:bg-white/[0.05]">
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Image Section with Creative Badge */}
                <div className="relative w-full lg:w-2/5 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    src={offer.img}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-5 py-2 rounded-2xl font-black text-lg shadow-lg flex items-center gap-2 -rotate-6">
                    <FaPercent /> {offer.discount}
                  </div>
                </div>

                {/* Info Section */}
                <div className="w-full lg:w-3/5 text-center lg:text-left">
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 group-hover:text-sky-400 transition-colors leading-tight">
                    {offer.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                    {offer.desc}
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-10">
                    <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-gray-500 line-through text-sm">
                        Regular Price
                      </p>
                      <p className="text-xl font-medium text-gray-300">
                        ৳{offer.mainPrice}
                      </p>
                    </div>
                    <div className="px-6 py-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
                      <p className="text-sky-400 text-sm font-bold uppercase tracking-widest">
                        Offer Price
                      </p>
                      <p className="text-4xl font-black text-sky-400">
                        ৳{offer.offerPrice}
                      </p>
                    </div>
                  </div>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button
                      onClick={() => setSelectedOffer(offer)}
                      className="px-10 py-4 bg-sky-500 text-black font-black rounded-2xl hover:bg-sky-400 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(56,189,248,0.3)]"
                    >
                      GRAB THIS OFFER
                    </button>

                    <button
                      onClick={() => handleAddToCart(offer)}
                      className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:text-sky-400 transition-all"
                    >
                      <IoCartOutline size={28} />
                    </button>

                    <button
                      onClick={() => handleAddToWishlist(offer)}
                      className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:text-pink-500 transition-all"
                    >
                      <FaRegHeart size={26} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Modern AnimatePresence Modal --- */}
      <AnimatePresence>
        {selectedOffer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOffer(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#0f172a] border border-white/10 rounded-[3rem] p-8 max-w-2xl w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <img
                  src={selectedOffer.img}
                  className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-[2rem]"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-sky-400 mb-2">
                    {selectedOffer.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {selectedOffer.desc}
                  </p>

                  <div className="mb-8">
                    <p className="text-gray-500 line-through text-xs">
                      Regular: ৳{selectedOffer.mainPrice}
                    </p>
                    <p className="text-3xl font-black text-white">
                      ৳{selectedOffer.offerPrice}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleConfirmOfferOrder(selectedOffer)}
                      className="flex-1 py-4 bg-sky-500 text-black font-black rounded-xl hover:bg-sky-400 transition-all flex items-center justify-center gap-2"
                    >
                      <IoCheckmarkCircleOutline size={22} /> CONFIRM
                    </button>
                    <button
                      onClick={() => setSelectedOffer(null)}
                      className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-red-500/20 hover:text-red-500 transition-all"
                    >
                      <IoCloseCircleOutline size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OfferZonePage;
