import classNames from "classnames";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface FeaturedBlogProps {
  image: StaticImageData;
  title: string;
  time: string;
  summary: string;
  link: string;
}

const FramerImage = motion(Image);

const FeaturedBlog: React.FC<FeaturedBlogProps> = ({
  image,
  link,
  summary,
  time,
  title,
}) => {
  return (
    <li
      className={classNames(
        "relative col-span-1 w-full border border-solid border-dark bg-light p-4",
        "dark:border-light dark:bg-dark"
      )}
    >
      <div
        className={classNames(
          "absolute -right-2 top-2 -z-10 h-[100%] w-[100%] bg-dark",
          "dark:bg-light",
          "md:-right-1 md:top-1"
        )}
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
          }}
          src={image}
          alt={title}
          className="h-auto w-full"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2
          className={classNames(
            "my-2 mt-4 text-2xl font-bold capitalize text-dark underline-offset-2",
            "hover:underline",
            "dark:text-light",
            "md:text-xl xs:text-lg"
          )}
        >
          {title}
        </h2>
      </Link>
      <p className={classNames("mb-2 text-sm text-dark", "dark:text-light")}>
        {summary}
      </p>
      <span
        className={classNames(
          "font-semibold text-primary",
          "dark:text-primary-dark"
        )}
      >
        {time}
      </span>
    </li>
  );
};

export default FeaturedBlog;
