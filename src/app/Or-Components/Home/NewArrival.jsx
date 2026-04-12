"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { FaCartPlus, FaRegHeart, FaShoppingBag, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/Firebase/firebase.init";

import {
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const NewArrival = () => {
  const [items, setItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("");
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch("/NewArrival.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

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

  //////////////////////////////////////// Wishlist Handler ////////////////////////

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

    const exists = wishlist.some((p) => p.id === item.id);
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
      id: item.id,
      name: item.title,
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

    // ❌ Already exists
    const exists = cart.some((p) => p.id === item.id);
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
      id: item.id,
      name: item.title,
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

  return (
    <div className="px-6">
      {/* CSS Fix for Swiper Pagination - Place this inside your return div */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
  /* ইন-অ্যাক্টিভ ডটগুলোর কালার (সাদা বা হালকা আকাশী দিতে পারেন) */
  .mySwiper .swiper-pagination-bullet { 
    background: #ffffff !important; 
    opacity: 0.4 !important;
    transition: all 0.3s ease; 
  }

  /* অ্যাক্টিভ ডটের কালার (Sky Blue) */
  .mySwiper .swiper-pagination-bullet-active { 
    background: #38bdf8 !important; /* আপনার থিমের Sky-400 কালার */
    opacity: 1 !important;
    width: 24px !important; 
    border-radius: 10px !important; 
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.5); /* হালকা গ্লো */
  }

  /* ডটগুলোর কন্টেইনার পজিশন ঠিক করা */
  .mySwiper .swiper-pagination {
    bottom: 5px !important;
  }
`,
        }}
      />
      {/* title  */}
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start mb-12 pt-5"
      >
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2.5">
            <FaStar className="text-2xl md:text-3xl text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            <h2 className="text-2xl md:text-4xl text-white font-black tracking-tight uppercase">
              New <span className="text-sky-500">Arrival</span>
            </h2>
          </div>

          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full mt-2" />
        </div>
        <div className="divider divide-gray-300"></div>
      </motion.section>

      <section>
        <Swiper
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={18}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1024: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 18 },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card bg-base-100 w-full shadow-sm h-[500px] flex flex-col">
                <motion.figure
                  className="h-[280px] overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.figure>
                <div className="card-body flex flex-col justify-between">
                  <div>
                    <h2 className="card-title uppercase text-base">
                      {item.title}
                    </h2>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-sm text-blue-300 pt-3">
                        <span className="text-sky-500">Price : </span> ৳{" "}
                        {item.price}
                      </p>
                      {/* wishlist btn */}
                      <button
                        onClick={() => handleAddToWishlist(item)}
                        className="btn btn-sm rounded-2xl border-sky-700 mt-2"
                      >
                        <FaRegHeart className="text-lg text-sky-500" />
                      </button>
                    </div>
                  </div>
                  <div className="card-actions justify-center mt-4">
                    <button
                      onClick={() => setSelectedProduct(item)}
                      className="btn  btn-sm border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-500 transition duration-300 bg-black"
                    >
                      <FaShoppingBag className="text-lg" />
                      Order Now
                    </button>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="btn  btn-sm border-2 border-black text-blue-400 font-semibold hover:bg-black hover:text-blue-800 transition duration-300"
                    >
                      <FaCartPlus className="text-lg" />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* order btn model */}
      {selectedProduct && (
        <dialog open className="modal modal-open">
          <div className="modal-box bg-slate-900 text-white max-w-lg">
            <h3 className="font-bold text-xl mb-3">Confirm Your Order</h3>

            <img
              src={selectedProduct.img}
              className="w-full h-80 object-cover rounded-lg mb-4"
            />

            <p className="font-semibold">{selectedProduct.title}</p>
            <p className="text-sky-400 mt-1">
              Price: ৳ {selectedProduct.price}
            </p>
            {/* Sizes */}
            <div className="mt-4 sm:mt-2">
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

            <div className="modal-action flex justify-between">
              <button
                className="btn btn-outline bg-black text-blue-400"
                onClick={() => setSelectedProduct(null)}
              >
                <IoCloseCircleOutline className="text-2xl" />
              </button>

              <button
                className="btn btn-outline  bg-black  border-2 border-sky-300 text-white font-semibold hover:bg-black hover:text-blue-400 transition duration-300"
                onClick={() => handleConfirmOrder(selectedProduct)}
              >
                <IoCheckmarkCircleOutline className="text-xl" />
                Confirm Now
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default NewArrival;
