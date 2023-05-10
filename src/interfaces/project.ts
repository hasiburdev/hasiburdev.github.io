import { StaticImageData } from "next/image";

export interface Project {
  githubLink: string;
  summary: string;
  link: string;
  title: string;
  tags: string[];
  image: StaticImageData;
  featured?: boolean;
}
