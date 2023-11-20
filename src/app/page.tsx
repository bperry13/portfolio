"use client";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaXTwitter, FaDiscord, FaLinkedin, FaToolbox } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import me from "../../public/me.png";
import ed from "../../public/dev-ed-wave.png";
import web1 from "../../public/web1.png";
import web3 from "../../public/web3.png";
import web5 from "../../public/web5.png";
import logo from "../../public/logo.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between">
            <div className="flex items-center">
              <Image src={logo} alt="logo" className="h-10 w-10" />
              <h1 className="text-2xl font-burtons dark:text-white">
                brett perry
              </h1>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                ></BsFillMoonStarsFill>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="header">Brett Perry</h2>
            <h3 className="sub-header">Developer and designer.</h3>
            <p className="paragraph">
              Freelancer providing services for programming and web design
              needs. Join me down below and let's get to work!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <FaXTwitter />
            <FaLinkedin />
            <FaDiscord />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
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
          <div>
            <h3 className="text-3xl py-10">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my jouney as a freelance developer, I've
              done remote work for
              <span className="text-teal-500"> agencies</span>, consulted for
              <span className="text-teal-500"> startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a wide range of services including brand design,
              programming, and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <FaToolbox className="text-6xl text-teal-600 mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Toolbox
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Front End Tools I use</h4>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <FaToolbox className="text-6xl text-teal-600 mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Toolbox
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Front End Tools I use</h4>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <FaToolbox className="text-6xl text-teal-600 mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Front End Toolbox
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Front End Tools I use</h4>
              <p className="text-gray-800 py-1">TypeScript</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my jouney as a freelance developer, I've
              done remote work for
              <span className="text-teal-500"> agencies</span>, consulted for
              <span className="text-teal-500"> startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer a wide range of services including brand design,
              programming, and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover h-full w-full"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="py-3 sm:text-xs text-right">Brett Perry © 2023</div>
        </section>
      </main>
    </div>
  );
}
