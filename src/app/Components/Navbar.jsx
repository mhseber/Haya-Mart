"use client";

import { FaHome, FaRegHeart, FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoCartOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = (
    <>
      <li className={`text-lg `}>
        <Link href="/">
          {" "}
          <FaHome className="inline " />
          Home
        </Link>
      </li>
      <li className={`text-lg `}>
        <Link href="/Outfits">
          <GiClothes className="inline " />
          OutFits
        </Link>
      </li>
      <li className={`text-lg `}>
        <Link href="/offerZone">
          <FaBoxOpen className="inline " />
          OfferZone
        </Link>
      </li>
      <li className={`text-lg `}>
        <Link href="/Statistics">
          <FiBarChart2 className="inline " />
          Statistics
        </Link>
      </li>
      <li className={`text-lg `}>
        <Link href="/Dashboard">
          {" "}
          <FiGrid className="inline " />
          Dashboard
        </Link>
      </li>
    </>
  );

  // dashboard route এ Navbar hide করো
  if (pathname.includes("dashboard")) return null;

  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 backdrop-blur-md  shadow-lg">
      {/* Left side (mobile menu + brand name) */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <h3 className="font-extrabold pl-4 lg:text-4xl text-2xl text-sky-500">
          <motion.span
            animate={{ color: ["#7dd3fc", "#38bdf8", "#0ea5e9"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Haya
          </motion.span>{" "}
          Mart
        </h3>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 pl-32 [&_li>*]:hover:bg-transparent [&_li>*]:hover:text-blue-600 [&_li>*]:hover:underline shadow-none">
          {navLinks}
        </ul>
      </div>

      {/* Right side (extra button or profile) */}
      <div className="indicator pr-10 gap-2 navbar-end">
        <div>
          <button className="btn btn-sm rounded-2xl border-sky-700">
            <IoCartOutline className="text-lg text-sky-500" />
          </button>
        </div>
        <div>
          <button className="btn btn-sm rounded-2xl border-sky-700">
            <FaRegHeart className="text-lg text-sky-500" />
          </button>
        </div>
        <div>
          <button className="btn btn-sm rounded-2xl border-sky-700">
            <FaUsers className="text-lg text-sky-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
