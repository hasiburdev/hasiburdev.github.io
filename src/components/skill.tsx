import classNames from "classnames";
import { motion } from "framer-motion";
interface SkillProps {
  name: string;
  x: string;
  y: string;
}
const Skill: React.FC<SkillProps> = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      initial={{
        x: 0,
        y: 0,
      }}
      whileInView={{
        x,
        y,
        transition: {
          duration: 1.5,
        },
      }}
      viewport={{
        once: true,
      }}
      className={classNames(
        "flex items-center justify-center rounded-full font-semibold bg-dark text-light py-1.5 px-3 absolute shadow dark cursor-pointer border border-solid border-transparent",
        "dark:text-dark dark:bg-light",
        "md:text-sm md:py-1.5 md:px-3",
        "xs:bg-transparent xs:border-dark",
        "xs:dark:bg-transparent xs:dark:text-light xs:dark:border-light"
      )}
    >
      {name}
    </motion.div>
  );
};

export default Skill;
