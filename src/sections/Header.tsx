"use client";

import myImage from "@/assets/images/navlogo.png"
import Image from 'next/image'
import { useState, useEffect } from "react"
import { FileText } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

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
  return (
    <div className={`flex justify-between items-center fixed py-3 px-10 w-full z-10 transition-all duration-300 ${isScrolled ? " backdrop-blur-md" : "bg-transparent"}`}>
      <div className="flex items-center gap-2">
        <Link href="#home">
          <Image src={myImage} alt="Logo" className="w-auto h-20 sm:h-16" />
        </Link>
      </div>
      <div className="ml-8 sm:hidden md:hidden lg:block">
        <nav className="flex gap-1 p-0.5 font-display border border-white/15 rounded-full">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#project" className="nav-item">Projects</a>
          <a href="#contact" className="nav-item">Contact</a>
        </nav>
      </div>
      
      <div className="flex items-center space-x-2">
          <MobileNavbar />
          <a href="/assets/file/Joyant_Resume.pdf" target="_blank">
            <button className="hidden group relative lg:inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-gray-300/75 to-gray-700 text-gray-950 backdrop-blur-lg px-4 py-2 text-base font-semibold border border-white/20" type="button">
                <span className="">Resume</span>
                <FileText className="size-5"/>
                <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
                  <div className="relative h-full w-10 bg-white/20"></div>
                </div>
            </button>
          </a>
        </div>
    </div>
  );
};
