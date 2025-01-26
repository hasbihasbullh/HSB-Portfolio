"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Skills } from "./Skills";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);
  statsRef.current = [];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 0.5,
      },
    });

    // Animasi untuk judul dan paragraf
    tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }).fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0.3);

    statsRef.current.forEach((stat, index) => {
      gsap.fromTo(
        stat,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2, // Stagger effect
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="about" className="px-4 sm:px-8 py-10 lg:py-10 sm:py-20 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20">
          <div>
            <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-zinc-900 dark:text-zinc-50">
              About Me
            </h2>
            <p ref={contentRef} className="text-zinc-600 dark:text-zinc-400 text-lg sm:text-xl leading-relaxed mb-8">
              I am M Hasbi Hasbullah, currently living in Sukabumi, Indonesia. With experience across various fields of technology and development, I specialize in creating, developing, and managing interactive and informative websites. My
              expertise in technologies like React.js, Next.js, and Laravel allows me to deliver innovative and efficient solutions. As a self-taught learner, I am driven by a strong curiosity and a passion for continuous skill development.
              I am not just a coder but also a creative thinker, a problem solver, and a lifelong learner always eager to explore new technologies.
            </p>
            <div className="grid sm:grid-cols-4 gap-6">
              <div ref={addToRefs} className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg">
                <p className="font-bold text-3xl mb-2">5+</p>
                <p className="text-zinc-600">Years of Experience</p>
              </div>
              <div ref={addToRefs} className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg">
                <p className="font-bold text-3xl mb-2">50+</p>
                <p className="text-zinc-600">Projects Completed</p>
              </div>
              <div ref={addToRefs} className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg">
                <p className="font-bold text-3xl mb-2">50+</p>
                <p className="text-zinc-600">Code Commits</p>
              </div>
              <div ref={addToRefs} className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg">
                <p className="font-bold text-3xl mb-2">50+</p>
                <p className="text-zinc-600">Immortal Highest Rank</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Skills />
      </div>
    </section>
  );
}
