"use client";

import auth from "@/Firebase/firebase.init";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaCartPlus, FaRegHeart, FaShoppingBag } from "react-icons/fa";
import Swal from "sweetalert2";

const TShirtMo = ({ item, onClose }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const [user] = useAuthState(auth);

  if (!item) return null;

  // Wishlist Handler/////////////////////////////////////

  const handleAddToWishlist = (item) => {
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

    const exists = wishlist.some((p) => p.code === item.code);
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
      code: item.code,
      name: item.name,
      price: item.price,
      img: item.img,
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    Swal.fire({
      icon: "success",
      title: "Added to Wishlist ❤️",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  // add to cart handler ///////////////////////////////
  const handleAddToCart = (item) => {
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

    // ❌ Already exists (use code instead of id)
    const exists = cart.some((p) => p.code === item.code);
    if (exists) {
      Swal.fire({
        icon: "info",
        title: "Already in Cart",
        timer: 1200,
        showConfirmButton: false,
      });
      return;
    }

    // ✅ Add to cart
    cart.push({
      code: item.code, // ✅ unique
      name: item.name, // ✅ correct
      price: item.price,
      img: item.img,
      quantity: 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
      icon: "success",
      title: "Added to Cart 🛒",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  //////////////////////////////// Order Handler ////////////////////////////

  const handleConfirmOrder = (product) => {
    setSelectedProduct(null);

    // ✅ Dummy order save (future API ready)
    const order = {
      id: Date.now(),
      productName: product.title,
      price: product.price,
      status: "Confirmed",
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));

    Swal.fire({
      icon: "success",
      title: "Order Confirmed 🎉",
      text: "Your order has been placed successfully!",
    }).then(() => {
      router.push("/Dashboard/User"); // User dashboard
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-[#111] text-[#38bdf8] rounded-2xl p-4 sm:p-5 md:p-6 w-[95%] sm:w-[90%] md:w-[70%] lg:w-[60%] flex flex-col md:flex-row shadow-2xl border border-[#38bdf8] font-['Noto_Naskh_Arabic']"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
          {/* Left: Image + Description */}
          <div className="md:w-1/2 flex flex-col items-center">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-xl w-full max-h-[220px] sm:max-h-[280px] md:max-h-[350px] object-cover border border-[#38bdf8] shadow-md"
            />
            <p className="text-xs sm:text-sm md:text-base mt-3 text-gray-300 text-center leading-relaxed px-2">
              {item.description}
            </p>
          </div>

          {/* Right: Info */}
          <div className="md:w-1/2 md:pl-6 flex flex-col justify-between mt-4 md:mt-0">
            <div>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2">
                {item.name}
              </h2>

              <div className="mt-4 sm:mt-6">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  <b>Code :</b> {item.code}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  <b>Color :</b> {item.color}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mb-1">
                  <b>Category :</b> {item.category}
                </p>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                  <b className="text-sky-500">Price :</b> ৳ {item.price}.00
                </p>
              </div>

              {/* Sizes */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-xs sm:text-sm text-sky-500 font-semibold mb-2">
                  Select Size :{" "}
                  <span className="text-[#38bdf8]">{selectedSize || ""}</span>
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["S", "M", "L", "XL", "XXL"].map((size) => (
                    <button
                      key={size}
                      onClick={() =>
                        setSelectedSize(selectedSize === size ? "" : size)
                      }
                      className={`border px-3 sm:px-4 py-[3px] sm:py-1 rounded-lg text-xs sm:text-sm transition-all ${
                        selectedSize === size
                          ? "bg-[#38bdf8] text-black border-[#38bdf8]"
                          : "text-[#38bdf8] border-[#38bdf8] hover:bg-[#38bdf8] hover:text-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
                <button
                  onClick={() => handleConfirmOrder(item)}
                  className="btn btn-xs lg:btn-sm sm:btn-sm border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-800 transition duration-300"
                >
                  <FaShoppingBag className="text-sm sm:text-lg" />
                  Order Now
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="btn btn-outline lg:btn-sm btn-xs sm:btn-sm"
                >
                  <FaCartPlus className="text-sm sm:text-lg" />
                  Add To Cart
                </button>
                <button
                  onClick={() => handleAddToWishlist(item)}
                  className="btn btn-xs sm:btn-sm rounded-xl border-sky-700"
                >
                  <FaRegHeart className="text-sm sm:text-lg text-sky-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-2  right-4 text-[#38bdf8] text-xl sm:text-2xl hover:text-white transition"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TShirtMo;
