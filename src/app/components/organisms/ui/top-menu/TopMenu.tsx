"use client";

import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { titleFont } from "@/app/config/fonts";

export const TopMenu = () => {
  return (
    <nav className="bg-beige-100 flex px-5 justify-between items-center w-full h-[50px]">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Awesome Beaches
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/option1"
        >
          Option 1
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/option2"
        >
          Option 2
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/option3"
        >
          Option 3
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link href={"/"} className="mx-2"></Link>
      </div>
    </nav>
  );
};
