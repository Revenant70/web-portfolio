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
      <div className="fixed left-0 top-0 h-screen">
        <div className="h-screen flex flex-col justify-center items-start gap-16 pl-8 bg-transparent">
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
