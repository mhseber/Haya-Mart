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
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/Posts">Posts</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/products/add">Add Products</Link>
            </li>
            <li>
              <Link href="/meals">Meals</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          StreetAura
        </Link>
      </div>

      {/* Center (desktop menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Posts">Posts</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/products/add">Add Products</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
        </ul>
      </div>

      {/* Right side (extra button or profile) */}
      <div className="navbar-end">
        <a className="btn">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
