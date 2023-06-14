import classNames from "classnames";
import { motion, useScroll } from "framer-motion";
import { MutableRefObject } from "react";

interface LiIconProps {
  reference: MutableRefObject<null>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure
      className={classNames(
        "absolute -left-9 stroke-dark ",
        "dark:stroke-light"
      )}
    >
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="absolute left-0 -rotate-90"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className={classNames(
            "fill-none stroke-primary stroke-1",
            "dark:stroke-primary-dark"
          )}
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className={classNames("fill-light stroke-[5px]", "dark:fill-dark")}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className={classNames(
            "animate-pulse fill-primary stroke-1",
            "dark:fill-primary-dark"
          )}
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
