import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Marquee from "react-fast-marquee";
import "react-tooltip/dist/react-tooltip.css";
const testimonials = [
  {
    name: "Nayeem Hossain Faruque",
    position: "Project Manager @ Reve System",
    text: "Joyant's technical expertise is outstanding. His ability to deliver high-quality solutions in a timely manner makes him a reliable asset to any team. His work ethic and problem-solving skills are truly impressive",
    avatar: memojiAvatar1,
  },
  {
    name: "Rizwan Hossain",
    position: " CEO @ Code Thousand",
    text: "Joyant has a deep understanding of development. He has consistently demonstrated a strong ability to innovate and develop scalable solutions. Working with him was a great experience",
    avatar: memojiAvatar3,
  },
  {
    name: "Sahid",
    position: "CEO @ CrevoSys",
    text: "Joyant has been key to CrevoSys' success. His deep knowledge of development and problem-solving skills have been crucial in building our platform. He quickly adapts to new technologies and consistently delivers high-quality solutions aligned with our goals",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="pt-24 mb-10 lg:mx-10 md:mx-10 sm:mx-3">
      <SectionHeader title="Feedback from My Audience" description="Discover what my audience has to say about my work and the impact it has had on their experience" />
      <Marquee pauseOnHover={true} autoFill={true} speed={40} direction="left" className="mt-8 flex overflow-x-clip mask-gradient-r py-4">
        <div className="flex gap-2 flex-none">
          {testimonials.map(testimonial => (
            <Card key={testimonial.name} className="max-w-xs mx-2 md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex justify-center items-center rounded-full flex-shrink-0">
                  <Image src={testimonial.avatar} alt={testimonial.name} className="max-w-full"/>
                </div>
                <div>
                  <div className="font-semibold text-white/85">{testimonial.name}</div>
                  <div className="text-sm text-white/80">{testimonial.position}</div>
                </div>
              </div>
              <p className="mt-4 text-sm md:text-base text-white/75">{testimonial.text}</p>
            </Card>
          ))}
        </div>
      </Marquee>
    </div>
  )
};
