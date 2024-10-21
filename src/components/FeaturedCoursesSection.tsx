"use client";
import React from "react";
import courseData from "@/data/data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";
import Image from "next/image";

interface CourseI {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCoursesSection() {
  const featuredCourses: CourseI[] = courseData.courses.filter(
    (course: CourseI) => course.isFeatured === true
  );

  return (
    <div className="py-12 bg-gray-900">
    <div>
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase sm:text-xl">FEATURED COURSES</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:mb-5">Learn With the Best</p>
        </div>
    </div>
    <div className="mt-16 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course:CourseI)=> (
                <div key={course.id} className="flex justify-center">
                    <BackgroundGradient
                    className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <Image width={240} height={240} src={course.image} alt={course.title + " image"} className="object-contain h-60 rounded-md " />
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                            <Link href={`#`} className="w-40 h-12 p-[1px] bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-3xl mt-4">
                            <div className="h-full w-full flex items-center justify-center duration-100 bg-black text-neutral-200  rounded-3xl gap-1 hover:gap-2">
                            Learn More <span>➜</span>
                            </div>
                            </Link>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
    </div>
    <div className="mt-20 text-center">
        <Link href={"/courses"}
        className="px-8 py-4 rounded-3xl border border-neutral-600 text-neutral-300  hover:bg-gray-700 transition duration-200 "
        >
        View All courses
        </Link>
    </div>
</div>
  );
}

export default FeaturedCoursesSection;
