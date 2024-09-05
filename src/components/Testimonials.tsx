"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function Testimonials() {
  return (
    <div className="h-[40rem]  rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-dot-white/[0.4] items-center justify-center relative overflow-hidden">
      <h2 className="text-3xl  font-bold  text-white sm:text-4xl mb-8 text-center">See Our Masterpieces: Alumni Success Stories</h2>
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  )
}

const testimonials = [
  {
    quote:
      "The instructors at this art school are truly inspiring! They pushed me to explore new techniques and mediums, which helped me grow as an artist. The personalized feedback and hands-on guidance made all the difference.",
    name: "Sarah Thompson",
    title: "Painting & Illustration Student",
  },
  {
    quote:
      "The facilities and equipment here are top-notch! From traditional art supplies to the latest digital tools, I had access to everything I needed. The creative environment and supportive community fueled my passion for digital art.",
    name: "Michael Rivera",
    title: "Digital Art & Design Graduate",
  },
  {
    quote:
      "I came to this school with a lot of passion but little direction. The instructors provided clear guidance while allowing me the freedom to explore my own style. The collaborative environment was amazing—I made lifelong friends.",
    name: "Emily Cooper",
    title: "Sculpture & Mixed Media Student",
  },
  {
    quote:
      "The curriculum here is a perfect blend of traditional techniques and modern innovation. I’ve learned skills that go far beyond the basics and have developed my artistic voice. The workshops prepared me for a successful career.",
    name: "David Carter",
    title: "Fine Arts Graduate",
  },
  {
    quote:
      "Joining this art school was the best decision I ever made for my creative journey. The instructors' expertise, combined with the incredible support from the community, helped me discover my true potential and build a strong portfolio.",
    name: "Olivia Nguyen",
    title: "Drawing & Sketching Student",
  },
];


export default Testimonials