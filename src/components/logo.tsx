import Link from "next/link";
import { motion } from "framer-motion";
import classNames from "classnames";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="relative m-2 flex items-center justify-center">
      {/* <div
        className={classNames(
          "absolute -right-1 top-1 -z-10 h-[102%] w-[100%] rounded-sm bg-dark",
          "dark:bg-light"
        )}
      /> */}
      <MotionLink
        className={classNames(
          "flex items-center justify-center rounded-sm border border-solid border-dark bg-light p-1 text-2xl font-bold  capitalize text-dark",
          "dark:border-light dark:bg-dark dark:text-light"
        )}
        href="/"
      >
        HASIBUR
      </MotionLink>
    </div>
  );
};
export default Logo;
