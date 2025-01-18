'use client'

import { BiWorld } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      {/* Header Section */}
      <header className="text-gray-600 body-font">
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
                  <div className="w-6 h-1 bg-white"></div>
                  <div className="w-6 h-1 bg-white"></div>
                  <div className="w-6 h-1 bg-white"></div>
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

      {/* About Section */}
      <section className="text-gray-600 body-font bg-red-100">
        <div className="container px-5 py-24  mx-auto">
          <div className="flex flex-col lg:flex-row mb-10 lg:mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font underline text-gray-900 mb-4 lg:mb-0 lg:w-1/3">
              Explore the Healthy and Useful Blogs!
            </h1>
            <div className="lg:w-2/3">
            <h1 className="text-xl font-serif font-bold text-[20px] text-slate-950">About Our Blogs:</h1>
              <p className="text-black font-medium leading-relaxed text-base">
              Welcome to our blog, a space dedicated to exploring the profound benefits of Islamic practices and their positive impact on both spiritual and physical well-being. We believe that Islam offers timeless wisdom that goes beyond faith and spirituality, extending into everyday practices that nurture the body, mind, and soul. From the health benefits of regular prayers (Salah) to the power of mindfulness in daily life, our goal is to provide insightful, research-backed content that showcases how these practices contribute to a balanced, healthy lifestyle. Join us on a journey to understand how Islamic teachings can enhance personal well-being and foster a deeper connection to your faith, with an emphasis on holistic health, fitness, and mindfulness.
              </p>
              
            </div>
          </div>

          </div>
      </section>

      {/* Footer Section */}
        <footer className="bg-white text-black py-8">
        <div className="container mx-auto text-center px-4">
          
          {/* Logo Section */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-4">
          <div className="text-white">
                      <img src="/logo.png" alt="logo" className="w-12 h-10 md:w-12 md:h-10" />
                    </div>
            <div className="flex text-[20px] md:text-[30px] font-bold text-red-950 font-serif items-center">
              Maheen Zehra
            </div>
          </div>
      
          <p className="text-2xl mt-2 font-bold">Stay In Touch!</p>
          
          <div className="flex justify-center gap-6 mt-4 mb-4">
            <FaFacebook className="text-2xl hover:opacity-80" />
            <FaTwitter className="text-2xl hover:opacity-80" />
            <FaInstagram className="text-2xl hover:opacity-80" />
            <FaLinkedin className="text-2xl hover:opacity-80" />
          </div>
      
          {/* Footer Bottom Section */}
          <p className="text-sm text-red-950">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
      
        </div>
      </footer>
    </div>
  );
}