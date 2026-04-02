'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import MarqueeBar from '@/components/ui/MarqueeBar';
import SmoothScroll from '@/components/ui/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <HeroSection />
      <MarqueeBar />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </SmoothScroll>
  );
}
