'use client'

import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link"; // Ensure Link is used correctly
import Image from "next/image";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Benefits Of Sunlight",
      image: "/sun.jpg",
      description: "Of all the health benefits of sunlight, initiating the process of producing vitamin D in the body may be the best known.. ",
      
    },
    {
      id: 2,
      title: "Benefits of Wearing Hijab",
      image: "/hijab.jpg",
      description: "The hijab is a headscarf worn by Muslim women as a symbol of modesty, privacy, and religious faith. While it..",
      
    },
    {
      id: 3,
      title: "Benefits Of Namaz",
      image: "/namaz.jpg",
      description: "The customary prayers of Muslims (Namaz), where physical movements of prayers (Sala’at) have been..",
      
    },
    {
      id: 4,
      title: "Benefits Of Honey",
      image: "/honey.jpg",
      description: "Honey is rich in nutrients and antioxidants, has antibacterial properties, and can play a role in..",
      
    },
    {
      id: 5,
      title: "Tree is blessing",
      image: "/tree.jpg",
      description: "1.Trees combat climate change:Excess carbon dioxide (CO2) is building up in our atmosphere, contributing to climate change. Trees absorb..",
      
    },
    {
      id: 6,
      title: "Benefits Of Reading Quran Pak",
      image: "/pak.jpg",
      description: "In this blog post, we will explore the various benefits of reading the Quran, including",
      
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
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
    
  {/* Main Content blog */}
  <div className=" px-6">
        <div className="text-center mb-0 font-serif">
          <h1 className="text-4xl mt-[60px] font-bold text-gray-800">BLOGS</h1>
          <p className="text-lg text-gray-600 mt-4">
           Explore our Blogs.
          </p>
        </div>
</div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="p-4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
                <Link href={`/components/Blog/${post.id}`} passHref>
                  <span>
                    <Image
                      className="lg:h-48 md:h-36 w-full object-cover object-center transform transition-all hover:scale-105 hover:shadow-lg"
                      width={720}
                      height={400}
                      src={post.image}
                      alt="blog"
                    
                    />
                  </span>
                </Link>
                <div className="p-6">
                  <h1 className="tracking-widest text-2xl title-font font-bold text-black mb-1">
                    {post.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{post.description}</p>
                  <div className="flex items-center flex-wrap">
                    <Link href={`/components/Blog/${post.id}`} passHref>
                      <button className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

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

export default Blog;