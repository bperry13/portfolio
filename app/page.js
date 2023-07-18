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
      <div className={styles.header}>
        <div className={styles.logo}>brettperrydotdev</div>
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
      </div>
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>Brett Perry</h1>
          <h2>Software Engineer</h2>
          <button
            type="button"
            // Note how the "error" class is accessed as a property on the imported
            // `styles` object.
            className={styles.error}
          >
            Portfolio
          </button>
          <button
            type="button"
            // Note how the "error" class is accessed as a property on the imported
            // `styles` object.
            className={styles.error}
          >
            Resume
          </button>
        </div>
      </div>
      <div className={styles.footer}>
        Developed and designed by &copy;BRETTPERRYdotdev
      </div>
    </main>
  );
}
