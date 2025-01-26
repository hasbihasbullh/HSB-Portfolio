"use client";

import { FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Hero() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleString("id-ID", options);

  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animasi teks dan gambar menggunakan GSAP
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.fromTo(imageRef.current, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 });
  }, []);

  return (
    <section ref={sectionRef} className="px-4 sm:px-8 py-10 lg:py-10 sm:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
      {/* Bagian Teks */}
      <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-none font-bold tracking-tighter text-zinc-900 dark:text-zinc-50">M HASBI HASBULLAH</h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-full lg:max-w-none mx-auto lg:mx-0">
          User is a developer who continues to learn and focuses on modern web development using the latest technologies.
        </p>

        <Button className="group bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-full px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto mx-auto lg:mx-0">
          Resume
          <FileUser className="ml-2 h-5 w-5" />
        </Button>

        {/* Link Sosial Media dengan Background */}
        <div className="flex justify-center lg:justify-normal gap-4 mt-4">
          <a
            href="https://github.com/hasbihasbullh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-600 dark:hover:bg-zinc-400 rounded-full p-3 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/m-hasbi-hasbullah-1a152b340/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-600 dark:hover:bg-zinc-400 rounded-full p-3 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/hasbihasbullh_"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 dark:bg-zinc-200 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-600 dark:hover:bg-zinc-400 rounded-full p-3 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bagian Gambar */}
      <div ref={imageRef} className="relative mt-8 lg:mt-0">
        <img src="/me.webp" alt="Foto Profil M Hasbi Hasbullah" className="w-full sm:w-[400px] h-[300px] sm:h-[500px] object-cover mx-auto rounded-lg shadow-lg" />
        <div className="absolute bottom-0 right-0 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 p-4 sm:p-6 rounded-lg">
          <p className="text-xs sm:text-sm opacity-70">TODAY DATE</p>
          <p className="text-3xl sm:text-5xl font-bold mt-2">{formattedDate}</p>
        </div>
      </div>
    </section>
  );
}
