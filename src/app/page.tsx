"use client";
import Image from "next/image";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaLinkedin, FaToolbox } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import me from "../../public/me.png";
import logo from "../../public/logo.png";
import { useState } from "react";
import { SiPython } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiKubernetes } from "react-icons/si";
import { ToggleButton } from "@/components/ToggleButton";

import Link from "next/link";
import React from "react";
import Footer from "@/components/Footer";

const navigation = [
  { name: "Contact", href: "/contact" },
  { name: "Projects", href: "/projects" },
];

export default function Home() {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900">
        <div className="absolute left-3 top-3">
          <Image
            src={logo}
            alt="Brett Perry Logo"
            width={50}
            height={50}
            className="rounded-full bg-gray-900"
          />
        </div>
        <div className="p-3 absolute right-3 top-3">
          <ToggleButton />
        </div>
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden ">
          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
          <section className="">
            <h1 className="font-burtons font-semibold text-4xl text-gray-800 dark:text-gray-300 cursor-default md:text-9xl">
              Brett Perry
            </h1>
          </section>
          <section className="my-16 px-5 text-center py-3 leading-8  md:text-xl;">
            <h2 className="text-gray-800 dark:text-gray-300">
              I'm an emerging software engineer based in Texas. Have a look
              around and {""}
              <Link
                target="_blank"
                href="#"
                className="underline duration-500 hover:text-zinc-300"
              >
                let me know
              </Link>{" "}
              if you're interested in working together.{" "}
            </h2>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
