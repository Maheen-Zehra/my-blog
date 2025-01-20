'use client'

import { BiWorld } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <header className="text-white body-font">
        <div className="flex flex-col md:flex-row h-auto md:h-[50px] bg-white justify-between items-center p-5 md:p-10 sticky top-0 z-50">
          
          {/* Logo and Hamburger Section */}
          <div className="flex flex-row items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <div className="flex gap-4 items-center">
              <div className="text-white">
                <img src="/logo.png" alt="logo" className="w-12 h-10 md:w-12 md:h-10" />
              </div>
              <div className="flex text-[20px] md:text-[30px] font-bold text-red-950 items-center font-serif">
                Maheen Zehra Writes
              </div>
            </div>

            {/* Hamburger Icon for Mobile, placed on the right side */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
                  <div className="w-6 h-1 bg-orange"></div>
                  <div className="w-6 h-1 bg-orange"></div>
                  <div className="w-6 h-1 bg-orange"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:block md:ml-auto flex flex-col md:flex-row items-center text-base justify-center mt-4 md:mt-0 w-full md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row gap-4 w-full md:w-auto text-center md:text-left font-serif">
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/components/Blog">Blog</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/components/About">About</Link>
              </li>
              <li className="mr-5 hover:text-orange-500 text-black">
                <Link href="/components/Contact">Contact</Link>
              </li>
             
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
