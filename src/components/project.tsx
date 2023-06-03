import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./icons";
import classNames from "classnames";

interface ProjectProps {
  title: string;
  type: string;
  link: string;
  githubLink: string;
  image: StaticImageData;
  summary?: string;
}
const Project: React.FC<ProjectProps> = ({
  githubLink,
  image,
  link,
  title,
  type,
  summary,
}) => (
  <article
    className={classNames(
      "relative flex w-full flex-col items-center justify-center border border-solid border-dark bg-light p-6",
      "dark:border-light dark:bg-dark",
      "lg:p-4 md:p-4 sm:p-3 xs:p-2"
    )}
  >
    <div
      className={classNames(
        "absolute -right-1 top-1 -z-10 h-[100%] w-[100%] bg-dark",
        "dark:bg-light"
      )}
    />
    <Link
      href={link}
      target="_blank"
      className="w-full cursor-pointer overflow-hidden"
    >
      <Image
        src={image}
        alt={title}
        className="h-auto w-full"
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />
    </Link>
    <div className="mt-4 flex w-full flex-col items-start justify-between">
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
          "underline-offset-2",
          "hover:underline",
          "dark:decoration-light"
        )}
      >
        <h2
          className={classNames(
            "my-2 w-full text-left text-3xl font-bold text-dark",
            "dark:text-light",
            "lg:text-xl md:text-lg sm:text-base"
          )}
        >
          {title}
        </h2>
      </Link>
      <p
        className={classNames("my-2 font-medium text-dark", "dark:text-light")}
      >
        {summary}
      </p>
      <div className="mt-2 flex w-full items-center justify-between">
        <Link
          href={link}
          target="_blank"
          className={classNames(
            "px-0 py-2 text-lg font-semibold text-dark underline",
            "dark:text-light"
          )}
        >
          Visit
        </Link>
        <Link
          href={githubLink}
          target="_blank"
          className={classNames(
            "w-8 rounded-full",
            "dark:bg-light",
            "md:order-2"
          )}
        >
          <GithubIcon />
        </Link>
      </div>
    </div>
  </article>
);

export default Project;
