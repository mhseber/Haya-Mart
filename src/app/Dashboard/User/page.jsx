// "use client";

// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "@/Firebase/firebase.init";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import { FaUserCircle } from "react-icons/fa";

// const UserDashboard = () => {
//   const [user, loading] = useAuthState(auth);
//   const router = useRouter();

//   // ✅ Protect route
//   useEffect(() => {
//     if (!loading && !user) {
//       router.push("/AuthUsers");
//     }
//   }, [user, loading, router]);

//   if (loading) {
//     return <p className="text-center mt-20">Loading...</p>;
//   }

//   if (!user) return null;

//   return (
//     <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
//       <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-md text-center">
//         {/* ✅ Profile Image */}
//         {user.photoURL ? (
//           <img
//             src={user.photoURL}
//             alt={user.displayName || "User"}
//             className="w-24 h-24 rounded-full mx-auto border-4 border-sky-500 mb-4"
//           />
//         ) : (
//           <FaUserCircle className="text-8xl text-sky-400 mx-auto mb-4" />
//         )}

//         {/* ✅ User Name */}
//         <h2 className="text-2xl font-bold">
//           {user.displayName || "Welcome User"}
//         </h2>

//         <p className="text-slate-400 mt-1">{user.email}</p>

//         {/* ✅ Info Cards */}
//         <div className="mt-6 grid grid-cols-2 gap-4">
//           <div className="bg-slate-700 p-4 rounded-xl">
//             <p className="text-sm text-slate-400">Account Type</p>
//             <p className="font-semibold">User</p>
//           </div>
//           <div className="bg-slate-700 p-4 rounded-xl">
//             <p className="text-sm text-slate-400">Status</p>
//             <p className="font-semibold text-green-400">Active</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/Firebase/firebase.init";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import {
  FaUserCircle,
  FaHome,
  FaShoppingBag,
  FaHeart,
  FaCog,
  FaBoxOpen,
  FaRegHeart,
} from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FiBarChart2 } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";

const UserDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Protect route
  useEffect(() => {
    if (!loading && !user) {
      router.push("/AuthUsers");
    }
  }, [user, loading, router]);

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col md:flex-row">
      {/* ===== Sidebar ===== */}
      <aside className="md:w-64 w-full bg-slate-800 border-r border-slate-700 p-6">
        {/* User Info */}
        <div className="text-center mb-8">
          {user.photoURL ? (
            <img
              src={user.photoURL}
              alt="User"
              className="w-42 h-42 rounded-full mx-auto border-4 border-sky-500 mb-3"
            />
          ) : (
            <FaUserCircle className="text-8xl text-sky-400 mx-auto mb-2" />
          )}

          <h2 className="font-bold text-lg">{user.displayName || "User"}</h2>
          <p className="text-sm text-slate-400 break-all">{user.email}</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <DashLink
            href="/"
            icon={<FaHome />}
            label="Home"
            active={pathname === "/"}
          />
          <DashLink
            href="/Outfits"
            icon={<GiClothes className="inline" />}
            label="OutFits"
          />
          <DashLink
            href="/offerZone"
            icon={<FaBoxOpen className="inline" />}
            label="OfferZone"
          />
          <DashLink
            href="/Statistics"
            icon={<FiBarChart2 className="inline" />}
            label="Statistics"
          />
          <DashLink
            href="/Or-Components/Cart"
            icon={<IoCartOutline className="text-lg text-sky-500" />}
            label="Cart"
          />
          <DashLink
            href="/Or-Components/Wishlist"
            icon={<FaRegHeart className="text-lg text-sky-500" />}
            label="Wishlist"
          />
        </nav>
      </aside>

      {/* ===== Main Content ===== */}
      <main className="flex-1 p-6 md:p-10">
        <h1 className="text-3xl font-extrabold mb-6">
          Welcome, {user.displayName || "User"} 👋
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard title="Total Orders" value="12" />
          <InfoCard title="Wishlist Items" value="5" />
          <InfoCard title="Account Status" value="Active" highlight />
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;

/* ===== Reusable Components ===== */

function DashLink({ href, icon, label, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
        ${
          active
            ? "bg-sky-600 text-white"
            : "text-slate-300 hover:bg-slate-700 hover:text-white"
        }`}
    >
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}

function InfoCard({ title, value, highlight }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
      <p className="text-sm text-slate-400 mb-1">{title}</p>
      <p
        className={`text-2xl font-bold ${
          highlight ? "text-green-400" : "text-sky-400"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
