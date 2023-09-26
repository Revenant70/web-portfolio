import { NavLink } from "react-router-dom";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";



function Navbar() {
  const [box, setBox] = useState(true);

  return (
    <div className="App fixed">
      <nav>
        <div id="desktopNav" className="hidden md:flex flex-row gap-8 p-6 pl-8">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                : "font-serif text-2xl font-medium"
            }
            to="/"
            name="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                : "font-serif text-2xl font-medium"
            }
            to="/Projects"
            name="Projects"
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                : "font-serif text-2xl font-medium"
            }
            to="/About"
            name="About"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                : "font-serif text-2xl font-medium"
            }
            to="/Contact"
            name="Contact"
          >
            Contact
          </NavLink>
        </div>
        <div className="fixed right-0 flex gap-8 p-6 pr-8 md:hidden">
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            onClick={() => {
              setBox(box === false ? true : false);
            }}
          >
            <FontAwesomeIcon icon={faBars} size={"2xl"}></FontAwesomeIcon>
          </motion.button>
          <AnimatePresence>
            {!box && (
              <motion.div
                className="bg-primary shadow-xl dark:bg-darkAccent2 w-56 h-72 absolute right-4 top-2 rounded-xl flex flex-col justify-start items-end pr-4 pt-3"
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -100,
                  opacity: 0,
                  transition: { duration: 0.45, ease: "easeInOut" },
                }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                  }}
                  onClick={() => {
                    setBox(box === false ? true : false);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={"2xl"}
                  ></FontAwesomeIcon>
                </motion.button>
                <motion.ul className="flex flex-col justify-start items-start gap-6 p-4 pl-6 w-full h-72">
                  <NavLink
                    whileHover={{
                      scale: 1.1,
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                        : "font-serif text-2xl font-medium"
                    }
                    to="/"
                    name="/"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                        : "font-serif text-2xl font-medium"
                    }
                    to="/Projects"
                    name="Projects"
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                        : "font-serif text-2xl font-medium"
                    }
                    to="/About"
                    name="About"
                  >
                    About
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                        : "font-serif text-2xl font-medium"
                    }
                    to="/Contact"
                    name="Contact"
                  >
                    Contact
                  </NavLink>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
