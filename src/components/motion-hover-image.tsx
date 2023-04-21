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
      <h2 className="capitalize text-xl font-semibold hover:underline">
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
        className="z-10 w-96 h-auto absolute rounded-lg hidden"
      />
    </Link>
  );
};

export default MotionHoverImage;
