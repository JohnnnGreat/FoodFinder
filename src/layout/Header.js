import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-[100px] bg-[#ebeaea]">
      <div className="max-w-[1100px] mx-auto flex justify-center h-full p-[1rem]">
        <ul className="flex items-center justify-center gap-[.8rem]">
          <li>
            <Link href="/" className="hover:font-bold transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:font-bold transition-all" href="/categories">
              Categories
            </Link>
          </li>
          <li>
            <Link className="hover:font-bold transition-all" href="/areas">
              Areas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
