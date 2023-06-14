import { StaticImageData } from "next/image";

export interface HomePageProps {
  pageTitle: string;
  metaDescription?: string;
  summary: string;
  animatedText: string;
  resumeLink: string;
  emailAddress: string;
  profileImage: StaticImageData;
}
