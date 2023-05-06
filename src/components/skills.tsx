import { motion } from "framer-motion";
import Skill from "./skill";
import classNames from "classnames";
const Skills = () => {
  return (
    <div>
      <h2
        className={classNames(
          "font-bold text-6xl w-full mt-64 text-center",
          "md:text-5xl md:mt-24"
        )}
      >
        Skills
      </h2>
      <div
        className={classNames(
          "w-full relative h-screen flex items-center justify-center rounded-full bg-circular-light rounded-full",
          "dark:bg-circular-dark",
          "lg:h-[80vh] md:h-[60vh] sm:h-[50vh]"
        )}
      >
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className={classNames(
            "flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer",
            "dark:text-dark dark:bg-light",
            "lg:py-3 md:text-lg md:py-2.5 md:px-4"
          )}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Strapi" x="15vw" y="-12vw" />
        <Skill name="Figma" x="0vw" y="-20vw" />
        <Skill name="TypeScript" x="32vw" y="-5vw" />
        <Skill name="TailwindCSS" x="18vw" y="18vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
