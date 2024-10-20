"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [sideNavOn, setSideNavOn] = useState(false);
  console.log(sideNavOn);
  return (
    <div
      className={cn(
        "fixed top-0 md:top-5 inset-x-0 max-w-3xl mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} title="The Art School">
          <Image src={"/logo.png"} alt="logo" width={60} height={40} />
        </Link>

        <div className="hidden md:flex h-full px-3  justify-center items-center gap-4">
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
        <button className="pr-5 md:hidden" onClick={() => setSideNavOn(true)}>
          <BarIcon />
        </button>
      </Menu>

      <SideBar sideNavOn={sideNavOn} onClickClose={() => setSideNavOn(false)} />
    </div>
  );
}

export const SideBar = ({
  sideNavOn,
  onClickClose,
}: {
  sideNavOn: boolean;
  onClickClose: () => void;
}) => {
  const links = [
    { name: "Home", slug: "/" },
    { name: "Our Courses", slug: "/courses" },
    { name: "Webinars", slug: "/webinars" },
    { name: "Contact Us", slug: "/contact" },
  ];

  return (
    <div
      className={`fixed flex flex-col h-screen w-11/12 rounded-s-xl bg-black ${
        sideNavOn ? "right-0" : "-right-[10000px]"
      } top-0 z-[100] duration-500`}
    >
      <div className="w-full flex flex-row-reverse p-4">
        <button onClick={onClickClose}>
          <CloseIcon />
        </button>
      </div>
      <ul className="w-full flex flex-col gap-3 p-4 ">
        {links.map((link) => (
          <Link href={link.slug} key={link.slug}>
            <li
              className="border py-2 px-3 rounded border-gray-500 bg-[#000000e0]text-white w-full h-full text-white transition-colors text-lg duration-300"
              onClick={onClickClose}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-full text-white text-2xl font-mono flex-grow flex flex-col justify-center items-center py-8">
        <Image
          src={"/logo.png"}
          alt="logo-theArtSchool"
          width={150}
          height={150}
        />
        <h1>The Art School</h1>
      </div>
    </div>
  );
};

export const CloseIcon = () => (
  <motion.svg
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 0.3,
    }}
    exit={{
      opacity: 0,
      transition: {
        duration: 0.05,
      },
    }}
    className={"cursor-pointer"}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width={38}
    height={38}
    fill="white"
    stroke="white"
    stroke-width="10"
  >
    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
  </motion.svg>
);

export const BarIcon = () => (
  <svg
    className={"cursor-pointer"}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    width={32}
    height={32}
    fill="rgb(235 228 228 / 90%)"
    stroke="white"
    stroke-width="8"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);
