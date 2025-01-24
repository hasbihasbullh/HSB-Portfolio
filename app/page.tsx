"use client";

import Navigation from "@/components/Navigation/Navigation";
import HeroSection from "@/components/Hero/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Navigation />
      <HeroSection />
    </main>
  );
}
