import { motion } from "framer-motion";
import classNames from "classnames";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  return (
    <div
      className={classNames(
        "mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center",
        "sm:py-0"
      )}
    >
      <motion.h1
        variants={quote}
        initial={"initial"}
        animate="animate"
        className={classNames(
          className,
          "inline-block w-full text-6xl font-bold capitalize text-dark",
          "dark:text-light"
        )}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            className="inline-block"
            key={index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
