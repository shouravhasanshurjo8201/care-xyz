"use client";
import AboutSection from "@/components/AboutSection";
import BannerSlider from "@/components/BannerSlider";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div className="container mx-auto px-2 bg-amber-50">
      <BannerSlider />
      <Services />
      <AboutSection />
    </div>
  );
}
