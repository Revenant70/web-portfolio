import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";


function Socials() {
  return (
    <>
      <div className="fixed left-0 bottom-0 w-screen md:h-screen md:top-0">
        <div className=" flex flex-row justify-around items-center pb-2 sm:justify-center sm:gap-24 sm:pb-2 md:gap-8 bg-transparent md:flex-col md:justify-center md:items-start md:h-screen md:pl-8">
          <motion.a
            href="https://twitter.com/Revenant_Dev"
            target="_blank"
            rel="noreferrer"

            whileHover={{
                scale: 1.2
            }}
          >
            <FontAwesomeIcon id="faTwitter" icon={faTwitter} size={"lg"}/>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jackson-mcgillivary-297802266/"
            target="_blank"
            rel="noreferrer"

            whileHover={{
                scale: 1.2
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} size={"lg"}/>
          </motion.a>
          <motion.a
            href="https://github.com/Revenant70"
            target="_blank"
            rel="noreferrer"

            whileHover={{
                scale: 1.2
            }}
          >
            <FontAwesomeIcon icon={faGithub} size={"lg"} />
          </motion.a>
        </div>
      </div>
    </>
  );
}

export default Socials;
