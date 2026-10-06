import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { CredentialsSection } from "@/components/home/CredentialsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { GlassNavigation } from "@/components/navigation/GlassNavigation";

export default function Home() {
  return (
    <>
      <GlassNavigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CredentialsSection />
      <ContactSection />
    </>
  );
}
