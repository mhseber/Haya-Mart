"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/Review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20  py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
          🌙 What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-3">
          Hear from those who embraced modesty with Haya Mart
        </p>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-w-3xl mx-auto"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center text-center bg-black  shadow-lg rounded-2xl p-8 md:p-12 mx-6 my-8">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="pt-4 text-5xl text-blue-900">
                <FaQuoteLeft />
              </p>
              <p className="py-6 text-gray-300 leading-relaxed italic">
                “{review.details}”
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-300">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
