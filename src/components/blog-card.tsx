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
        "relative w-full px-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4",
        "dark:bg-dark dark:border-light dark:text-light"
      )}
    >
      <MotionHoverImage title={title} link={link} image={image} />
      <span
        className={classNames(
          "text-primary font-semibold pl-4",
          "dark:text-primary-dark"
        )}
      >
        {date}
      </span>
    </motion.li>
  );
};

export default BlogCard;
