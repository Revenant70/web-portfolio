import { useState } from "react";
import { motion } from "framer-motion";

import QuoteCard from "./QuoteCard";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center bg-primary dark:bg-darkPrimary">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-around items-center h-screen w-10/12">
          <div className="mt-12 mb-36 md:m-0 flex flex-col">
            <h2 className="font-secondary dark:font-darkSecondary text-center md:text-left text-2xl sm:text-3xl md:text-4xl ">
              Hello, my name is
            </h2>
            <h1 className="font-secondary dark:font-darkSecondary text-center md:text-left text-5xl sm:text-5xl md:text-7xl pb-4 pt-2">
              Jackson McGillivary.
            </h1>
            <motion.div className="flex justify-center sm:flex sm:justify-center md:flex md:justify-start md:relative ">
              <p className="font-serif w-7/12 sm:w-7/12 md:w-[20rem] text-center md:text-left text-xl sm:text-2xl md:text-2xl">
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
              className="mt-20 md:m-0 w-64 h-64 object-cover rounded-xl border border-secondary bg-darkSecondary"
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
