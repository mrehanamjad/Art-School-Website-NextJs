"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { ExpandableCards } from "@/components/ExpandableCards";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import { Vortex } from "@/components/ui/vortex";

// function page() {
//   const images = [
//     "https://cdn.pixabay.com/photo/2023/03/29/16/53/street-art-7885965_640.jpg",
//     "https://cdn.pixabay.com/photo/2019/02/14/07/28/painting-3995999_1280.jpg",
//     "https://cdn.pixabay.com/photo/2022/02/22/03/30/lake-7027943_1280.jpg",
//   ];

//   return (
//     <ImagesSlider className="min-h-[40rem] h-auto pt-40 pb-20" images={images}>
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: -80,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           duration: 0.6,
//         }}
//         className="z-50 flex flex-col justify-center items-center"
//       >
//         <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
//           Upcomming Webinars
//         </motion.p>
//         <div className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center  relative mt-4">
//             <div className="h-full w-full">
//               <ExpandableCards />
//             </div>
//           <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//         </div>
//       </motion.div>
//     </ImagesSlider>
//   );
// }

// export default page

function page() {
  return (
    <div className="w-full mx-auto rounded-md h-screen bg-black  min-h-[32rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className=" items-center flex-col justify-center px-2 md:px-10 py-4 overflow-auto pb-0 w-full h-full"
      >
        <div className="w-full h-full mt-60 mb-20 py-30 flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl md:text-6xl font-bold text-center">
            Join Our Live Art Webinars
          </h1>
          <p className="text-white text-sm md:text-lg max-w-xl mt-6 text-center">
            Unlock your creativity with our live art webinars. Learn from expert
            instructors, interact in real-time, and enhance your skills from
            home. Perfect for all levels!
          </p>
        <div className="h-full py-2">
          <ExpandableCards />
        </div>
        </div>
      </Vortex>
      <div className="h-20 bg-black w-full"></div>
    </div>
  );
}

export default page;
