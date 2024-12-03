"use client";

import { motion } from 'framer-motion'
import React from 'react'

export default function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-slate-800'>
        <div className='border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='text-[15vw] leading-none font-bold uppercase pt-10 mb-10'>Programmer Developer Programmer Developer</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 20}} className='text-[15vw] leading-none font-bold uppercase pt-10 mb-10'>Developer Programmer Developer Programmer</motion.h1>
        </div>
    </div>
  )
}
