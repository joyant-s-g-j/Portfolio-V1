'use client'
import whoImage from '@/assets/images/grid1.png'
import toolImage from '@/assets/images/grid2.png'
import eduImage from '@/assets/images/grid3.png'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {Card} from '@/components/Card'
import { CardHeader } from '@/components/CardHeader';
import { SkillsMaarque } from '@/components/SkillMarquee';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SectionHeader } from '@/components/SectionHeader';

const hobbies = [
  {
    title: 'Photography',
    emoji: '📸',
    left: "10%",
    top: "25%"
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: "50%",
    top: "15%"
  },
  {
    title: 'Exploring',
    emoji: '🌐',
    left: "10%",
    top: "45%"
  },
  {
     title: 'Writing',
    emoji: '✍️',
    left: "50%",
    top: "40%"
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: "5%",
    top: "5%"
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: "60%",
    top: "70%"
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: "20%",
    top: "70%"
  },
]

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export const AboutSection = () => {
  const imageWho = whoImage.src;
  const imageTool = toolImage.src;
  const constraintRef = useRef(null);
  return (   
    <section id='about' className="pt-24 mb-10 lg:mx-10 md:mx-10 sm:mx-3">
      <SectionHeader title='About Me' description="I'm a passionate developer focused on creating innovative and scalable solutions, with expertise in various technologies" />
      <div className="grid mt-8 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <Card className="col-span-1 xl:row-span-3 border">
          <CardHeader title='My Info' imageUrl={imageWho} description="I'm Joyant, a developer skilled in HTML, CSS, JavaScript, React, C++, SQL, Python, Java, and Django, passionate about crafting functional solutions and building scalable web applications." />
        </Card>

        <Card className="col-span-1 xl:row-span-3 border">
          <CardHeader title='Skills & Tools' imageUrl={imageTool} description=""/>
          <SkillsMaarque/>
        </Card>

        <Card className='col-span-1 xl:row-span-4 border'>
          <CardHeader title='My Location' imageUrl="" description=""/>
            <div className='grid-container'>
              <div className='rounded-3xl w-full h-fit flex flex-col items-center py-10'>
                <Globe height={326} width={326} backgroundColor='rgba(0, 0, 0, 0)' showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[{ lat: 23.8103, lng: 90.4125, text: "I'm here", color: 'white', size: 15 }]}              />
                <div>
                  <p className='text-sm text-white/60'>Available for remote work worldwide</p>
                  <p className='text-sm text-white/60'>Based in Bangladesh, collaborating globally</p>
                  <div className='bg-gray-950 border border-gray-500 mt-3 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                    <div className='bg-green-600 size-2.5 rounded-full relative'>
                      <div className='bg-green-600 absolute inset-0 rounded-full animate-ping-large'></div>
                    </div>
                    <div className='text-sm text-white/60 font-semibold'>Available for New Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
        </Card>

        <Card className="xl:col-span-2 xl:row-span-3 border ">
          <CardHeader title='My Education'  description="" />
            <div className="flex flex-col xl:flex-row justify-between mt-7 sm:mt-0 items-center gap-10 p-4 relative">
              <div className="w-full xl:w-1/2">
                <Image src={eduImage} alt="grid-3" className="w-full h-auto sm:h-[200px] object-contain" />
              </div>
              <div className="w-full xl:w-1/2 border-l-4 left-1/2 border-white/60 text-white/60  p-5 justify-center flex flex-col gap-4">
                <div className='relative border rounded-lg p-2 before:absolute before:top-[10px] before:left-[-30px] before:w-[15px] before:h-[15px] before:bg-black before:border-4 before:border-white/60 before:rounded-full'>
                  <h1 className='font-semibold'>ADUST</h1>
                  <p className='text-xs'>Computer Science & Engineering</p>
                  <p className='text-xs'>2024 - Present</p>
                </div>
                <div className='relative border rounded-lg p-2 before:absolute before:top-[10px] before:left-[-30px] before:w-[15px] before:h-[15px] before:bg-black before:border-4 before:border-white/60 before:rounded-full'>
                  <h1 className='font-semibold'>Phitron</h1>
                  <p className='text-xs'>Software Developmet</p>
                  <p className='text-xs'>2023 - 2024</p>
                </div>
                <div className='relative border rounded-lg p-2 before:absolute before:top-[10px] before:left-[-30px] before:w-[15px] before:h-[15px] before:bg-black before:border-4 before:border-white/60 before:rounded-full'>
                  <h1 className='font-semibold'>Sheriyan Coding School</h1>
                  <p className='text-xs'>Frontend Development</p>
                  <p className='text-xs'>2023 - 2024</p>
                </div>
              </div>
            </div>
        </Card>


        <Card className='col-span-1 xl:row-span-2 border p-0 flex flex-col min-h-[300px] sm:min-h-auto'>
          <CardHeader className='px-6 pt-6' title='Exploring Beyond Code' imageUrl={''} description="" />
          <div className='relative flex-1' ref={constraintRef}>
              {hobbies.map (hobby => (
                <motion.div key={hobby.title} className='inline-flex items-center gap-2 px-6 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full py-1.5 absolute' style={{ left: hobby.left, top: hobby.top, }} drag dragConstraints={constraintRef}>
                  <span className='font-semibold text-gray-950/85'>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
