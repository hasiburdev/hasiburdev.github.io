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
  console.log(scrollYProgress);
  return (
    <figure className="absolute left-0 stroke-dark ">
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
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary animate-pulse"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
