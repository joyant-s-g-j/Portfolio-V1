"use client";

import { motion } from 'framer-motion'
import React from 'react'

export default function Marquee() {
  return (
    <div>
        <div data-scroll data-scroll-section data-scroll-speed=".8" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-slate-800'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap gap-10'>
                <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 50}} className='text-[15vw] leading-none font-bold uppercase pt-10 mb-10'>Programmer Developer Programmer Developer</motion.h1>
                <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 50}} className='text-[15vw] leading-none font-bold uppercase pt-10 mb-10'>Programmer Developer Programmer Developer</motion.h1>
            </div>
        </div>
        <div className="lg:mx-10 mt-24 md:mx-10 sm:mx-3">
            <p className="lg:text-6xl mb-10 sm:mb-5 font-medium md:text-3xl sm:text-lg">Welcome, Explorer! Dive into a space where creativity meets technology to craft meaningful digital experiences.</p>
            <hr className="border-t-2 border-gray-500 w-[calc(100%-5rem)] sm:w-auto" />
        </div>
    </div>
  )
}
