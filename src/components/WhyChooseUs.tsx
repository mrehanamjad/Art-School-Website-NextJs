"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
 
const contentt = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const content = [
    {
      title: "Expert Instructors",
      description:
        "Learn from accomplished artists who bring real-world experience and industry insights. Our expert instructors are dedicated to helping you master your craft and guide you through every step of your artistic journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
          <img
            src="/whyChooseSection/teacher.png"
            className="h-full w-full object-cover"
            alt=" Expert Instructors image"
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
         <img
            src="/whyChooseSection/curriculum.png"
            className="h-full w-full object-cover"
            alt="Innovative Curriculum image"
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
           <img
            src="/whyChooseSection/studio.png"
            className="h-full w-full object-cover"
            alt="fully-equipped studios image"
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
          <img
            src="/whyChooseSection/community.png"
            className="h-full w-full object-cover"
            alt="Community of Creatives image"
          />
        </div>
      ),
    },
  ];
  
  

function WhyChooseUs() {
  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs