import AboutSection from "@/components/shared/AboutSection";
import ContactSection from "@/components/shared/ContactSection";
import { Hero } from "@/components/shared/Hero";
import ImpactSection from "@/components/shared/ImpactSection";
import ProgramsSection from "@/components/shared/ProgramsSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <ImpactSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
