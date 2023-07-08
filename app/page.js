import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hey there! I'm glad you're here. I'm Brett, a software engineer based
          in Texas. Have a look around and let me know if you are interested in
          working together.
        </p>
      </div>
      <div className={styles.description}>
        <div className={styles.image}>
          <Image src="/brett.png" alt="Brett Perry" width={300} height={300} />
        </div>
        <div className={styles.social}>
          <a
            href="
            https://www.linkedin.com/
          "
          >
            <AiOutlineLinkedin alt="LinkedIn" size={50} />
          </a>
          <a
            href="
            https://www.github.com/
          "
          >
            <AiOutlineGithub alt="GitHub" size={50} />
          </a>
          <a
            href="
            https://www.instagram.com
          "
          >
            <AiOutlineInstagram alt="Instagram" size={50} />
          </a>
        </div>
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
    </main>
  );
}
