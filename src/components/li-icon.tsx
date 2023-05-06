import classNames from "classnames";
import { motion, useScroll } from "framer-motion";
import { MutableRefObject, useRef } from "react";

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
        "absolute left-0 stroke-dark ",
        "dark:stroke-light"
      )}
    >
      <svg
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="-rotate-90 absolute left-0"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className={classNames(
            "stroke-primary stroke-1 fill-none",
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
          className={classNames("stroke-[5px] fill-light", "dark:fill-dark")}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className={classNames(
            "stroke-1 fill-primary animate-pulse",
            "dark:fill-primary-dark"
          )}
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
