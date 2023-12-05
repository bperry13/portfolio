"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaLinkedin, FaToolbox } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiReact,
} from "react-icons/si";
import me from "../../public/me.png";
import ed from "../../public/dev-ed-wave.png";
import web1 from "../../public/web1.png";
import web3 from "../../public/web3.png";
import web5 from "../../public/web5.png";
import logo from "../../public/logo.png";
import { useState } from "react";

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
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                ></BsFillMoonStarsFill>
              </li>
              <li>
                <a className="button-glow" href="#">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center px-10 py-5">
            <h2 className="header">Brett Perry</h2>
            <h3 className="sub-header">Web development and design.</h3>
            <p className="paragraph">
              I'm an emerging software engineer based in Texas. Have a look
              around and let me know if you're interested in working together.
            </p>
          </div>
          <div className="icons">
            <FaXTwitter />
            <FaLinkedin />
            <FaDiscord />
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
        </section>
        <section>
          <div>
            <h3 className="sub-header mt-5">Services</h3>
            <p className="paragraph">
              Over the last few years I've learned a lot about{" "}
              <span className="text-teal-500">web development</span> and{" "}
              <span className="text-teal-500">eCommerce</span>. I've created a
              network of amazing people and resources that I use to help build
              online businesses. Whatever your digital needs are, I'm here to
              help.
            </p>
          </div>
          <div className="text-center py-3 text-gray-800 md:text-xl dark:text-gray-300">
            <ul>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h3 className="sub-header mt-5">Portfolio</h3>
            <p className="paragraph">
              Here are a few projects I've worked on recently. I'm always
              looking for new opportunities to learn and grow, so if you have a
              project you'd like to work on together, please reach out.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={logo}
                alt="web1"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={logo}
                alt="web3"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={logo}
                alt="web5"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={logo}
                alt="web5"
                className="rounded-lg object-cover h-full w-full"
              />
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
