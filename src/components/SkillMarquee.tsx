import Marquee from "react-fast-marquee";
import "react-tooltip/dist/react-tooltip.css";

export const SkillsMaarque = () => {
  return (
    <div className="space-y-3">
        
      {/* maarque for right slider */}

      <Marquee gradient={true} gradientColor="transparent" speed={10} pauseOnHover={true} direction="right" autoFill={true} className=" overflow-hidden">
        <img data-tooltip-id="tooltip" data-tooltip-content="HTML" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/HTML.svg" alt="HTML"/>
        <img data-tooltip-id="tooltip"data-tooltip-content="TailwindCSS" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/TailwindCSS-Dark.svg" alt="TailwindCSS"/>
        <img data-tooltip-id="tooltip" data-tooltip-content="Bootstrap" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Bootstrap.svg" alt="Bootstrap"/>
        <img data-tooltip-id="tooltip" data-tooltip-content="CSS" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/CSS.svg" alt="CSS" />
        <img data-tooltip-id="tooltip" data-tooltip-content="Java" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Java-Dark.svg" alt="Java" />
        <img data-tooltip-id="tooltip" data-tooltip-content="JavaScript" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/JavaScript.svg" alt="JavaScript" />
        <img data-tooltip-id="tooltip" data-tooltip-content="Python" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Python-Dark.svg" alt="Python" />
        <img data-tooltip-id="tooltip" data-tooltip-content="Django" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Django.svg" alt="Django" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="React" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/React-Dark.svg" alt="React" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="Typescript" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/TypeScript.svg" alt="Typescript" />
      </Marquee>
      {/* maarque for left slider */}

      <Marquee gradient={true} gradientColor="transparent" speed={10} pauseOnHover={true} direction="left" autoFill={true} className=" overflow-hidden z-50">
        <img data-tooltip-id="tooltip2" data-tooltip-content="GitHub" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Github-Dark.svg" alt="GitHub" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="Figma" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Figma-Dark.svg" alt="Figma" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="Next.js" className="w-10 mr-2 rounded-[25px] grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/NextJS-Dark.svg" alt="Next" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="Android Studio" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/AndroidStudio-Dark.svg" alt="Android studio" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="VsCode" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/VSCode-Dark.svg" alt="VsCode" />
        <img data-tooltip-id="tooltip2" data-tooltip-content="Redux" className="w-10 mr-2 grayscale hover:grayscale-0 transition duration-300 hover:scale-105" src="/icons/Redux.svg" alt="Redux" />

      </Marquee>
    </div>
  );
};


