"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-commerce Website",
    description: "A complete e-commerce platform with product listings, cart, and payment integration.",
    image: "/images/img1.webp",
    technologies: ["React", "Node.js", "Stripe"],
    link: "https://example.com/ecommerce",
    github: "https://github.com/example/ecommerce",
  },
  {
    title: "Portfolio Website",
    description: "A modern and animated portfolio website showcasing my skills and projects.",
    image: "/images/img2.webp",
    technologies: ["Next.js", "GSAP", "Tailwind CSS"],
    link: "https://example.com/portfolio",
    github: "https://github.com/example/portfolio",
  },
  {
    title: "Task Management App",
    description: "An app for tracking tasks with deadlines, notifications, and progress tracking.",
    image: "/images/img3.webp",
    technologies: ["Vue", "Firebase", "Tailwind CSS"],
    link: "https://example.com/taskmanager",
    github: "https://github.com/example/taskmanager",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="project" className="px-4 sm:px-8 py-10 lg:py-10 sm:py-20 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">Recent Projects</h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl">A collection of projects that showcase my expertise in creating impactful digital experiences.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card hover:shadow-lg transition-all">
              <CardHeader>
                <Image src={project.image} alt={project.title} width={500} height={200} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-bold mb-2">{project.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 rounded hover:bg-zinc-500 transition-all">
                    <ExternalLink className="w-4 h-4" />
                    Visit Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                  >
                    <svg className="w-4 h-4" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 sm:mt-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50 text-center">See other project</h2>
          <div className="flex justify-center">
            <Button>Load More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
