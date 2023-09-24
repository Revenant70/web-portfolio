import { motion } from "framer-motion";
import { useState } from "react";

const variants = {
  closed: {scale: 1.0},
  open: {scale: 1.2},
}



function Home() {
  const [setIsOpen, isOpen] = useState(false)
  return (
    <>
      <div className="flex justify-center items-center bg-primary dark:bg-darkPrimary">
        <div className="flex flex-row justify-around items-center h-screen w-10/12">
          <div className="flex flex-col">
            <h2 className="font-secondary dark:font-darkSecondary text-3xl ">Hello, my name is</h2>
            <h1 className="font-secondary dark:font-darkSecondary text-7xl pb-4 pt-2">
              Jackson McGillivary.
            </h1>
            <p className="font-serif text-2xl w-[20rem]">
              I am a software developer{" "}
              <motion.span className="border-b-2 border-accent1 dark:border-darkAccent1 hover:cursor-pointer"
                onClick={() => setIsOpen(isOpen => !isOpen)}
                animate={isOpen ? "open" : "closed"}
                variants={variants}

              >enthralled</motion.span> by
              the idea of beautiful and efficient applications.
            </p>
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
