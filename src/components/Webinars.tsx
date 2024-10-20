"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import data from "@/data/data.json";

interface WebinarI {
  title: string;
  description: string;
  link: string;
  isFeatured: boolean;
  image: string;
}

function Webinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase sm:text-xl">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:mb-5">
            Join Our Expert-Led Sessions to Elevate Your Artistic Journey
          </p>
        </div>
        <div className="mt-10 ">
          <HoverEffect
            items={data.webinars
              .filter((Webinar: WebinarI) => Webinar.isFeatured)
              .map((Webinar: WebinarI) => ({
                title: Webinar.title,
                description: Webinar.description,
                link: "/",
              }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-8 py-4 rounded-3xl border border-neutral-600 text-neutral-300  hover:bg-gray-700 transition duration-200 "
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
