"use client";
import { motion } from "framer-motion";
import { FaStar, FaTruck, FaCreditCard } from "react-icons/fa";
import { MdOutlineAssignmentReturn } from "react-icons/md";

const TrustedCards = () => {
  const features = [
    {
      id: 1,
      icon: <FaStar className="text-4xl text-yellow-500" />,
      title: "Premium Quality",
      desc: "Top-notch fabric with long-lasting durability.",
    },
    {
      id: 2,
      icon: <MdOutlineAssignmentReturn className="text-4xl text-blue-500" />,
      title: "Easy Return",
      desc: "Hassle-free return within 7 days.",
    },
    {
      id: 3,
      icon: <FaTruck className="text-4xl text-green-500" />,
      title: "National Delivery",
      desc: "Fast & reliable shipping all over Bangladesh.",
    },
    {
      id: 4,
      icon: <FaCreditCard className="text-4xl text-purple-500" />,
      title: "Safe Payment",
      desc: "Secure transactions with multiple methods.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10 p-5">
      {features.map((item, index) => (
        <motion.div
          key={item.id}
          className="bg-black shadow-lg shadow-blue-400 rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15, // stagger animation
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 1, -1, 0], // subtle wobble effect
            transition: { duration: 0.4 },
          }}
        >
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustedCards;
