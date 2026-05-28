import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ConsultingSection } from "@/components/home/ConsultingSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ConsultingSection />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
