'use client'
import whoImage from '@/assets/images/grid1.png'
import toolImage from '@/assets/images/grid2.png'
import eduImage from '@/assets/images/grid3.png'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {Card} from '@/components/Card'
import { CardHeader } from '@/components/CardHeader';
import { SkillsMaarque } from '@/components/SkillMarquee';

const hobbies = [
  {
    title: 'Photography',
    emoji: '📸'
  },
  {
    title: 'Gaming',
    emoji: '🎮'
  },
  {
    title: 'Exploring',
    emoji: '🌐'
  },
  {
     title: 'Writing',
    emoji: '✍️'
  },
  {
    title: 'Traveling',
    emoji: '✈️'
  },
  {
    title: 'Reading',
    emoji: '📚'
  },
  {
    title: 'Music',
    emoji: '🎵'
  },
]

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export const AboutSection = () => {
  const imageWho = whoImage.src;
  const imageTool = toolImage.src;
  return (   
    <section id='about' className=" pt-24 mb-20 lg:mx-10 md:mx-10 sm:mx-3">
      <h1 className='text-4xl font-semibold'>About Me</h1>
      <hr className="border-t-2 border-gray-500 w-[calc(100%-5rem)] my-3 sm:w-auto" />
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
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
            <div className='rounded-3xl w-full sm:h-[326px] h-fit flex flex-col items-center py-10'>
              <Globe height={326} width={326} backgroundColor='rgba(0, 0, 0, 0)' showAtmosphere showGraticules globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" labelsData={[{ lat: 23.8103, lng: 90.4125, text: "I'm here", color: 'white', size: 15 }]}              />
              <div className='px-10'>
                <p className='grid-headtext'>I work remotely across most timezones</p>
                <p className='grid-subtext'>I'm based in Bangladesh, with remote work availbale</p>
                <div className='bg-gray-950 border border-gray-500 mt-3 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                  <div className='bg-green-600 size-2.5 rounded-full relative'>
                    <div className='bg-green-600 absolute inset-0 rounded-full animate-ping-large'></div>
                  </div>
                  <div className='text-sm font-semibold'>Available for New Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="xl:col-span-2 xl:row-span-3 border shadow-lg">
        <CardHeader title='My Education'  description="" />
          <div className="grid xl:flex justify-between mt-7 items-center gap-10 p-4 relative">
            <div className="w-full xl:w-1/2">
              <Image src={eduImage} alt="grid-3" className="w-full h-auto sm:h-[266px] object-contain" />
            </div>
            <div className="border-l-4 absolute left-1/2 border-gray-400 text-white/60 h-full p-5 justify-center flex flex-col gap-4">
              <div className='relative border rounded-lg p-2 before:absolute before:top-[10px] before:left-[-30px] before:w-[15px] before:h-[15px] before:bg-black before:border-4 before:border-gray-300 before:rounded-full'>
                <h1 className='font-semibold'>ADUST</h1>
                <p className='text-xs'>Computer Science & Engineering</p>
                <p className='text-xs'>2024 - Present</p>
              </div>
              <div className='relative border rounded-lg p-2 before:absolute before:top-[10px] before:left-[-30px] before:w-[15px] before:h-[15px] before:bg-black before:border-4 before:border-gray-300 before:rounded-full'>
                <h1 className='font-semibold'>Phitron</h1>
                <p className='text-xs'>Software Developmet</p>
                <p className='text-xs'>2023 - 2024</p>
              </div>
              <div className='relative border rounded-lg p-2 before:absolute before:top-[10px] before:left-[-30px] before:w-[15px] before:h-[15px] before:bg-black before:border-4 before:border-gray-300 before:rounded-full'>
                <h1 className='font-semibold'>Sheriyan Coding School</h1>
                <p className='text-xs'>Frontend Development</p>
                <p className='text-xs'>2023 - 2024</p>
              </div>
            </div>
          </div>
        </Card>


        <Card className='xl:col-span-1 xl:row-span-2 border'>
          <CardHeader title='Beyond the Code' imageUrl={''} description="" />
          <div>
              {hobbies.map (hobby => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
