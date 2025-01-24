"use client";

import { FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const formattedDate = currentDate.toLocaleString("id-ID", options);

  return (
    <section className="px-4 sm:px-8 py-10 sm:py-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
      <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] leading-none font-bold tracking-tighter">M HASBI HASBULLAH</h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-full lg:max-w-none mx-auto lg:mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum iure aliquid quod voluptatibus magnam eum?</p>

        <Button className="group bg-[#2b2b2b] text-white hover:bg-black rounded-full px-4 sm:px-6 py-4 sm:py-6 text-base sm:text-lg w-full sm:w-auto mx-auto lg:mx-0">
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
  );
}
