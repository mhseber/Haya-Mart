"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaStar, FaTruck, FaCreditCard } from "react-icons/fa";
import { MdOutlineAssignmentReturn } from "react-icons/md";
import React, { useState } from "react";

const TiltCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group h-72 w-full rounded-[2.5rem] p-8 border border-sky-900/30 overflow-hidden transition-all duration-500 cursor-pointer"
    >
      {/* --- Hover Background Layer --- */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-sky-600 via-blue-700 to-navy-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.9 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Default Subtle Background (Not Hovered) */}
      <div
        className={`absolute inset-0 z-0 bg-[#000d1a] transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
      />

      {/* --- Content Section --- */}
      <div
        style={{ transform: "translateZ(60px)" }}
        className="relative z-10 flex flex-col items-center text-center h-full justify-center"
      >
        {/* Animated Icon Container */}
        <motion.div
          animate={
            isHovered
              ? { scale: 1.2, rotate: [0, 10, -10, 0] }
              : { y: [0, -8, 0] }
          }
          transition={
            isHovered ? { duration: 0.5 } : { duration: 4, repeat: Infinity }
          }
          className={`text-5xl mb-6 transition-colors duration-300 ${isHovered ? "text-white" : item.iconColor}`}
        >
          {item.icon}
        </motion.div>

        <h3
          className={`text-xl font-black mb-3 transition-colors duration-300 ${isHovered ? "text-white" : "text-sky-100"}`}
        >
          {item.title}
        </h3>

        <p
          className={`text-sm font-medium leading-relaxed transition-colors duration-300 ${isHovered ? "text-blue-50" : "text-gray-400"}`}
        >
          {item.desc}
        </p>
      </div>

      {/* Inner Glowing Border on Hover */}
      <div
        className={`absolute inset-0 rounded-[2.5rem] border-2 border-white/20 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-20 pointer-events-none`}
      />
    </motion.div>
  );
};

const TrustedCards = () => {
  const features = [
    {
      id: 1,
      icon: <FaStar />,
      title: "Premium Quality",
      desc: "Top-notch fabric with long-lasting durability.",
      iconColor: "text-yellow-500",
    },
    {
      id: 2,
      icon: <MdOutlineAssignmentReturn />,
      title: "Easy Return",
      desc: "Hassle-free return within 7 days.",
      iconColor: "text-sky-500",
    },
    {
      id: 3,
      icon: <FaTruck />,
      title: "National Delivery",
      desc: "Fast & reliable shipping all over Bangladesh.",
      iconColor: "text-emerald-500",
    },
    {
      id: 4,
      icon: <FaCreditCard />,
      title: "Safe Payment",
      desc: "Secure transactions with multiple methods.",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="bg-[#000814] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <TiltCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCards;
