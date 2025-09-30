// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const pathname = usePathname();
//   console.log(pathname, pathname.includes("dashboard"));
//   if (!pathname.includes("dashboard")) {
//     return (
//       <div>
//         <nav className="flex justify-center">
//           <ul className="flex justify-between w-1/2">
//             <Link href="/">
//               <li>Home</li>
//             </Link>
//             <Link href="/Posts">
//               <li>Posts</li>
//             </Link>
//             <Link href="/products">
//               <li>Products</li>
//             </Link>
//             <Link href="/products/add">
//               <li>Add Products</li>
//             </Link>
//             <Link href="/meals">
//               <li>MEALS</li>
//             </Link>
//           </ul>
//         </nav>
//       </div>
//     );
//   } else {
//     return <></>;
//   }
// };

// export default Navbar;

"use client";
import { FaHeart, FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaBoxOpen } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { GiHotMeal } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = (
    <>
      <li className={`text-lg ${notoSerif.className}`}>
        <Link href="/">
          {" "}
          <FaHome className="inline " />
          Home
        </Link>
      </li>
      <li className={`text-lg ${notoSerif.className}`}>
        <Link href="/Posts">
          <MdPostAdd className="inline " />
          Posts
        </Link>
      </li>
      <li className={`text-lg ${notoSerif.className}`}>
        <Link href="/products">
          <FaBoxOpen className="inline " />
          Products
        </Link>
      </li>
      <li className={`text-lg ${notoSerif.className}`}>
        <Link href="/products/add">
          <IoMdAddCircle className="inline " />
          Add Products
        </Link>
      </li>
      <li className={`text-lg ${notoSerif.className}`}>
        <Link href="/meals">
          {" "}
          <GiHotMeal className="inline " />
          Meals
        </Link>
      </li>
    </>
  );

  // dashboard route এ Navbar hide করো
  if (pathname.includes("dashboard")) return null;

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <Link
          href="/"
          className={` pl-8 text-3xl text-blue-400 font-extrabold ${notoSerif.className}`}
        >
          Haya
        </Link>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 pl-32 [&_li>*]:hover:bg-transparent [&_li>*]:hover:text-blue-600 [&_li>*]:hover:underline shadow-none">
          {navLinks}
        </ul>
      </div>

      {/* Right side (extra button or profile) */}
      <div className="indicator pr-10 navbar-end">
        <span className="indicator-item mr-10 badge badge-secondary">12</span>
        <button className="btn">
          <FaHeart />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
