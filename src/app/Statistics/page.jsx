"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Thobe Classic", rating: 4.6, price: 1990 },
  { name: "Summer T-Shirt", rating: 4.8, price: 700 },
  { name: "Accessories", rating: 4.5, price: 900 },
  { name: "Arabian Thobe", rating: 4.7, price: 3450 },
  { name: "Panjabi Premium", rating: 4.4, price: 1850 },
  { name: "Drop Shoulder T-Shirt", rating: 4.9, price: 690 },
  { name: "Islamic Cap", rating: 4.3, price: 450 },
  { name: "Premium Perfume", rating: 4.3, price: 1450 },
];

const StatisticsPage = () => {
  return (
    <div className=" min-h-screen py-12">
      <motion.div
        className="max-w-7xl mx-auto px-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-10 mt-10">
          <motion.h2
            className="text-4xl font-bold text-blue-800 mb-3"
            animate={{ color: ["#1e40af", "#0369a1", "#1e40af"] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            📊 Sales & Ratings Overview
          </motion.h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Dive into our best-selling Islamic and casual wear performance based
            on customer feedback and pricing insights.
          </p>
        </div>

        {/* Chart Section */}
        <motion.div
          className=" rounded-3xl shadow-2xl p-6 hover:shadow-blue-300 transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#0369a1", fontSize: 13 }}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#0369a1", fontSize: 13 }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#f0f9ff",
                  border: "1px solid #bae6fd",
                  borderRadius: "10px",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: 10 }}
                iconType="circle"
                verticalAlign="bottom"
                height={36}
              />
              <Area
                type="monotone"
                dataKey="price"
                fill="#7dd3fc"
                stroke="#0ea5e9"
                fillOpacity={0.4}
              />
              <Bar
                dataKey="price"
                barSize={30}
                fill="#0284c7"
                radius={[10, 10, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="rating"
                stroke="#0369a1"
                strokeWidth={2.5}
                dot={{ r: 5, fill: "#0ea5e9" }}
              />
              <Scatter dataKey="rating" fill="#1e3a8a" />
            </ComposedChart>
          </ResponsiveContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StatisticsPage;
