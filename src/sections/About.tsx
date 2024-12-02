export const AboutSection = () => {
  return (   
    <div id="about" className="flex flex-col space-y-4 mx-10 pt-24 h-screen">
      <h1 className="flex justify-center items-center text-4xl font-semibold">About Me</h1>
      <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-full sm:w-full" />
      <div className="text-center max-w-4xl">
        <p className="text-start font-sans text-gray-400 leading-7">
          I'm <span className="text-6xl font-extrabold text-white md:text-5xl sm:text-xl">Joyant Sheikhar Gupta Joy</span>, <br /> a <span className="text-sky-400 font-semibold">Software Developer</span> and Computer Science & Engineering student passionate about problem-solving and creating innovative, efficient solutions. <br /> With expertise in frontend and backend development, I strive to blend design and functionality seamlessly.        </p>
      </div>
    </div>
  );
};
