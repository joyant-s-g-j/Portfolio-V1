import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection/>
    </div>
  );
}
