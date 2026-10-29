import { HeroSection } from "@/components/home/hero-section";
import { HomePathwaysSection } from "@/components/home/home-pathways-section";
import { SiteFooter } from "@/components/home/site-footer";
import { VideoIntroSection } from "@/components/home/video-intro-section";
import { SiteNavbar } from "@/components/navigation/site-navbar";

export const metadata = {
  title: "Productora audiovisual en Madrid",
  description:
    "Jomade Films crea piezas audiovisuales para cine, eventos, bodas y marcas desde Madrid.",
  alternates: { canonical: "/" },
};

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
