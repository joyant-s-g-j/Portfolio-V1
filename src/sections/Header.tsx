"use client";

import myImage from "@/assets/images/joyant.png"
import Image from 'next/image'
import { useState, useEffect } from "react"

const useScrollPosition = (threshold = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

export const Header = () => {
  const isScrolled = useScrollPosition(50);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`flex justify-between items-center fixed py-3 px-10 w-full z-10 transition-all duration-300 ${isScrolled ? " backdrop-blur-md" : "bg-transparent"}`}>
        <div className="flex items-center gap-2">
          <Image src={myImage} alt="Logo" className="w-16 h-16" />
        </div>
      <div className="ml-16 sm:hidden md:block lg:block">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#project" className="nav-item">Projects</a>
          <a href="#" className="nav-item">Contact</a>
        </nav>
      </div>
      <div className="flex sm:items-center sm:justify-center">
        <div className="dropdown relative md:hidden lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white" onClick={toggleMenu}>
          {isMenuOpen ? (
            // Cross Icon
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="10" y1="18" x2="21" y2="18"></line>
            </svg>

          )}
          </div>
          <ul tabIndex={0} className={`menu absolute -right-3 menu-sm dropdown-content bg-slate-800 rounded-lg text-gray-200 z-[1] mt-4 w-40 p-5 shadow  ${isMenuOpen ? "block" : "hidden"}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <a href="/assets/file/resume.pdf" download="resume" className="sm:hidden lg:block md:block bg-gray-100 font-serif text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-700 hover:text-gray-300 transition duration-500 ease-in-out">Download CV</a>
        </div>
    </div>
  );
};
