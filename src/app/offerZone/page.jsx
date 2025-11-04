"use client";

import { motion } from "framer-motion";

const OfferZonePage = () => {
  const offers = [
    {
      id: 1,
      title: "Winter Collection Sale",
      discount: "Up to 50% Off",
      desc: "Stay cozy this winter with our premium jackets and hoodies.",
      img: "https://i.ibb.co/9T4pPHm/winter-sale.jpg",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free",
      discount: "Limited Time Offer",
      desc: "Grab your favorite perfumes with our BOGO deal!",
      img: "https://i.ibb.co/Jpsf5D8/perfume-offer.jpg",
    },
    {
      id: 3,
      title: "Exclusive New Arrivals",
      discount: "20% Off",
      desc: "New styles just dropped — get yours before they're gone!",
      img: "https://i.ibb.co/3rDwQXJ/new-arrival.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-950 to-blue-950 text-white py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl md:text-5xl font-extrabold text-sky-400 mb-12"
      >
        ✨ Special Offer Zone ✨
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900 to-sky-900 p-4 rounded-2xl shadow-lg hover:shadow-sky-500/40 transition-all"
          >
            <img
              src={offer.img}
              alt={offer.title}
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold text-sky-400">{offer.title}</h3>
            <p className="text-sm text-sky-200 mb-2">{offer.discount}</p>
            <p className="text-gray-300 text-sm">{offer.desc}</p>
            <button className="mt-4 btn btn-sm bg-sky-600 hover:bg-sky-500 text-white rounded-lg border-none">
              Grab Offer
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OfferZonePage;
