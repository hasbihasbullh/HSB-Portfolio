"use client";

import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-zinc-950 dark:bg-zinc-50 text-zinc-950 dark:text-zinc-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-50 dark:bg-zinc-950 rounded-full transition-all duration-300 hover:scale-110" aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
