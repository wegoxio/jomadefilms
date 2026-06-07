import { HeroSection } from "@/components/home/hero-section";
import { HomePathwaysSection } from "@/components/home/home-pathways-section";
import { SiteFooter } from "@/components/home/site-footer";
import { VideoIntroSection } from "@/components/home/video-intro-section";
import { SiteNavbar } from "@/components/navigation/site-navbar";

export default function Home() {
  return (
    <main className="relative flex-1 overflow-x-clip text-white">
      <SiteNavbar />
      <HeroSection />
      <VideoIntroSection />
      <HomePathwaysSection />
      <SiteFooter />
    </main>
  );
}
