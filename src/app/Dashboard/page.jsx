"use client";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaShoppingCart,
  FaChartBar,
  FaDollarSign,
} from "react-icons/fa";
import dynamic from "next/dynamic";
import React from "react";

// ✅ Dynamically import ApexCharts (SSR safe)
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DashboardPage = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      icon: <FaUsers className="text-sky-500 text-3xl" />,
      color: "from-blue-900 to-sky-800",
    },
    {
      title: "Total Orders",
      value: "856",
      icon: <FaShoppingCart className="text-blue-400 text-3xl" />,
      color: "from-sky-900 to-blue-700",
    },
    {
      title: "Revenue",
      value: "$24,580",
      icon: <FaDollarSign className="text-yellow-400 text-3xl" />,
      color: "from-blue-800 to-sky-700",
    },
    {
      title: "Active Visitors",
      value: "3,642",
      icon: <FaChartBar className="text-green-400 text-3xl" />,
      color: "from-sky-800 to-blue-800",
    },
  ];

  // ✅ ApexChart config
  const chartData = {
    series: [
      {
        name: "Revenue",
        data: [1200, 1800, 2500, 3000, 2200, 3500, 4200],
      },
      {
        name: "Orders",
        data: [800, 1000, 1500, 2000, 1800, 2600, 3100],
      },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: { show: false },
        foreColor: "#fff",
      },
      stroke: {
        curve: "smooth",
        width: 3,
      },
      colors: ["#38bdf8", "#22c55e"],
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: { style: { colors: "#cbd5e1" } },
      },
      yaxis: {
        labels: { style: { colors: "#cbd5e1" } },
      },
      legend: {
        position: "top",
        labels: { colors: "#e2e8f0" },
      },
      grid: {
        borderColor: "#334155",
      },
    },
  };

  return (
    <div className="min-h-screen pt-26 bg-gradient-to-b from-blue-950 to-sky-950 text-white px-5 py-10">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-sky-400 mb-3">
          📊 Dashboard Overview
        </h1>
        <p className="text-gray-300 text-lg">
          Get insights into users, sales, revenue, and activity.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg border border-sky-700 flex flex-col justify-between`}
          >
            <div className="flex items-center justify-between">
              <div>{item.icon}</div>
              <h2 className="text-3xl font-extrabold text-white">
                {item.value}
              </h2>
            </div>
            <p className="text-gray-300 text-sm mt-4">{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Apex Chart */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-sky-900 to-blue-900 rounded-2xl p-6 shadow-xl border border-sky-700"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-sky-400">
          Performance Chart
        </h2>
        <div className="h-72">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height="100%"
            width="100%"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
