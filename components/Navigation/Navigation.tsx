"use client";

import { Menu, Sun, Moon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Tambahkan class 'dark' ke elemen <html> jika mode gelap diaktifkan
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isMenuOpen) {
      // Animasi masuk
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      // Animasi keluar
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 py-6 max-w-7xl mx-auto sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span
          className="font-bold text-xl
"
        >
          HSB-DEV
        </span>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Menu */}
      <div ref={menuRef} className="fixed inset-0 bg-zinc-50 dark:bg-zinc-950 z-40 lg:hidden transform translate-x-full">
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl text-zinc-900 dark:text-zinc-50">
          <a href="#about" className="hover:text-zinc-500 dark:hover:text-zinc-300" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#project" className="hover:text-zinc-500 dark:hover:text-zinc-300" onClick={() => setIsMenuOpen(false)}>
            Project
          </a>
          <a href="#contact" className="hover:text-zinc-500 dark:hover:text-zinc-300" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-8 text-sm">
        <a href="#about" className="hover:text-zinc-500 dark:hover:text-zinc-300">
          About
        </a>
        <a href="#project" className="hover:text-zinc-500 dark:hover:text-zinc-300">
          Project
        </a>
        <a href="#contact" className="hover:text-zinc-500 dark:hover:text-zinc-300">
          Contact
        </a>

        {/* Dark Mode Switch */}
        <button className="mr-4" onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle dark mode">
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </nav>
  );
}
