import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <h1>About me</h1>
      <div className={styles.tools}>
        <div className={styles.skill}>
          <FaReact alt="React" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
        </div>
        <div className={styles.skill}>
          <RiJavascriptFill alt="JavaScript" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
        </div>
        <div className={styles.skill}>
          <FaJava alt="Java" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
        </div>
        <div className={styles.skill}>
          <FaPython alt="Python" size={25} />
          <AiFillStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
          <AiOutlineStar alt="Star" size={25} />
        </div>
      </div>
    </div>
  );
}
