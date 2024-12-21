import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import Marquee from "@/components/Marquee";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Marquee />
      <AboutSection/>
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
