"use client";
import { useAppSelector } from "@/lib/hook/redux";
import { useGetCurrentUser } from "@/lib/hook/useGetCurrentUser";

import Link from "next/link";
import { Suspense, use, useEffect } from "react";
const Navbar = () => {
  /*    */
  const currentUser =useAppSelector((state) => state.user);
    console.log(currentUser);

    useEffect(() => {
      console.log(currentUser);
    }, [currentUser]);
  const Connected = async () => {
    
    if (currentUser) {
      return (
        <Link
          className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream"
          href="/profile"
        >
          Profile
        </Link>
      );
    } else {
      return (
        <>
          <Link
            className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream"
            href="/signin"
          >
            SignIn
          </Link>
          <Link
            className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream"
            href="/signup"
          >
            SignUp
          </Link>
        </>
      );
    }
  };
  return (
    <nav className="font-montserrat bg-light-green border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="w-1/6">
          <span className="text-xl tracking-tight">CAR</span>
          <span className="text-white text-xl tracking-tight">POOL</span>
        </a>
        <ul className="flex flex-row justify-center w-4/6 py-4">
          <Link
            className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream"
            href="/"
          >
            Home
          </Link>
          <Link
            className="block py-2 pl-3 pr-4 text-xl mx-4 hover:text-cream"
            href="/search"
          >
            Search
          </Link>
         <Suspense fallback={<div>Loading...</div>}>
            <Connected />
          </Suspense>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
