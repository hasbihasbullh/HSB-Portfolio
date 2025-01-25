"use client";

import Navigation from "@/components/Navigation/Navigation";
import HeroSection from "@/components/Hero/HeroSection";
import About from "@/components/About";

import { VelocityScroll } from "@/components/ui/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <About />
      <VelocityScroll>HSB-DEV</VelocityScroll>
    </main>
  );
}
