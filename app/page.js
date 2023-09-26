import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="https://www.brettperry.dev">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/brettjp/" target="_blank">
            <AiOutlineLinkedin alt="LinkedIn" size={40} />
          </a>
          <a href="https://www.github.com/bperry13" target="_blank">
            <AiOutlineGithub alt="GitHub" size={40} />
          </a>
          <a href="https://twitter.com/brettperry_dev" target="_blank">
            <FaXTwitter alt="Twitter" size={40} />
          </a>
          <a href="https://www.discord.com" target="_blank">
            <FaDiscord alt="Discord" size={40} />
          </a>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>Hello, I'm Brett.</h1>
          <p>
            I'm an emerging software engineer based in Texas. Have a look around
            and let me know if you're interested in working together.
          </p>
          <button className={styles.button}>
            <Link href="/portfolio">Portfolio</Link>
          </button>
          <button className={styles.button}>
            <Link href="/resume">About Me</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
