import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubIcon } from "./icons";
import classNames from "classnames";

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  image: StaticImageData;
  link: string;
  githubLink: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  githubLink,
  image,
  link,
  summary,
  title,
  type,
}) => {
  return (
    <article
      className={classNames(
        "relative flex w-full items-center justify-between border border-solid border-dark bg-light p-12 shadow-2xl",
        "dark:border-light dark:bg-dark",
        "lg:p-8 md:flex-col md:p-8 sm:p-6 xs:p-4"
      )}
    >
      <div
        className={classNames(
          "absolute -right-2 top-2 -z-10 h-[100%] w-[100%] bg-dark",
          "dark:bg-light"
        )}
      />
      <Link
        href={link}
        target="_blank"
        className={classNames(
          "w-1/2 cursor-pointer overflow-hidden",
          "md:w-full"
        )}
      >
        <Image
          src={image}
          alt={title}
          className="h-auto w-full"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </Link>
      <div
        className={classNames(
          "flex w-1/2 flex-col items-start justify-between pl-6",
          "md:w-full md:pl-0 md:pt-4"
        )}
      >
        <span
          className={classNames(
            "text-xl font-medium text-primary",
            "dark:text-primary-dark",
            "md:text-base xs:text-sm"
          )}
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className={classNames(
            " underline-offset-2",
            "hover:underline",
            "dark:decoration-light"
          )}
        >
          <h2
            className={classNames(
              "my-2 w-full text-left text-4xl font-bold text-dark",
              "dark:text-light",
              "lg:text-xl md:text-lg sm:text-base"
            )}
          >
            {title}
          </h2>
        </Link>
        <p
          className={classNames(
            "my-2 font-medium text-dark",
            "dark:text-light",
            "sm:text-sm"
          )}
        >
          {summary}
        </p>
        <div
          className={classNames(
            "mt-2 flex items-center",
            "md:w-full md:justify-between"
          )}
        >
          <Link
            href={githubLink}
            target="_blank"
            className={classNames(
              "w-10 rounded-full",
              "dark:bg-light",
              "md:order-2"
            )}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className={classNames(
              "ml-4 rounded-lg border border-solid border-transparent bg-dark px-6 py-2 text-lg font-semibold text-light duration-300 ease-in-out",
              "hover:border-dark hover:bg-light hover:text-dark",
              "dark:border-transparent dark:bg-light dark:text-dark",
              "dark:hover:border-light dark:hover:bg-dark dark:hover:text-light",
              "md:order-1 md:ml-0 md:px-3 md:py-1.5 md:text-base"
            )}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
