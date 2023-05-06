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
      "w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 flex-col",
      "dark:bg-dark dark:border-light"
    )}
  >
    <div
      className={classNames(
        "absolute top-0 -right-1 -z-10 w-[100%] h-[101%] rounded-3xl bg-dark",
        "dark:bg-light"
      )}
    />
    <Link
      href={link}
      target="_blank"
      className="w-full cursor-pointer overflow-hidden rounded-lg"
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-auto"
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
      />
    </Link>
    <div className="w-full flex flex-col items-start justify-between mt-4">
      <span
        className={classNames(
          "text-primary font-medium text-xl",
          "dark:text-primary-dark"
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
            "dark:text-light"
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
      <div className="mt-2 flex items-center justify-between w-full">
        <Link
          href={link}
          target="_blank"
          className={classNames(
            "underline py-2 px-6 text-lg font-semibold text-dark",
            "dark:text-light"
          )}
        >
          Visit
        </Link>
        <Link href={githubLink} target="_blank" className="w-8">
          <GithubIcon />
        </Link>
      </div>
    </div>
  </article>
);

export default Project;
