import onubhuti from "@/assets/images/onubhuti.png"
import alapon from "@/assets/images/alapon.png"
import nuptalk from "@/assets/images/nuptalk.png"
import Image from 'next/image';
import CheckIcon from "@/assets/icons/check-circle.svg"
import { ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
const portfolioProjects = [
  {
    title: "Onubhuti",
    results: [
      { title: "Share photos, post statuses, follow/unfollow, and get notifications." },
      { title: "Built with Next.js, TypeScript, Clerk, Prisma, and UploadThing." },
      { title: "Clean UI with Tailwind CSS & ShadCN, supports dark/light mode." }
    ],
    liveLink: "https://onubhuti.vercel.app/",
    repoLink: "https://github.com/joyant-s-g-j/Onubhuti",
    image: onubhuti
  },
  {
    title: "Alapon",
    results: [
      { title: "Host instant or scheduled video meetings with recording, screen sharing, and real-time reactions." },
      { title: "Built with Next.js, React, Clerk, and Stream for smooth and secure collaboration." },
      { title: "Clean, responsive UI using Tailwind CSS & ShadCN with dark/light mode support." }
    ],
    liveLink: "https://alaponmeeting.vercel.app/",
    repoLink: "https://github.com/joyant-s-g-j/Alapon",
    image: alapon
  },
  {
    title: "NupTalk",
    results: [
      { title: "Real-time chat app with instant messaging, online status, and JWT-based auth." },
      { title: "Built using MERN stack, Socket.io, and Zustand for smooth state and communication." },
      { title: " Modern UI styled with Tailwind CSS and Daisy UI." },
    ],
    liveLink: "https://nuptalk.onrender.com/",
    repoLink: "https://github.com/joyant-s-g-j/NupTalk",
    image: nuptalk,
  },
  
];

export const ProjectsSection = () => {
  return <section id="project" className="pt-24 mb-10 lg:mx-10 md:mx-10 sm:mx-3">
    <div className="">
      <SectionHeader title="My Recent Works" description="Explore a collection of projects that highlight my expertise, creativity, and commitment to delivering innovative solutions." />
      <div className="flex flex-col mt-8 gap-16 lg:max-w-full">
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
                <div className="flex gap-2">
                  <a target="_blank" href={project.liveLink}>
                    <button className="group relative mt-8 gap-2 inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-gray-300/75 to-gray-700 text-gray-950 backdrop-blur-lg px-4 py-2 text-base font-semibold border border-white/20 w-[200px]" type="button">
                      <span className="text-lg">Visit Live Site</span>
                      <ExternalLink className="size-6" />
                      <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
                        <div className="relative h-full w-10 bg-white/20"></div>
                      </div>
                    </button>
                  </a>
                  <a target="_blank" href={project.repoLink}>
                    <button className="group relative mt-8 gap-2 inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-gray-300/75 to-gray-700 text-gray-950 backdrop-blur-lg px-4 py-2 text-base font-semibold border border-white/20 w-[200px]" type="button">
                      <span className="text-lg">Git Repo</span>
                      <Code className="size-6" />
                      <div className="absolute inset-0 flex h-full w-full justify-center transform skew-x-[-13deg] translate-x-[-100%] group-hover:duration-1000 group-hover:transform group-hover:translate-x-full">
                        <div className="relative h-full w-10 bg-white/20"></div>
                      </div>
                    </button>
                  </a>
                </div>
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