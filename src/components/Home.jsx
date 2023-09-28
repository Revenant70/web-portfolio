import { useState } from "react";
import { motion } from "framer-motion";

import QuoteCard from "./QuoteCard";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center bg-primary dark:bg-darkPrimary">
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-around items-center h-screen w-10/12">
          <div className="mt-12 mb-36 md:m-0 flex flex-col basis-1/2 md:basis-2/6 lg:basis-1/2">
            <h2 className="font-secondary dark:font-darkSecondary text-center md:text-left text-xl sm:text-4xl md:text-3xl xl:text-5xl">
              Hello, my name is
            </h2>
            <h1 className="font-secondary dark:font-darkSecondary text-center md:text-left text-4xl sm:text-5xl md:text-6xl xl:text-8xl pb-4 pt-2">
              Jackson McGillivary.
            </h1>
            <motion.div className="flex justify-center sm:flex sm:justify-center md:flex md:justify-start md:relative ">
              <p className="font-serif w-9/12 sm:w-10/12 md:w-[20rem] text-center md:text-left text-xl sm:text-2xl md:text-2xl xl:text-4xl">
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
          <div className="flex justify-end basis-1/2 md:basis-4/6 lg:basis-1/2 mt-20 md:m-0 lg:m-0">
            <img
              className="mt-20 w-44 h-44 md:m-0 md:h-56 md:w-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 object-cover rounded-xl border border-secondary bg-darkSecondary"
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
