import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";
import data from "@/data/data.json";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

function page() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="min-w-7xl min-h-[30rem] bg-black relative flex justify-center items-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgb(217 185 247)"
        />
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Our Courses
          </h1>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-purple-700">
            Discover Your Creative Path
          </h2>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
            At our Art School, we offer a diverse range of courses tailored to
            fit artists at all stages of their journey. Whether you are a
            beginner looking to explore a new medium or an experienced artist
            seeking to refine your skills, we have something for you.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 bg-black/[0.96]">
        {data.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="#"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
