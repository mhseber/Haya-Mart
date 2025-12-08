// "use client";

// import { useAuthState } from "react-firebase-hooks/auth";
// import { useRouter } from "next/navigation";
// import auth from "@/Firebase/firebase.init";
// import { ADMIN_EMAIL } from "@/utils/admin";
// import { useEffect } from "react";

// export default function AdminDashboard() {
//   const [user, loading] = useAuthState(auth);
//   const router = useRouter();

//   useEffect(() => {
//     if (!loading) {
//       if (!user) {
//         router.push("/AuthUsers"); // login না থাকলে
//       } else if (user.email !== ADMIN_EMAIL) {
//         router.push("/dashboard"); // admin না হলে
//       }
//     }
//   }, [user, loading, router]);

//   if (loading) return <p className="text-center mt-20">Loading...</p>;

//   if (!user || user.email !== ADMIN_EMAIL) return null;

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-10">
//       <h1 className="text-3xl font-bold mb-4">👑 Admin Dashboard</h1>

//       <ul className="space-y-2">
//         <li>✅ Manage Products</li>
//         <li>✅ Manage Users</li>
//         <li>✅ Orders Control</li>
//         <li>✅ Site Statistics</li>
//       </ul>
//     </div>
//   );
// }

"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import auth from "@/Firebase/firebase.init";
import { ADMIN_EMAIL } from "@/utils/admin";
import { useEffect } from "react";
import { motion } from "framer-motion";

// Icons
import {
  FaShoppingCart,
  FaTimesCircle,
  FaTruck,
  FaUsers,
} from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";

export default function AdminDashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) router.push("/AuthUsers");
      else if (user.email !== ADMIN_EMAIL) router.push("/Dashboard");
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-20 text-lg">Loading...</p>;
  if (!user || user.email !== ADMIN_EMAIL) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-slate-900 text-white p-4 md:p-10"
    >
      <h1 className="text-4xl text-center font-extrabold pt-20 mb-10">
        👑 Admin Dashboard
      </h1>

      {/* ===== Statistics Cards ===== */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
      >
        <StatCard
          title="Total Orders"
          value="120"
          icon={<FaShoppingCart />}
          color="text-sky-400"
        />
        <StatCard
          title="Cancelled"
          value="15"
          icon={<FaTimesCircle />}
          color="text-red-400"
        />
        <StatCard
          title="Delivered"
          value="95"
          icon={<FaTruck />}
          color="text-green-400"
        />
        <StatCard
          title="Total Earnings"
          value="৳ 85,000"
          icon={<MdAttachMoney />}
          color="text-yellow-400"
        />
        <StatCard
          title="Total Users"
          value="340"
          icon={<FaUsers />}
          color="text-purple-400"
        />
      </motion.div>

      {/* ===== Admin Controls ===== */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Admin Controls
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <ActionCard title="Manage Products" />
          <ActionCard title="Manage Users" />
          <ActionCard title="Orders Control" />
          <ActionCard title="View Statistics" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ===== Animation Variants ===== */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

/* ===== Stat Card ===== */
function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-slate-800 rounded-2xl p-6 border border-slate-700
      hover:border-sky-500 transition flex flex-col items-center gap-3 shadow-lg"
    >
      <div className={`text-4xl ${color}`}>{icon}</div>
      <h3 className="text-sm text-slate-400">{title}</h3>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </motion.div>
  );
}

/* ===== Action Card ===== */
function ActionCard({ title }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-slate-800 p-6 rounded-xl border border-slate-700
      hover:border-sky-500 cursor-pointer shadow-md"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-slate-400 mt-2">Click to manage</p>
    </motion.div>
  );
}
