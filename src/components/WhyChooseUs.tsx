"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Expert Instructors",
    description:
      "Learn from accomplished artists who bring real-world experience and industry insights. Our expert instructors are dedicated to helping you master your craft and guide you through every step of your artistic journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
        <Image
          src="/whyChooseSection/teacher.png"
          className="h-full w-full object-cover"
          alt=" Expert Instructors image"
          height="300"
          width="300"
        />
      </div>
    ),
  },
  {
    title: "Innovative Curriculum",
    description:
      "Our courses combine traditional techniques with modern innovations to inspire creativity and skill development. Each lesson is crafted to help you grow and succeed in the ever-evolving art world.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/whyChooseSection/curriculum.png"
          className="h-full w-full object-cover"
          alt="Innovative Curriculum image"
          height="300"
          width="300"
        />
      </div>
    ),
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our fully-equipped studios provide a professional environment with the latest tools and materials to foster creativity. You'll have access to everything you need to bring your artistic vision to life.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--black-500))] flex items-center justify-center text-white">
        <Image
          src="/whyChooseSection/studio.png"
          className="h-full w-full object-cover"
          alt="fully-equipped studios image"
          height="300"
          width="300"
        />
      </div>
    ),
  },
  {
    title: "Community of Creatives",
    description:
      "Join a thriving community of artists and creators. Collaborate, share ideas, and grow alongside your peers in an inspiring and supportive environment designed to enhance your artistic journey.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/whyChooseSection/community.png"
          className="h-full w-full object-cover"
          alt="Community of Creatives image"
          height="300"
          width="300"
        />
      </div>
    ),
  },
];

function WhyChooseUs() {
  return (
    <div className="py-10 h-full">
      <StickyScroll content={content} />
    </div>
  );
}

export default WhyChooseUs;
