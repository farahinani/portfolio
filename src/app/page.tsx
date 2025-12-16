import { AboutSection } from "@/sections/About";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { PersonalProject } from "@/sections/PersonalProjects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <PersonalProject />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
