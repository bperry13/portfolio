import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.welcome}>
          Hey there! I'm glad you're here. I'm Brett, a software engineer based
          in Texas. Have a look around and let me know if you are interested in
          working together.
        </div>
        <div className={styles.image}>
          <Image src="/brett.png" alt="Brett Perry" width={300} height={300} />
        </div>
      </div>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/brettjp/" target="_blank">
          <AiOutlineLinkedin alt="LinkedIn" size={50} />
        </a>
        <a href="https://www.github.com/bperry13" target="_blank">
          <AiOutlineGithub alt="GitHub" size={50} />
        </a>
        <a href="https://twitter.com/brettperry_dev" target="_blank">
          <AiOutlineTwitter alt="Twitter" size={50} />
        </a>
        <a href="https://www.discord.com" target="_blank">
          <FaDiscord alt="Discord" size={50} />
        </a>
      </div>
      <div className={styles.grid}>
        <a href="" className={styles.card}>
          <h3>About &rarr;</h3>
          <p>Learn more about my journey into software</p>
        </a>
        <a href="" className={styles.card}>
          <h3>Projects &rarr;</h3>
          <p>Browse my previous work and templates</p>
        </a>
        <a href="" className={styles.card}>
          <h3>Business &rarr;</h3>
          <p>Review services or pay an invoice</p>
        </a>
        <a href="" className={styles.card}>
          <h3>Contact &rarr;</h3>
          <p>Let me know if you're interested in working together</p>
        </a>
      </div>
      <div className={styles.footer}>
        <p>Designed and developed by Brett P.</p>
      </div>
    </main>
  );
}
