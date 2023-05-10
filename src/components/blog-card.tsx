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
        "relative w-full px-4 py-6 my-4  flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark ",
        "dark:bg-dark dark:border-light dark:text-light",
        "md:flex-col md:items-start md:py-4 md:px-3 sm:py-3 sm:px-2"
      )}
    >
      <div
        className={classNames(
          "absolute top-1 -right-1 -z-10 w-[100%] h-[100%] bg-dark",
          "dark:bg-light"
        )}
      />
      <MotionHoverImage title={title} link={link} image={image} />
      <span
        className={classNames(
          "text-primary font-semibold pl-4",
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
