"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname, pathname.includes("dashboard"));
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center">
          <ul className="flex justify-between w-1/2">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="Posts">
              <li>Posts</li>
            </Link>
            <Link href="products">
              <li>Products</li>
            </Link>

            <Link href="meals">
              <li>MEALS</li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
