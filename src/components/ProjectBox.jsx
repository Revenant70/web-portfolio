import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function ProjectBox({appImage, appLink, appGithubLink}) {
  return (
    <div className="w-auto h-auto sm:h-auto sm:w-auto m-2 rounded-2xl relative">
      <img src={appImage} className="h-full w-full object-contain  rounded-2xl  border-accent1 dark:border-darkAccent1 border-2 " alt="" />
      <div className="absolute bottom-4 right-3 md:hidden">
        <a
          href={appLink}
          target="_blank"
          rel="noreferrer"
          className="m-2 ml-0 dark:text-darkSecondary"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
        </a>
        <a
          href={appGithubLink}
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
