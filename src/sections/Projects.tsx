import smartCare from "@/assets/images/smartcare.png";
import portfolio from "@/assets/images/portfolio.png";
import Image from 'next/image';
import CheckIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import grainImage from "@/assets/images/grain.jpg"
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    title: "My Portfolio",
    results: [
      { title: "Showcased skills, boosting professional credibility by 20%" },
      { title: "Improved audience reach and visibility by 35%" },
      { title: "Enhanced personal brand awareness by 15%" },
    ],
    link: "https://joyant.me/",
    image: portfolio,
  },
  {
    title: "Hospital Management System",
    results: [
      { title: "Streamlined hospital operations with advanced management tools" },
      { title: "Enhanced user experience and engagement by 40%" },
      { title: "Optimized site speed, leading to a 50% performance boost" },
      { title: "Facilitated a 35% increase in mobile-friendly access" },
    ],
    link: "https://github.com/joyant-s-g-j/SmartCare",
    image: smartCare,
  },

];

export const ProjectsSection = () => {
  return <section id="project" className="pt-24 mb-10 lg:mx-10 md:mx-10 sm:mx-3">
    <div className="">
      <h1 className='text-4xl font-semibold'>My Recent Works</h1>
      <p className="text-sm text-white/60">Explore a collection of projects that highlight my expertise, creativity, and commitment to delivering innovative solutions.</p>
      <hr className="border-t-2 border-gray-500 w-[calc(100%-5rem)] my-3 sm:w-auto" />
      
      <div className="flex flex-col mt-10 gap-16 lg:max-w-full">
        {portfolioProjects.map((project, projectIndex) => (
          <Card key={project.title} style={{ top: `calc(64px + ${projectIndex * 60}px)` }} className="bg-gray-800 px-8 pt-8 lg:pt-16 lg:pl-20 lg:pr-0 pb-0 rounded-3xl z-0  overflow-hidden sticky">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="pb-16">
                <h1 className="text-2xl mt-2 font-semibold">{project.title}</h1>
                <hr className="border-t-2 border-white/15 mt-4" />
                <ul className="flex flex-col gap-4 mt-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex gap-2 text-sm text-white/60">
                      <CheckIcon className="size-5" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a target="_blank" href={project.link}>
                <button className="group relative mt-8 inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-gray-300/75 to-gray-700 text-gray-950 backdrop-blur-lg px-4 py-2 text-base font-semibold border border-white/20 w-[200px]" type="button">
                  <span className="text-lg">Visit Live Site</span>
                  <ArrowUpRightIcon className="size-6"/>
                  <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
                    <div className="relative h-full w-10 bg-white/20"></div>
                  </div>
                </button>
                </a>
            </div>
            <div className="relative">    
              <Image className="rounded-2xl -mb-4 lg:w-full lg:h-full" src={project.image} alt={project.title} />
            </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};

// lg:w-auto lg:max-w-none lg:absolute lg:h-full