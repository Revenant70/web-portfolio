import { AnimatePresence, motion } from "framer-motion";

export default function QuoteCard(props) {
  return (
    <AnimatePresence>
        {props.trigger && (
            <motion.div
            className="bg-primary shadow-xl flex flex-row w-72 h-48 rounded-2xl absolute top-[-0px] left-96"
            initial={{
              x: -100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: -100,
              opacity: 0,
              transition: { duration: 0.45, ease: "easeInOut" },

            }}
            whileHover={{
              scale: 1.025,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <motion.div className="flex flex-col justify-center items-start">
              {props.children}
              <div className="flex flex-col pl-4">
                <h3 className="text-3xl font-secondary">en·​thrall·ed</h3>
                <p className="text-xl font-serif">
                  variants or <span className="text-accent1">enthral</span>
                </p>
                <p className="text-lg font-serif text-accent2 opacity-70">
                  enthral; enthralling
                </p>
              </div>
              <div className="border-b-2 border-accent1 pt-1 w-40 ml-4"></div>
              <div className="pl-4 pt-1">
                <p className="font-serif text-xl opacity-90">
                  1 - to hold spellbound : charm
                </p>
                <p className="font-serif text-xl opacity-90">
                  2 - to hold in or reduce to slavery
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>
  );
}
