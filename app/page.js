import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="https://www.brettperry.dev">
            <Image
              src="/logo.png"
              alt="logo"
              width={60}
              height={60}
              className={styles.logo}
            />
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
            <AiOutlineTwitter alt="Twitter" size={40} />
          </a>
          <a href="https://www.discord.com" target="_blank">
            <FaDiscord alt="Discord" size={40} />
          </a>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>Hi, I'm Brett.</h1>
          <p>
            I'm an emerging software engineer based in Texas. Have a look around
            and let me know if you're interested in working together.
          </p>
          <button className={styles.button}>Portfolio</button>
          <button className={styles.button}>Resume</button>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Developed and designed by &copy;BRETTPERRY</p>
      </div>
    </main>
  );
}
