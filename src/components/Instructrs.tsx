"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import data from '@/data/data.json'

interface PeopleI {
  id: number;
  name: string;
  designation: string;
  image: string;
}

function Instructrs() {
  const people:PeopleI[] = data.instructors

  return (
    <div className="relative h-[40rem] overflow-hidden flex justify-center items-center">
      <WavyBackground className="max-w-4xl  mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Meet Our Instructors
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Learn from Leading Artists and Experienced Educators
        </p>
        <div className="flex justify-center items-center mt-10">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructrs;
