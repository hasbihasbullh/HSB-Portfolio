"use client";

import { FileUser, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const currentDate = new Date();
  const options = { month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleString("id-ID", options);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto relative">
        <div className="flex items-center gap-2">
          <span className="font-semibold">HSB.DEV</span>
          <span className="text-gray-500 hidden sm:inline">(LOREM IPSUM)</span>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 lg:hidden">
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
              <a href="#services" className="hover:text-gray-600">
                Services
              </a>
              <a href="#works" className="hover:text-gray-600">
                Works
              </a>
              <a href="#about" className="hover:text-gray-600">
                About
              </a>
              <a href="#testimonials" className="hover:text-gray-600">
                Testimonials
              </a>
              <a href="#contact" className="hover:text-gray-600">
                Contact
              </a>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm">
          <a href="#services" className="hover:text-gray-600">
            Services
          </a>
          <a href="#works" className="hover:text-gray-600">
            Works
          </a>
          <a href="#about" className="hover:text-gray-600">
            About
          </a>
          <a href="#testimonials" className="hover:text-gray-600">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-gray-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-8 py-10 sm:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-none font-bold tracking-tighter">M HASBI HASBULLAH</h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo numquam obcaecati placeat sit commodi distinctio libero quaerat?</p>

          <Button className="group bg-[#2b2b2b] text-white hover:bg-black rounded-full px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto">
            Resume
            <FileUser />
          </Button>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <img src="/me.webp" alt="Portrait" className="w-full sm:w-[400px] h-[300px] sm:h-[500px] object-cover mx-auto rounded-lg" />
          <div className="absolute bottom-0 right-0 bg-[#2b2b2b] text-white p-4 sm:p-6 rounded-lg">
            <p className="text-xs sm:text-sm opacity-70">NOW THE DATE</p>
            <p className="text-3xl sm:text-5xl font-bold mt-2">{formattedDate}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
