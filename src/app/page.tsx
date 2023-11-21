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
      <main className="bg-white px-5 mx-auto md:px-20 lg:px-40 dark:bg-gray-900">
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
                <a className="button-glow" href="#">
                  Resume
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
          <div>
            <h3 className="sub-header mt-3">Services I offer</h3>
            <p className="paragraph">
              Over the last few years I've learned a lot about{" "}
              <span className="text-teal-500">web development</span> and{" "}
              <span className="text-teal-500">eCommerce</span>. I've created a
              network of amazing people and resources that I use to help build
              online businesses. Whatever your digital needs are, I'm here to
              help.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="tool-card">
              <FaToolbox className="text-6xl text-teal-600 mx-auto" />
              <h3 className="tool-card-header">Web Dev Toolbox</h3>
              <p className="tool-card-paragraph">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Front End Tools I use</h4>
              <p className="text-gray-300 py-1">TypeScript</p>
              <p className="text-gray-300 py-1">Next.js</p>
              <p className="text-gray-300 py-1">React</p>
              <p className="text-gray-300 py-1">Tailwind CSS</p>
            </div>
            <div className="tool-card">
              <FaToolbox className="text-6xl text-teal-600 mx-auto" />
              <h3 className="tool-card-header">Design Toolbox</h3>
              <p className="tool-card-paragraph">
                Creating elegant designs suited for your needs following core
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-300 py-1">Adobe</p>
              <p className="text-gray-300 py-1">DaisyUI</p>
              <p className="text-gray-300 py-1">TBD</p>
              <p className="text-gray-300 py-1">TBD</p>
            </div>
            <div className="tool-card">
              <FaToolbox className="text-6xl text-teal-600 mx-auto" />
              <h3 className="tool-card-header">eCommerce Toolbox</h3>
              <p className="tool-card-paragraph">
                Tools I use to help build online businesses
              </p>
              <h4 className="py-4 text-teal-600">eCommerce Tools I use</h4>
              <p className="text-gray-300 py-1">Stripe</p>
              <p className="text-gray-300 py-1">TBD</p>
              <p className="text-gray-300 py-1">TBD</p>
              <p className="text-gray-300 py-1">TBD</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="sub-header">Portfolio</h3>
            <p className="paragraph">
              Here are a few projects I've worked on recently. I'm always
              looking for new opportunities to learn and grow, so if you have a
              project you'd like to work on together, please reach out.
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
          <div className="py-3 sm:text-xs text-right dark:text-gray-300">
            Brett Perry © 2023
          </div>
        </section>
      </main>
    </div>
  );
}
