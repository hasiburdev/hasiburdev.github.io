import classNames from "classnames";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="flex flex-col items-center gap-32">
      <h2
        className={classNames(
          "mt-64 w-full text-center text-6xl font-bold",
          "md:mt-24 md:text-5xl"
        )}
      >
        Skills
      </h2>
      <div
        className={classNames(
          "relative flex  aspect-square  w-1/2 items-center justify-center rounded-full rounded-full border border-solid border-dark ",
          "dark:bg-circular-dark",
          "lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
        )}
      >
        {/* <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className={classNames(
            "flex cursor-pointer items-center justify-center rounded-full bg-dark p-8 font-semibold text-light shadow-dark",
            "dark:bg-light dark:text-dark",
            "lg:py-3 md:px-4 md:py-2.5 md:text-lg"
          )}
        >
          Web
        </motion.div> */}
        <motion.div className="skill absolute left-1/2 top-1/2  flex aspect-square origin-top translate-x-[100px] items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div>
        {/* <motion.div className="skill absolute left-full top-1/2 flex aspect-square  origin-center -translate-x-1/2 -translate-y-[40px] rotate-[30deg] items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div>{" "} */}
        {/* <motion.div className="skill absolute left-full top-1/2  flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div>{" "}
        <motion.div className="skill absolute left-full top-1/2  flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div>{" "}
        <motion.div className="skill absolute left-full top-1/2  flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div>{" "}
        <motion.div className="skill absolute left-full top-1/2  flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div>{" "}
        <motion.div className="skill absolute left-full top-1/2  flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-dark p-2 text-lg  font-bold text-light ">
          HTML
        </motion.div> */}
        {/* <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Strapi" x="15vw" y="-12vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="TypeScript" x="32vw" y="-5vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" /> */}
      </div>
    </div>
  );
};
export default Skills;
