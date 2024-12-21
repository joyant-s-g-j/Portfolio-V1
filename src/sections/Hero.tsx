import myImage from '@/assets/images/joy.png'
import Image from 'next/image';
import grainImage from "@/assets/images/grain.jpg"
import ReactIcon from "@/assets/icons/react.svg"
import PythonIcon from "@/assets/icons/python.svg"
import { HeroOrbit } from '@/components/HeroOrbit';
export const HeroSection = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3">
    <div id='home' className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
      <div className="absolute inset-0 mask-gradient-b">
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
          <ReactIcon className='size-28 text-emerald-400 animate-spin [animation-duration:20s]'/>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}> 
          <ReactIcon className='size-12 text-emerald-400 animate-spin [animation-duration:20s]'/>
        </HeroOrbit>
        <HeroOrbit size={600} rotation={100}> 
          <ReactIcon className='size-8 text-emerald-400 animate-spin [animation-duration:20s]'/>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-1}> 
          <PythonIcon className='size-8 text-emerald-400/20 animate-spin [animation-duration:20s]'/>
        </HeroOrbit>
        <HeroOrbit size={330} rotation={90}> 
          <PythonIcon className='size-12 text-emerald-400/20 animate-spin [animation-duration:20s]'/>
        </HeroOrbit>
        <HeroOrbit size={800} rotation={100}> 
          <PythonIcon className='size-20 text-emerald-400/20 animate-spin [animation-duration:20s]'/>
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
          <Image src={myImage} className='size-[220px] border border-emerald-300/20 rounded-full animate-profile' alt="Joyant Image" />
          <div className='bg-gray-950 border border-gray-500 mt-3 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
            <div className='bg-green-600 size-2.5 rounded-full relative'>
              <div className='bg-green-600 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className='text-sm font-semibold'>Available for New Opportunities</div>
          </div>
          <div className='max-w-lg mx-auto'>
            <h1 className='font-semibold text-3xl md:text-5xl text-center mt-8 tracking-wide'>Creativity Ignites Digital Innovation</h1>
            <p className='mt-4 text-center text-white/60 md:text-lg'>I turn designs into high-performing web apps. Let create impactful digital experiences together.</p>
            </div>
        </div> 
      </div>
    </div>
    
    
  </div>
  );
};
