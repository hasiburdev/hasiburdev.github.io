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

export interface ProjectPageProps {
  projects: Project[];
  animatedText: string;
  pageTitle: string;
  metaDescription: string;
}
