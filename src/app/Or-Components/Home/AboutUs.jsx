import React from "react";
import "./Style/About.css";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="aboutUs-item bg-cover bg-center bg-no-repeat text-white py-16 my-16">
      <div className="bg-black/50 flex flex-col md:flex-row justify-center items-center text-center md:text-left px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-14 rounded-xl mx-auto max-w-6xl">
        <div className="max-w-lg space-y-4">
          <h2 className="uppercase text-2xl sm:text-3xl font-bold text-white">
            🕌 About Haya Mart
          </h2>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Welcome to Haya Mart, a modern Islamic clothing brand dedicated to
            promoting modesty with elegance. Founded by Mahamudul Hasan Seber,
            Haya Mart was created with a vision to combine traditional Islamic
            values with contemporary fashion — offering stylish, comfortable,
            and modest attire for everyone who embraces simplicity and faith.
          </p>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            At Haya Mart, we believe that modesty is beauty. Our collection
            reflects the essence of Haya — purity, dignity, and grace — through
            carefully designed outfits that uphold both comfort and class. From
            everyday wear to special occasions, each piece is made with love,
            premium quality, and a sense of spiritual connection.
          </p>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Join us on this journey of faith and fashion, where modesty meets
            modernity.
          </p>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base font-semibold">
            ✨ Haya Mart — Dress with Dignity, Live with Haya.
          </p>
          <Link href="/Outfits">
            <button className="btn btn-sm border-2 border-black text-white font-semibold hover:bg-black hover:text-blue-800 transition duration-300">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
