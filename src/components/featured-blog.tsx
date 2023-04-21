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
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[102%] rounded-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 0.5,
          }}
          src={image}
          alt={title}
          className="w-full h-auto"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize mt-4 text-2xl font-bold my-2 hover:underline underline-offset-2">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

export default FeaturedBlog;
