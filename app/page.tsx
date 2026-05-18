import { AboutSection } from "@/components/home/about-section";
import { BackgroundLayer } from "@/components/home/background-layer";
import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { FilmsSection } from "@/components/home/films-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProcessSection } from "@/components/home/process-section";
import { ServicesSection } from "@/components/home/services-section";
import { SiteFooter } from "@/components/home/site-footer";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { SiteNavbar } from "@/components/navigation/site-navbar";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-clip pb-10 text-white">
      <BackgroundLayer />

      <SiteNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <FilmsSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactCtaSection />
      <SiteFooter />
    </main>
  );
}
