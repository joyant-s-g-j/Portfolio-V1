import myImage from '@/assets/images/joy.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from "@/assets/images/grain.jpg"
import StartIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import { HeroOrbit } from '@/components/HeroOrbit';
export const HeroSection = () => {
  return (
    <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className="absolute inset-0 mask-gradient">
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`,
        }}>
        </div>
        <div className='size-[650px] hero-ring'></div>
        <div className='size-[850px] hero-ring'></div>
        <div className='size-[1050px] hero-ring'></div>
        <div className='size-[1250px] hero-ring'></div>
        <div className='size-[1450px] hero-ring'></div>
        <HeroOrbit size={800} rotation={-90}> 
          <StartIcon className='size-28 text-emerald-400'/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}> 
          <StartIcon className='size-12 text-emerald-400'/>
        </HeroOrbit>
        <HeroOrbit size={600} rotation={100}> 
          <StartIcon className='size-8 text-emerald-400'/>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-1}> 
          <SparkleIcon className='size-8 text-emerald-400/20'/>
        </HeroOrbit>
        <HeroOrbit size={300} rotation={90}> 
          <SparkleIcon className='size-12 text-emerald-400/20'/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={100}> 
          <SparkleIcon className='size-20 text-emerald-400/20'/>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}> 
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
        <HeroOrbit size={600} rotation={-5}> 
          <div className='size-2 rounded-full bg-emerald-300/20'></div>
        </HeroOrbit>
      </div>
      
      <div className="container">
        <div className='flex flex-col items-center'>
          <Image src={myImage} className='size-[160px]' alt="Joyant Image" />
          <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-600 size-2.5 rounded-full'></div>
            <div className='text-sm font-semibold'>Available for new projects</div>
          </div>
          <div className='max-w-lg mx-auto'>
            <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in turning innovative designs into seamless, high-performing web applications. Let’s collaborate to bring your next project to life!</p>
          </div>
        </div>
        
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore my work</span>
          <ArrowDown className='size-4' />
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold'>Let's Connect</span>
        </button>
      </div>
    </div>
  );
};
