"use client";

import {
  FaHome,
  FaRegHeart,
  FaUsers,
  FaBoxOpen,
  FaChevronDown,
} from "react-icons/fa";
import { FiBarChart2, FiGrid } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "@/Firebase/firebase.init";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo/hm-logo2.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const pathname = usePathname();
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCounts = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setWishlistCount(wishlist.length);
      setCartCount(cart.length);
    };

    updateCounts();
    window.addEventListener("storage", updateCounts);
    return () => window.removeEventListener("storage", updateCounts);
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push("/AuthUsers");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged out!",
        timer: 1000,
        showConfirmButton: false,
      });
    });
  };

  const ADMIN_EMAIL = "sebermh@gmail.com";

  const mainLinks = (
    <>
      {[
        { name: "Home", href: "/", icon: <FaHome className="inline mr-1" /> },
        {
          name: "OutFits",
          href: "/Outfits",
          icon: <GiClothes className="inline mr-1" />,
        },
        {
          name: "OfferZone",
          href: "/offerZone",
          icon: <FaBoxOpen className="inline mr-1" />,
        },
      ].map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href} className="relative group">
            <Link
              href={link.href}
              className={`flex items-center px-3 py-2 transition-colors duration-300 ${
                isActive
                  ? "text-sky-400 font-bold"
                  : "text-gray-300 hover:text-sky-300"
              }`}
            >
              {link.icon} {link.name}
              {/* Animated Bottom Border */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-sky-500 shadow-[0px_0px_8px_#0ea5e9]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </li>
        );
      })}
    </>
  );

  const profileDropdown = user && (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2 btn btn-ghost btn-sm rounded-xl border border-sky-900/50"
      >
        <img
          src={user.photoURL || "/avatar.png"}
          className="w-6 h-6 rounded-full border border-sky-500"
          alt="user"
        />
        <FaChevronDown className="text-[10px] text-sky-500" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[100] menu p-2 shadow-2xl bg-[#000814] border border-sky-900/50 rounded-box w-52 mt-4 text-white"
      >
        <li className="menu-title text-sky-500 text-xs">Account</li>
        <li>
          <Link href="/Statistics">
            <FiBarChart2 className="mr-1" /> Statistics
          </Link>
        </li>
        <li>
          <Link href="/Dashboard/User">
            <FiGrid className="mr-1" /> Dashboard
          </Link>
        </li>

        {user.email === ADMIN_EMAIL && (
          <>
            <div className="divider my-1 before:bg-sky-900 after:bg-sky-900"></div>
            <li className="menu-title text-yellow-500 text-xs">Admin Only</li>
            <li>
              <Link href="/Dashboard/Admin" className="text-yellow-400">
                <FiGrid className="mr-1" /> Admin Panel
              </Link>
            </li>
          </>
        )}
        <div className="divider my-1"></div>
        <li>
          <button
            onClick={handleLogout}
            className="text-red-500 hover:bg-red-500/10"
          >
            <CiLogout /> Log Out
          </button>
        </li>
      </ul>
    </div>
  );

  if (pathname.toLowerCase().includes("/dashboard")) return null;

  return (
    <div className="flex items-center justify-between px-4 md:px-10 py-3 bg-[#000814]/90 backdrop-blur-md border-b border-sky-900/30 sticky top-0 z-50">
      {/* START: Logo & Mobile Menu */}
      <div className="flex items-center gap-2">
        <div className="dropdown lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-sm text-sky-500 px-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-2xl bg-[#000814] border border-sky-900/50 rounded-box w-52 text-white"
          >
            {mainLinks}
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={logo}
            alt="Logo"
            width={85}
            height={85}
            className="transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <h3 className="font-extrabold text-xl lg:text-2xl tracking-tight leading-none">
              <motion.span
                animate={{ color: ["#F0F9FF", "#7dd3fc", "#0ea5e9"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Haya
              </motion.span>
              <span className="text-white ml-1">Mart</span>
            </h3>
            <span className="hidden xs:block text-[8px] uppercase tracking-[2px] text-sky-400 font-medium">
              Lifestyle & Modesty
            </span>
          </div>
        </Link>
      </div>

      {/* CENTER: Desktop Main Nav */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 text-white font-medium p-0">
          {mainLinks}
        </ul>
      </div>

      {/* END: Actions & Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Cart */}
        <Link
          href={user ? "/Or-Components/Cart" : "/AuthUsers"}
          className="relative"
        >
          <div className="btn btn-sm btn-circle bg-transparent border-sky-800 hover:bg-sky-900/30">
            <IoCartOutline className="text-xl text-sky-400" />
          </div>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-sky-500 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Wishlist */}
        <Link
          href={user ? "/Or-Components/Wishlist" : "/AuthUsers"}
          className="relative"
        >
          <div className="btn btn-sm btn-circle bg-transparent border-sky-800 hover:bg-sky-900/30">
            <FaRegHeart className="text-lg text-sky-400" />
          </div>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-sky-500 text-black text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {wishlistCount}
            </span>
          )}
        </Link>

        {/* Auth Profile Section */}
        <div className="ml-2 border-l border-sky-900/50 pl-2">
          {user ? (
            profileDropdown
          ) : (
            <Link href="/AuthUsers">
              <button className="btn btn-sm rounded-xl bg-sky-600 border-none text-white hover:bg-sky-500">
                <FaUsers /> Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
