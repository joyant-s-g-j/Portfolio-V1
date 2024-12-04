import myImage from '@/assets/images/joy.png'
import Image from 'next/image';
export const AboutSection = () => {
  return (   
    <div id="about" className="flex flex-col space-y-4 lg:mx-10 md:mx-10 sm:mx-2 pt-24 h-screen">
      <h1 className="mx-10 sm:mx-2 text-4xl font-semibold">About Me</h1>
      <hr className="border-t-2 border-gray-500 mx-10 sm:mx-2 w-auto" />
      <div className='flex lg:flex-row sm:flex-col sm:gap-y-10 md:flex-col md:gap-y-10 lg:gap-x-30 xl:gap-x-40'>
        <div className="flex flex-col gap-5 sm:mx-2 mx-10 xl:max-w-3xl lg:max-w-xl">
          <h1 className="xl:text-5xl font-extrabold text-white lg:text-4xl md:text-5xl sm:text-2xl">Joyant Sheikhar Gupta Joy</h1>
          <div className="flex flex-col gap-5 lg:w-2/3 xl:w-full text-start font-sans text-gray-300 leading-7">
            <p >
              I'm a passionate developer with expertise in <span className="text-sky-500">HTML, CSS, JavaScript, React, C++, Python, Java & Django</span>. I specialize in creating efficient, innovative solutions that seamlessly blend design with functionality. I am constantly exploring new technologies to enhance my skill set and deliver impactful, user-centered web applications.
            </p>
            <p>
              As a <span className="text-sky-500">Computer Science & Engineering</span> student at ADUST, I am deeply committed to problem-solving and expanding my knowledge. I thrive in collaborative environments and am driven by the opportunity to build innovative applications that enhance user experiences.
            </p>
            <p>
              Connect with me, I can bring your ideas to life with cutting-edge solutions!
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Image src={myImage} className='size-[420px] sm:size-[350px] border border-emerald-300/20 rounded-md' alt="Joyant Image" />
        </div>
      </div>
    </div>
  );
};
