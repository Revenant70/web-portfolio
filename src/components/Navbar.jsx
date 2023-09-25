import { NavLink } from "react-router-dom";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const elements = ['Home', 'Projects', 'About, Contact'];


function Navbar() {
  const [box, setBox] = useState(true);

  return (
    <div className="App fixed">
      <nav>
        <div className="flex flex-row gap-8 p-6 pl-8 hidden">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-serif text-2xl font-medium border-b-2 border-accent1"
                : "font-serif text-2xl font-medium"
            }
            to="/"
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
          >
            Contact
          </NavLink>
        </div>
        <div className="fixed right-0 flex gap-8 p-6 pr-8">
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
                className="bg-primary shadow-xl dark:bg-darkAccent2 w-64 h-96 absolute right-4 top-2 rounded-xl flex flex-col justify-start items-end pr-4 pt-3"
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
                <motion.li
                className="list-none"
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                >
                  <div>{}</div>

                </motion.li>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
