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
        "mx-auto py-2 flex items-center justify-center text-center w-full overflow-hidden"
      )}
    >
      <motion.h1
        variants={quote}
        initial={"initial"}
        animate="animate"
        className={classNames(
          className,
          "inline-block w-full text-dark font-bold capitalize text-6xl"
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