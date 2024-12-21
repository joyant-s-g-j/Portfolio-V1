"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import React, { useState } from "react";

export const ContactSection = () => {
  const links = [
    { id: 1, label: "Github", hoverLabel: "My Projects", href: "https://github.com/joyant-s-g-j" },
    { id: 2, label: "Instagram", hoverLabel: "Showing off", href: "https://www.instagram.com/joyant_s_g_j" },
    { id: 3, label: "Linkedin", hoverLabel: "Serious me", href: "https://www.linkedin.com/in/joyant-s-g-j/" },
    { id: 4, label: "Facebook", hoverLabel: "Time waste", href: "https://www.facebook.com/joyant.s.g.j" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div id="contact" className="pt-24 mb-10 lg:mx-10 md:mx-10 sm:mx-3">
      <SectionHeader title="Get in Touch" description="Feel free to reach out to discuss projects, ideas, or collaboration opportunities. I’d love to hear from you!"/>
      <Card className="mt-8 p-0">
        <div className="flex items-center rounded-t-md px-4 py-4 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900 border-b-2 border-gray-700">
          <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <footer className="text-gray-300 py-10">
          <div className="px-6 flex flex-col md:flex-row md:items-center justify-around items-start sm:gap-10">
            <div>
              <h3 className="text-sm font-semibold uppercase mb-4 tracking-extra-widest">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {links.map((link, index) => (
                  <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className="relative group text-2xl w-48 lg:w-64 font-bold overflow-hidden" onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
                    <span className={`absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-gray-950/90 flex items-center px-1 font-semibold transition-transform duration-500 ease-in-out transform ${hoveredIndex === index ? "scale-y-100" : "scale-y-0"} origin-center`}>
                      {link.hoverLabel}
                    </span>
                    <span className={`relative transition-opacity duration-300 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}>
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div>
                <h3 className="text-sm font-semibold uppercase tracking-extra-widest">Contact</h3>          
                <a href="mailto:joyantsheikharguptajoy@gmail.com" className="relative inline-block font-semibold tracking-wide group overflow-hidden">
                  <p className=" font-semibold pt-2 text-2xl tracking-wide">Email Me</p>
                  <span className={`absolute inset-0 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-gray-950/90 flex items-center px-3 font-semibold transition-transform duration-500 ease-in-out transform scale-y-0 group-hover:scale-y-100 origin-center`}>
                  Click to email me — <br /> I’ll definitely read it!
                  </span>
                  <span className="relative text-sm transition-opacity duration-300 group-hover:opacity-0">
                    joyantsheikharguptajoy@gmail.com
                  </span>
                </a>
              </div>

          </div>
        </footer>
      </Card>
    </div>
  );
};
