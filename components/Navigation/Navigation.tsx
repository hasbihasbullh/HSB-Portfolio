"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto bg-[#f5f5f5] sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="font-semibold">HSB.DEV</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a href="#about" className="hover:text-gray-600">
              About
            </a>
            <a href="#project" className="hover:text-gray-600">
              Project
            </a>
            <a href="#contact" className="hover:text-gray-600">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-sm">
        <a href="#about" className="hover:text-gray-600">
          About
        </a>
        <a href="#project" className="hover:text-gray-600">
          Project
        </a>
        <a href="#contact" className="hover:text-gray-600">
          Contact
        </a>
      </div>
    </nav>
  );
}
