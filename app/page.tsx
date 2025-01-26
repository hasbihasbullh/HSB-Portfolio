"use client";

import Navigation from "@/components/Navigation/Navigation";
import HeroSection from "@/components/Hero/HeroSection";
import About from "@/components/About";
import Project from "@/components/Project";
// import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { VelocityScroll } from "@/components/ui/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <About />
      <VelocityScroll>HSB-DEV</VelocityScroll>
      <Project />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
