"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

function HeroSection() {
  const images = [
    "https://cdn.pixabay.com/photo/2024/09/26/12/26/ai-generated-9076124_640.jpg",
    "courses/sculpture.png",
    "courses/art-history-modernism.png",
    "https://images.unsplash.com/photo-1646988423425-bc236bc449bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFydGlzdHxlbnwwfDB8MHx8fDA%3D",
    "https://cdn.pixabay.com/photo/2016/11/29/08/58/hands-1868562_640.jpg",
    "https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <h2 className=" text-purple-200 text-4xl md:text-7xl font-bold text-center">
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
            <button className="px-6 py-4 max-md:px-5 max-md:py-3 backdrop-blur-sm border bg-emerald-300/10 hover:bg-purple-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 group">
              <span>Explore courses</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent group-hover:via-purple-500 via-emerald-500 to-transparent" />
            </button>
          </Link>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

export default HeroSection;
