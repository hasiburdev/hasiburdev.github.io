import Link from "next/link";
import { motion } from "framer-motion";
import classNames from "classnames";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center m-2 relative">
      <div
        className={classNames(
          "absolute top-1 -right-1 -z-10 w-[100%] h-[102%] rounded-sm bg-dark",
          "dark:bg-light"
        )}
      />
      <MotionLink
        className={classNames(
          "border capitalize border-solid border-dark p-1 rounded-sm bg-light text-dark flex items-center justify-center  text-2xl font-bold",
          "dark:border-light dark:text-light dark:bg-dark"
        )}
        href="/"
      >
        HASIBUR
      </MotionLink>
    </div>
  );
};
export default Logo;
