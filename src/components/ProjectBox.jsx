import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function ProjectBox() {
  return (
    <div className="bg-darkPrimary h-52 w-10/12 sm:h-64 sm:w-10/12  m-2 rounded-2xl border-accent1 dark:border-darkAccent1 border-2 relative">
      <div className="absolute bottom-3 left-3 md:hidden">
        <a
          href="https://github.com/Revenant70"
          target="_blank"
          rel="noreferrer"
          className="m-2 ml-0 dark:text-darkSecondary"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
        </a>
        <a
          href="https://github.com/Revenant70"
          target="_blank"
          rel="noreferrer"
          className="m-2 dark:text-darkSecondary"
        >
          <FontAwesomeIcon icon={faGithub} size={"xl"} />
        </a>
      </div>
    </div>
  );
}
