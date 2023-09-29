import { motion } from "framer-motion";

function Contact() {
  return (
    <div
      id="Contact"
      className="h-screen w-full flex justify-center items-center bg-primary dark:bg-darkPrimary"
    >
      <div className="w-full md:w-6/12 h-screen flex flex-col justify-center items-center ">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        />
        <form className="flex flex-col gap-3 justify-center items-center rounded-xl w-full sm:w-9/12 md:w-full lg:w-10/12 xl:w-9/12 2xl:w-5/12 h-12/12 p-8">
          <h2 className="text-6xl text-center font-secondary border-accent1 dark:border-darkAccent1 text-secondary dark:text-darkSecondary border-b-2 pb-4">
            Reach me
          </h2>
          <div className="flex flex-row justify-between w-full">
            <label
              className="flex flex-col w-full justify-center items-center mr-2"
              htmlFor="fname"
            >
              <span className="text-xl font-secondary text-secondary dark:text-darkSecondary">Full name </span>
              <input
                className="border dark:border-none bg-primary dark:bg-darkSecondary dark:placeholder-darkAccent2 placeholder-opacity-70 rounded-xl p-4 m-2 w-full"
                type="text"
                id="fname"
                name="user_name"
                placeholder="John Doe"
              />
            </label>
            <label
              className="flex flex-col w-full justify-center items-center ml-2"
              htmlFor="email"
            >
              <span className="text-xl font-secondary text-secondary dark:text-darkSecondary">Your email </span>
              <input
                className="border dark:border-none bg-primary dark:bg-darkSecondary dark:placeholder-darkAccent2 text-secondary dark:text-darkAccent2 rounded-xl p-4 m-2 w-full"
                type="text"
                id="email"
                name="user_email"
                placeholder="johndoe@gmail.com"
              />
            </label>
          </div>

          <label
            className="flex flex-col w-full justify-center items-center "
            htmlFor="message"
          >
            <span className="text-xl font-secondary mb-3 text-secondary dark:text-darkSecondary">Your message </span>
            <textarea
              className="border border-secondary dark:border-none bg-primary dark:bg-darkSecondary dark:placeholder-darkAccent2 text-secondary dark:text-darkAccent2 rounded-md p-4 w-full h-32 resize-y"
              type="text"
              id="message"
              name="user_message"
              placeholder="Hey Jackson, I wanted to discuss collaborating"
            />
          </label>
          <button
            className="border border-secondary dark:bg-darkAccent1 dark:border-none rounded-full h-12 w-4/12 mt-4"
            type="button"
          >
            <span className=" border-b-2 border-accent1 dark:border-none">Shoot</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
