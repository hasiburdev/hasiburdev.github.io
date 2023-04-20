import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "./icons";

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
  <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light relative p-6 flex-col">
    <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-3xl bg-dark" />
    <Link
      href={link}
      target="_blank"
      className="w-full cursor-pointer overflow-hidden rounded-lg "
    >
      <Image src={image} alt={title} className="w-full h-auto" />
    </Link>
    <div className="w-full flex flex-col items-start justify-between mt-4">
      <span className="text-primary font-medium text-xl">{type}</span>
      <Link
        href={link}
        target="_blank"
        className="hover:underline underline-offset-2"
      >
        <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
      </Link>
      <p className="my-2 font-medium text-dark ">{summary}</p>
      <div className="mt-2 flex items-center justify-between w-full">
        <Link
          href={link}
          target="_blank"
          className="underline py-2 px-6 text-lg font-semibold"
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
