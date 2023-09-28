import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function ProjectInfo () {
    return (
        <div className="h-64 w-6/12">
            <h2 className="text-secondary dark:text-darkSecondary font-serif text-5xl">Project #1</h2>
            <div className="bg-accent1 dark:bg-darkAccent1 h-0.5 2xl:w-6/12 mt-3 mb-3"></div>
            <ul
              className={`flex flex-row justify-start gap-5 font-serif text-2xl mb-3 text-secondary dark:text-darkSecondary`}
            >
              <li>React</li>
              <li>Tailwind</li>
              <li>Node</li>
            </ul>
            <p className="w-6/12 text-sm font-serif mb-2 text-secondary dark:text-darkSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quisquam ratione cupiditate consectetur sapiente, et
              tenetur, aperiam unde sed esse voluptatibus earum corrupti aut
              vitae.
            </p>
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
    )
}