import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Projects() {
  return (
    <div
      id="Projects"
      className=" h-screen w-screen flex flex-col justify-items-center items-center scrollbar-hide snap-y snap-mandatory overflow-scroll"
    >
      <div className="min-h-screen w-8/12 flex flex-col justify-center gap-12 snap-start">
        <div className="flex flex-row justify-between w-full h-64">
          <div className="h-64 w-7/12">
            <h2 className="text-secondary font-serif text-5xl">Project #1</h2>
            <div className="bg-accent1 h-0.5 w-6/12 mt-3 mb-3"></div>
            <ul
              className={`flex flex-row justify-start gap-5 font-serif text-2xl mb-3`}
            >
              <li>React</li>
              <li>Tailwind</li>
              <li>Node</li>
            </ul>
            <p className="w-6/12 text-sm font-serif mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quisquam ratione cupiditate consectetur sapiente, et
              tenetur, aperiam unde sed esse voluptatibus earum corrupti aut
              vitae.
            </p>
            <a
              href="https://github.com/Revenant70"
              target="_blank"
              rel="noreferrer"
              className="m-2 ml-0"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
            </a>
            <a
              href="https://github.com/Revenant70"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <FontAwesomeIcon icon={faGithub} size={"xl"} />
            </a>
          </div>
          <div className="bg-secondary h-64 w-5/12 "></div>
        </div>
        <div className="flex flex-row justify-between w-full h-64 ">
          <div className="bg-secondary h-64 w-5/12 "></div>
          <div className="flex flex-row justify-end w-6/12">
            <div className="h-64 w-6/12">
              <h2 className="text-secondary font-serif text-5xl">Project #2</h2>
              <div className="bg-accent1 h-0.5 w-full mt-3 mb-3"></div>
              <ul
                className={`flex flex-row justify-start gap-5 font-serif text-2xl mb-3`}
              >
                <li>React</li>
                <li>Tailwind</li>
                <li>Node</li>
              </ul>
              <p className="w-full text-sm font-serif mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quisquam ratione cupiditate consectetur sapiente, et
                tenetur, aperiam unde sed esse voluptatibus earum corrupti aut
                vitae.
              </p>
              <a
                href="https://github.com/Revenant70"
                target="_blank"
                rel="noreferrer"
                className="m-2 ml-0"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
              </a>
              <a
                href="https://github.com/Revenant70"
                target="_blank"
                rel="noreferrer"
                className="m-2"
              >
                <FontAwesomeIcon icon={faGithub} size={"xl"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-8/12 flex flex-col justify-center gap-12 snap-start">
        <div className="flex flex-row justify-between w-full h-64 ">
          <div className="h-64 w-6/12 ">
            <h2 className="text-secondary font-serif text-5xl">Project #3</h2>
            <div className="bg-accent1 h-0.5 w-7/12 mt-3 mb-3"></div>
            <ul
              className={`flex flex-row justify-start gap-5 font-serif text-2xl mb-3`}
            >
              <li>React</li>
              <li>Tailwind</li>
              <li>Node</li>
            </ul>
            <p className="w-6/12 text-sm font-serif mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores quisquam ratione cupiditate consectetur sapiente, et
              tenetur, aperiam unde sed esse voluptatibus earum corrupti aut
              vitae.
            </p>
            <a
              href="https://github.com/Revenant70"
              target="_blank"
              rel="noreferrer"
              className="m-2 ml-0"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
            </a>
            <a
              href="https://github.com/Revenant70"
              target="_blank"
              rel="noreferrer"
              className="m-2"
            >
              <FontAwesomeIcon icon={faGithub} size={"xl"} />
            </a>
          </div>
          <div className="bg-secondary h-64 w-5/12 "></div>
        </div>
        <div className="flex flex-row justify-between w-full h-64 ">
          <div className="bg-secondary h-64 w-5/12 "></div>
          <div className="flex flex-row justify-end w-6/12">
            <div className="h-64 w-6/12">
              <h2 className="text-secondary font-serif text-5xl">Project #2</h2>
              <div className="bg-accent1 h-0.5 w-full mt-3 mb-3"></div>
              <ul
                className={`flex flex-row justify-start gap-5 font-serif text-2xl mb-3`}
              >
                <li>React</li>
                <li>Tailwind</li>
                <li>Node</li>
              </ul>
              <p className="w-full text-sm font-serif mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quisquam ratione cupiditate consectetur sapiente, et
                tenetur, aperiam unde sed esse voluptatibus earum corrupti aut
                vitae.
              </p>
              <a
                href="https://github.com/Revenant70"
                target="_blank"
                rel="noreferrer"
                className="m-2 ml-0"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size={"xl"} />
              </a>
              <a
                href="https://github.com/Revenant70"
                target="_blank"
                rel="noreferrer"
                className="m-2"
              >
                <FontAwesomeIcon icon={faGithub} size={"xl"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
