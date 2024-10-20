"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-3xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} title="The Art School">
          <Image src={"/logo.png"} alt="logo" width={60} height={40} />
        </Link>
        <div className="flex h-full px-3 justify-center items-center gap-4">
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <Link href={"/courses"}>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">All Courses</HoveredLink>
                <HoveredLink href="/web-dev">Basic Music Teory</HoveredLink>
                <HoveredLink href="/web-dev">Advanced Composition</HoveredLink>
                <HoveredLink href="/web-dev">Song Writting</HoveredLink>
                <HoveredLink href="/web-dev">Music Production</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href={"/webinars"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Webinars"
            ></MenuItem>
          </Link>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
