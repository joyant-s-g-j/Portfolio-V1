"use client";

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
    <div className={`flex justify-center items-center fixed py-5 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? " backdrop-blur-md" : "bg-transparent"}`}>
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full">
        <a href="#home" className="nav-item">Home</a>
        <a href="#about" className="nav-item">About</a>
        <a href="#" className="nav-item">Projects</a>
        <a href="#" className="nav-item">Contact</a>
      </nav>
    </div>
  );
};
