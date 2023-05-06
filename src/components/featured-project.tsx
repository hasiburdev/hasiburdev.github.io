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
        "w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative",
        "dark:border-light dark:bg-dark"
      )}
    >
      <div
        className={classNames(
          "absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-3xl bg-dark",
          "dark:bg-light"
        )}
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
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
            " underline-offset-2",
            "hover:underline",
            "dark:decoration-light"
          )}
        >
          <h2
            className={classNames(
              "my-2 w-full text-left text-4xl font-bold text-dark",
              "dark:text-light"
            )}
          >
            {title}
          </h2>
        </Link>
        <p
          className={classNames(
            "my-2 font-medium text-dark",
            "dark:text-light"
          )}
        >
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light py-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
