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
import ToggleButton from "@/components/ToggleButton";

interface Props {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="main">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between">
            <div className="flex items-center">
              <Image src={logo} alt="logo" className="h-12 w-12" />
            </div>
            <ul className="flex items-center">
              <li>
                <ToggleButton
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                ></ToggleButton>
              </li>
              <li>
                <a
                  className="button-glow"
                  href="mailto:brettperry7@gmail.com"
                  target="_blank"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center px-10 py-5">
            <h2 className="header">Brett Perry</h2>
            <h3 className="sub-header">Information Technology and Software</h3>
            <p className="paragraph">
              I'm an emerging software engineer based in Texas. Have a look
              around and let me know if you're interested in working together.
            </p>
          </div>
          <div className="icons">
            <a
              href="https://twitter.com/brettperry_dev"
              className="hover:cursor-pointer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com/in/brettjp"
              className="hover:cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discordapp.com/users/976281592936939540"
              className="hover:cursor-pointer"
            >
              <FaDiscord />
            </a>
          </div>
          <div className="image-window">
            <Image
              src={me}
              alt="me"
              className="mt-10"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <h3 className="sub-header mt-5 md:mt-7">Tools</h3>
          <div className="icons">
            <SiNextdotjs />
            <SiReact />
            <SiTypescript />
            <SiTailwindcss />
          </div>
          <div className="icons">
            <SiPython />
            <SiLinux />
            <SiDocker />
            <SiKubernetes />
          </div>
        </section>
        <section>
          <div>
            <h3 className="sub-header mt-5">Services</h3>
            <p className="paragraph">
              Over the last few years I've learned a lot about{" "}
              <span className="text-teal-500">infomation technology</span> and{" "}
              <span className="text-teal-500">software</span>. I've created a
              network of amazing people and resources that I use to help build
              online businesses. Whatever your digital needs are, I'm here to
              help.
            </p>
          </div>
          <div className="text-center py-3 text-gray-800 md:text-xl dark:text-gray-300">
            <ul>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Back End Development</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h3 className="sub-header mt-5">Projects</h3>
            <p className="paragraph">
              Here are a few projects I've worked on recently. I'm always
              looking for new opportunities to learn and grow, so if you have a
              project you'd like to work on together, please reach out.
            </p>
          </div>
          <div>
            <div className="ml-6 text-gray-800 md:text-xl mx-auto dark:text-gray-300">
              <div className="font-semibold">Portfolio</div>
              <div className="underline">
                <a href="https://github.com/bperry13/portfolio">
                  Public GitHub Repo
                </a>
              </div>
              <div className="mt-1">
                I built my website using Next.js, React, TypeScript, and
                Tailwind CSS. I setup a CI/CD pipeline in GitHub that
                automatically deploys a merge to Vercel's cloud.
              </div>
            </div>
            <div className="mt-5 ml-6 text-gray-800 md:text-xl mx-auto dark:text-gray-300">
              <div className="font-semibold">
                Chextr MD, a mobile app for doctors
              </div>
              <div>Private Repo</div>
              <div>
                I collaborated with a team to develop a web application that
                gives doctors a secure platform to communicate with their
                patients. The app is built with Next.js, React, TypeScript, and
                Tailwind CSS. I focused on the authentication and authorization
                features to make sure routes and data are protected.
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="py-3 sm:text-xs text-right dark:text-gray-300">
            Brett Perry © 2023
          </div>
        </section>
      </main>
    </div>
  );
}
