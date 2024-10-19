"use client"
import Link from "next/link";
import { Button } from "./ui/moving-border";
import React from "react";
import { Vortex } from "./ui/vortex";

function HeroSection() {
  return (
    <div className="w-full mx-auto rounded-md  h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Unleash Your Creativity
        </h2>
        <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center">
        Master the art of expression with our innovative courses, guided by
           expert artists. Unlock your creative potential and develop your unique
           style through comprehensive training designed to transform your
           artistic vision into reality
        </p>
        <div className="mt-4">
           <Link href={"/courses"}>
                     <Button
                     borderRadius="1.75rem"
                     className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 hover:border-2"
                     >
                     Explore courses
                     </Button>
                 </Link>
         </div>
      </Vortex>
    </div>
  )
}

export default HeroSection
