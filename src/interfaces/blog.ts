import { StaticImageData } from "next/image";

export interface Blog {
  title: string;
  image: StaticImageData;
  link: string;
  time?: string;
  summary?: string;
  date?: string;
}

export interface BlogPageProps {
  pageTitle: string;
  metaDescription: string;
  animatedText: string;
  blogs: Blog[];
}
