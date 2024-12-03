"use client";

import myImage from "@/assets/images/joyant.png"
import Image from 'next/image';

import { useState, useEffect } from "react";

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

// Usage in Header
export const Header = () => {
  const isScrolled = useScrollPosition(50);

  return (
    <div className={`flex justify-between items-center fixed py-3 px-10 w-full z-10 transition-all duration-300 ${isScrolled ? " backdrop-blur-md" : "bg-transparent"}`}>
      <div className="flex items-center gap-2">
        <Image src={myImage} alt="Logo" className="w-16 h-16" />
      </div>
      <div className="ml-16">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#" className="nav-item">Projects</a>
          <a href="#" className="nav-item">Contact</a>
        </nav>
      </div>
      <a href="/assets/file/cv.pdf" download className="bg-gray-100 font-serif text-gray-700 py-1 px-4 rounded-full shadow-md hover:bg-gray-700 hover:text-gray-300 transition duration-500 ease-in-out">Download CV</a>
    </div>
  );
};
