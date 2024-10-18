"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import coursesData from "@/data/data.json";

interface TestimonialsI {
  quote: string;
  name: string;
  title: string;
}

const testimonials:TestimonialsI[] = coursesData.testimonials

function Testimonials() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-dot-white/[0.4] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl  font-bold  text-white sm:text-4xl mb-8 text-center">
        See Our Masterpieces: Alumni Success Stories
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

export default Testimonials;
