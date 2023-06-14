import { StaticImageData } from "next/image";
import MotionHoverImage from "./motion-hover-image";
import { motion } from "framer-motion";
import classNames from "classnames";

interface BlogCardProps {
  image: StaticImageData;
  title: string;
  date: string;
  link: string;
}
const BlogCard: React.FC<BlogCardProps> = ({ image, title, date, link }) => {
  return (
    <motion.li
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      initial={{
        y: 200,
      }}
      viewport={{ once: true }}
      className={classNames(
        "relative my-4 flex w-full items-center  justify-between border border-solid border-dark bg-light px-4 py-6 text-dark first:mt-0 ",
        "dark:border-light dark:bg-dark dark:text-light",
        "md:flex-col md:items-start md:px-3 md:py-4 sm:px-2 sm:py-3"
      )}
    >
      <div
        className={classNames(
          "absolute -right-1 top-1 -z-10 h-[100%] w-[100%] bg-dark",
          "dark:bg-light"
        )}
      />
      <MotionHoverImage title={title} link={link} image={image} />
      <span
        className={classNames(
          "pl-4 font-semibold text-primary",
          "dark:text-primary-dark",
          "md:pl-0 md:pt-2 sm:pt-1"
        )}
      >
        {date}
      </span>
    </motion.li>
  );
};

export default BlogCard;
