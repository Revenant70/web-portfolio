import { useState } from "react";
import { motion } from "framer-motion";

import QuoteCard from "./QuoteCard";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center bg-primary dark:bg-darkPrimary">
        <div className="flex flex-row justify-around items-center h-screen w-10/12">
          <div className="flex flex-col">
            <h2 className="font-secondary dark:font-darkSecondary text-3xl ">
              Hello, my name is
            </h2>
            <h1 className="font-secondary dark:font-darkSecondary text-7xl pb-4 pt-2">
              Jackson McGillivary.
            </h1>
            <motion.div className="relative">
              <p className="font-serif text-2xl w-[20rem]">
                I am a software developer{" "}
                <motion.button
                  className="border-b-2 border-accent1"
                  whileHover={{
                    scale: 1.025,
                  }}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  enthralled
                </motion.button>{" "}
                by the idea of beautiful and efficient applications.
              </p>
              <QuoteCard trigger={isOpen} setTrigger={isOpen} />
            </motion.div>
          </div>
          <div>
            <img
              className="w-64 h-64 object-cover rounded-xl border border-secondary bg-darkSecondary"
              src="./assets/pngs/Professional-headshot.png"
              alt="A headshot image of Jackson McGillivary"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
