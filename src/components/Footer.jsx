import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

function handleThemeSwitch() {
  document.documentElement.classList.toggle("dark");
}

function Footer() {
  const [icons, setIcons] = useState(faToggleOff);

  return (
    <>
      <div className="text-secondary dark:text-darkSecondary fixed top-0 md:top-auto md:bottom-0 max-h-4/12 left-0 flex flex-row md:justify-center md:items-end w-8/12">
        <div className="basis-1/2 flex justify-start pl-5 pt-3 md:pl-7 md:pb-7 text-5xl font-secondary">
          JM
        </div>
        <div className="basis-1/2 flex justify-center pb-2 pt-0">
          <AnimatePresence>
            {icons && (
              <motion.button
                onClick={() => {
                  setIcons(icons === faToggleOn ? faToggleOff : faToggleOn);
                  handleThemeSwitch();
                }}
              >
                <FontAwesomeIcon icon={icons} size={"xl"}></FontAwesomeIcon>
              </motion.button>
            )}
            ;
          </AnimatePresence>
        </div>
        <div>
          <p className="text-secondary  dark:text-darkSecondary font-serif w-9/12 sm:w-7/12 md:w-[16rem] lg:w-[20rem] text-center md:text-right hidden md:block text-sm sm:text-md md:text-md xl:text-lg pb-3 pr-5 fixed right-0 bottom-0">
            Designed and built by me
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
