import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export function ProjectInfo({ right = false, techUsed, appName, appDesciption, appLink, appGithubLink }) {
  return (
    <div
      id="project-container"
      className={`h-8/12 w-11/12 flex flex-col md:flex-col justify-center ${right ? "md:items-end" : ""}`}
    >
      <div className={`flex flex-col justifiy-center items-center md:items-start h-full w-11/12 md:w-8/12`}>
        <h2 className="text-secondary dark:text-darkSecondary font-serif text-5xl xl:text-7xl text-center md:text-left w-full">
          {appName}
        </h2>
        <div className="bg-accent1 dark:bg-darkAccent1 h-0.5 w-10/12 md:w-8/12 mt-3 mb-3"></div>
        <ul
          className={`flex flex-row justify-start gap-5 font-serif text-2xl xl:text-4xl mb-3 text-secondary dark:text-darkSecondary`}
        >
        {techUsed && techUsed.length > 0 ? (
        techUsed.map((tech, index) => <li key={index}>{tech}</li>)
          ) : null}         
        </ul>
        <p className="w-full sm:w-11/12 md:w-9/12 text-center md:text-left text-sm md:text-md xl:text-xl font-serif mb-2 text-secondary dark:text-darkSecondary">
          {appDesciption}  
        </p>
        <div className="hidden md:flex">
          <motion.a
            whileHover={{
              transition: 0.25,
              y: -3,
              scale: 1.18
            }}
            href={appLink}
            target="_blank"
            rel="noreferrer"
            className="m-2 ml-0 dark:text-darkSecondary"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
          </motion.a>
          <motion.a
            whileHover={{
              transition: 0.25,
              y: -3,
              scale: 1.18
            }}
            href={appGithubLink}
            target="_blank"
            rel="noreferrer"
            className="m-2 dark:text-darkSecondary"
          >
            <FontAwesomeIcon icon={faGithub} size={"xl"} />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
