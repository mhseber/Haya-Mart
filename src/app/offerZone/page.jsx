"use client";

import auth from "@/Firebase/firebase.init";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
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
      img: "https://ummahmartbd.com/wp-content/uploads/2024/03/Copy-of-Musterd-Oil-24.jpg",
    },
    {
      id: 3,
      title: "Exclusive New Arrivals",
      discount: "20% Off",
      mainPrice: 990,
      offerPrice: 792,
      desc: "New styles just dropped — get yours before they're gone!",
      img: "https://taibahstyle.com/wp-content/uploads/2024/01/Maroon-Raglan-768x768-1.webp",
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
      desc: "Crazy Deals on Perfume and Bath and Body Combos I Best Perfumes Gift Set I Bella Vita Luxury",
      img: "https://bellavitaluxury.co.in/cdn/shop/files/678-548-01_36118912-21f2-4fd8-a150-9bbd67587bfc.jpg?v=1724311677&width=800",
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
      (p) => p.id === offer.id && p.type === "offer"
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
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-blue-950 text-white py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-sky-400 mb-12 mt-16"
      >
        ✨ Special Offer Zone ✨
      </motion.h1>

      <div className="grid grid-cols-1 gap-8 px-6 md:px-16">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900 to-sky-900 p-4 rounded-2xl shadow-lg hover:shadow-sky-500/40 transition-all"
          >
            <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-around gap-6 bg-[#0a192f] p-6 rounded-2xl">
              {/* Image */}
              <div className="flex-shrink-0 w-full md:w-1/3">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="rounded-xl w-full h-[400px] object-cover shadow-md"
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left md:w-2/3">
                <h3 className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                  {offer.title}
                </h3>
                <p className="text-xl text-yellow-400 font-bold mb-2">
                  {offer.discount}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed pt-3">
                  {offer.desc}
                </p>

                {/* Price Section */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <p className="text-gray-400 line-through text-lg">
                    ৳{offer.mainPrice}
                  </p>
                  <p className="text-sky-400 text-2xl font-bold">
                    ৳{offer.offerPrice}
                  </p>
                </div>

                {/* Buttons */}
                <section className="flex gap-2 mt-6">
                  <button
                    onClick={() => setSelectedOffer(offer)}
                    className="btn btn-lg border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-800 transition duration-300"
                  >
                    Grab Offer
                  </button>

                  <button
                    onClick={() => handleAddToCart(offer)}
                    className="btn btn-sm rounded-2xl border-sky-700 mt-2 ml-4"
                  >
                    <IoCartOutline className="text-lg text-sky-500" />
                  </button>

                  <button
                    onClick={() => handleAddToWishlist(offer)}
                    className="btn btn-sm rounded-2xl border-sky-700 mt-2"
                  >
                    <FaRegHeart className="text-lg text-sky-500" />
                  </button>
                </section>
              </div>
            </section>
          </motion.div>
        ))}
      </div>
      {/* Confirm Offer Modal */}
      {selectedOffer && (
        <dialog open className="modal modal-open">
          <div className="modal-box bg-slate-900 text-white max-w-lg w-full">
            <h3 className="font-bold text-xl mb-4 text-sky-400">
              Confirm Your Offer
            </h3>

            <img
              src={selectedOffer.img}
              alt={selectedOffer.title}
              className="w-full h-64 sm:h-72 object-cover rounded-xl mb-4"
            />

            <h4 className="text-lg font-semibold">{selectedOffer.title}</h4>

            <p className="text-sm text-gray-300 mt-2">{selectedOffer.desc}</p>

            <div className="flex items-center gap-3 mt-4">
              <p className="text-gray-400 line-through">
                ৳{selectedOffer.mainPrice}
              </p>
              <p className="text-sky-400 text-2xl font-bold">
                ৳{selectedOffer.offerPrice}
              </p>
            </div>

            <div className="modal-action flex justify-between mt-6">
              <button
                onClick={() => setSelectedOffer(null)}
                className="btn btn-outline"
              >
                <IoCloseCircleOutline className="text-2xl" />
              </button>

              <button
                onClick={() => handleConfirmOfferOrder(selectedOffer)}
                className="btn border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-800 transition duration-300"
              >
                <IoCheckmarkCircleOutline className="text-xl mr-1" />
                Confirm Order
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default OfferZonePage;
