import { useState } from "react";
import { motion } from "framer-motion";

import QuoteCard from "./QuoteCard";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center bg-primary dark:bg-darkPrimary max-h-full">
        <div className="h-sc w-10/12 flex justify-center items-center md:justify-center md:items-center">
          <div className="flex flex-col-reverse md:flex-row justify-center md:justify-around items-center h-screen w-full">
            <div className="pt-4 mb-20 md:m-0 md:ml-4 flex flex-col basis-1/2 md:basis-2/6 lg:basis-1/2">
              <h2 className="text-secondary  dark:text-darkSecondary font-secondary text-center md:text-left text-2xl sm:text-4xl md:text-3xl xl:text-4xl">
                Hello, my name is
              </h2>
              <h1 className="text-secondary  dark:text-darkSecondary font-secondary text-center md:text-left text-5xl sm:text-5xl md:text-6xl xl:text-7xl pb-2 pt-0 md:pb-4 md:pt-2">
                Jackson McGillivary.
              </h1>
              <motion.div className="flex justify-center sm:flex sm:justify-center md:flex md:justify-start md:relative ">
                <p className="text-secondary  dark:text-darkSecondary font-serif w-9/12 sm:w-7/12 md:w-[16rem] lg:w-[20rem] text-center md:text-left text-xl sm:text-2xl md:text-2xl xl:text-3xl">
                  I am a software developer{" "}
                  <motion.button
                    className="border-b-2 border-accent1 dark:border-darkAccent1"
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
            <div className="flex justify-center items-end basis-1/2 md:items-center md:justify-end md:basis-4/6 lg:basis-1/2 pt-20 md:p-0 md:m-0 lg:m-0">
              <img
                className="mb-2 w-44 h-44 sm:h-56 sm:w-56 md:m-0 md:h-60 md:w-60 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover rounded-xl border-2 border-secondary dark:border-darkSecondary"
                src="./assets/pngs/Professional-headshot.png"
                alt="A headshot image of Jackson McGillivary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
