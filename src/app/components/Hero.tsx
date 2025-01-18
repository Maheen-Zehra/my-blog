import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiWorld } from "react-icons/bi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

type HeroProps = {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primarybuttonLink:string
  secondarybuttonLink:string
  primaryButtonText: string;
  secondaryButtonText: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  primarybuttonLink,
  secondarybuttonLink,
  primaryButtonText,
  secondaryButtonText,
}) => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white px-6">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-lg lg:text-2xl mt-4 text-center">
            {subtitle}
          </p>

          
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <h1 className="text-center mt-12 text-5xl font-extrabold title-font mb-4 text-gray-900">
         Blogs
        </h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/sun.jpg"
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Sunlight is Blessing
            </h1>
            <p className="leading-relaxed mb-3">
            Of all the health benefits of sunlight, initiating the process of producing vitamin D in the body may be the best known..
            </p>
            <div className="flex items-center flex-wrap ">
            <Link href="/components/Blog">
                  <span className="mt-3 underline text-black inline-flex items-center">
                    View Blogs
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/hijab.jpg"
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Benefits Of Wearing Hijab
            </h1>
            <p className="leading-relaxed mb-3">
            The hijab is a headscarf worn by Muslim women as a symbol of modesty, privacy, and religious faith. While it..
            </p>
            <div className="flex items-center flex-wrap">
            <Link href="/components/Blog">
                  <span className="mt-3 underline text-black inline-flex items-center">
                    View Blogs
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src="/namaz.jpg"
            alt="blog"
          />
          <div className="p-6">
           
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Benefits Of Namaz
            </h1>
            <p className="leading-relaxed mb-3">
            The customary prayers of Muslims (Namaz), where physical movements of prayers (Sala’at) have been..
            </p>
            <div className="flex items-center flex-wrap ">
            <Link href="/components/Blog">
                  <span className="mt-3 underline text-black inline-flex items-center">
                    View Blogs
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</section>

          <div
  className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
  style={{
    backgroundImage: "url('/swat.jpeg')", // Replace with the path to your image in the public folder
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-1 bg-green-950 bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 sm:px-8 md:px-16">
    <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-5xl font-bold font-serif text-center leading-snug">
      Get Connected
    </h1>
    <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl text-center font-serif max-w-2xl">
      Got an idea or something exciting to share? Don’t hesitate to get in touch.
    </p>
    <p className="mt-2 text-xs sm:text-sm md:text-base lg:text-2xl font-serif text-center max-w-2xl">
      I’d love to hear your stories, explore new opportunities, and create something amazing together!
    </p>

    {/* Button */}
    <Link href="/components/Contact">
      <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 font-serif bg-orange-500 text-white text-sm sm:text-base md:text-lg rounded-md hover:bg-orange-600 transition duration-300">
        Contact Me
      </button>
    </Link>
  </div>
</div>

          
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
};

export default Hero;