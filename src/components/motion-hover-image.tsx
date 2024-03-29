import classNames from "classnames";
import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MouseEventHandler, useRef } from "react";

interface MotionHoverImageProps {
  title: string;
  link: string;
  image: StaticImageData;
}

const FramerImage = motion(Image);

const MotionHoverImage: React.FC<MotionHoverImageProps> = ({
  image,
  link,
  title,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (imageRef.current) {
      imageRef.current.style.display = "inline-block";
      mouseX.set(e.pageX);
      mouseY.set(-10);
    }
  };

  const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (imageRef.current) {
      imageRef.current.style.display = "none";
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <Link
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      href={link}
      target="_blank"
    >
      <h2
        className={classNames(
          "text-xl font-semibold capitalize text-dark decoration-dark",
          "hover:underline",
          "dark:decoration:light dark:text-light",
          "lg:text-lg md:text-base"
        )}
      >
        {title}
      </h2>
      <FramerImage
        style={{
          x: mouseX,
          y: mouseY,
        }}
        whileInView={{
          transition: {
            duration: 0.3,
          },
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        ref={imageRef}
        src={image}
        alt={title}
        className="absolute z-10 hidden h-auto w-96 rounded-lg"
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />
    </Link>
  );
};

export default MotionHoverImage;
