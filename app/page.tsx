import AboutSection from "@/components/shared/AboutSection";
import { Hero } from "@/components/shared/Hero";
import ProgramsSection from "@/components/shared/ProgramsSection";


export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <AboutSection />
      <ProgramsSection />
      {/* <Research /> */}
      {/* <Testimonials /> */}
      {/* <News /> */}
      {/* <ContactSection /> */}
    </main>
  );
}
