import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Socials() {
  function resumeFunc() {
    /* const file = new Blob(texts, {type: ''}) */
  }

  return (
    <>
      <div className="text-secondary dark:text-darkSecondary fixed bottom-0 -translate-y-1/2 left-0 flex flex-row justify-around items-end w-full pb-2 md:w-1/12 sm:justify-center sm:gap-20 md:h-8/12 md:flex-col md:items-start md:pl-6 md:top-1/2 ">
        <motion.a
          href="https://twitter.com/McGillivary_Dev"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.2,
          }}
        >
          <FontAwesomeIcon id="faTwitter" icon={faTwitter} size={"xl"} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/jackson-mcgillivary-297802266/"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.2,
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} size={"xl"} />
        </motion.a>

        <motion.a
          href="https://github.com/Revenant70"
          target="_blank"
          rel="noreferrer"
          whileHover={{
            scale: 1.2,
          }}
        >
          <FontAwesomeIcon icon={faGithub} size={"xl"} />
        </motion.a>

        <motion.a
          className="cursor-pointer"
          whileHover={{
            scale: 1.2,
          }}
          onClick={resumeFunc}
        >
          <FontAwesomeIcon icon={faFile} size={"xl"} />
        </motion.a>
      </div>
    </>
  );
}

export default Socials;
