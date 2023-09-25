import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [icons, setIcons] = useState(faToggleOff);

  function handleThemeSwitch() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <div className="fixed left-0 bottom-0 flex flex-row w-screen">
        <div className="basis-1/3 flex justify-start pl-7 pb-7 text-5xl font-secondary">
          JM
        </div>
        <div className="basis-1/3 flex justify-center">
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
            )};
          </AnimatePresence>
        </div>
        <div className="basis-1/3 flex justify-center"></div>
      </div>
    </>
  );
}

export default Footer;
