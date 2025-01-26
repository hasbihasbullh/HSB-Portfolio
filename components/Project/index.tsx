"use client";

import React, { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
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
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
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
                  <Button as="a" href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Visit Project
                  </Button>
                  <Button as="a" href={project.github} target="_blank" rel="noopener noreferrer" variant="ghost" className="inline-flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
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
