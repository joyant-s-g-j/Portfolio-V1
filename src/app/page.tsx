import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Marquee from "@/components/Marquee";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Marquee />
      <AboutSection/>
    </div>
  );
}
