import Image from "next/image";
import Layout from "@/components/layout";
import { profileImage } from "@/assets/images/profile";
import AnimatedText from "@/components/animated-text";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import Head from "next/head";
import classNames from "classnames";
// import HireMe from "@/components/hire-me";
// import { lightBulb } from "@/assets/images/svgs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hasibur Rahman</title>
      </Head>
      <main className={classNames("dark:text-light")}>
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profileImage}
                alt="Hasibur Rahman"
                className="w-full h-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                className="text-start"
                text="Turning Vision Into Reality With Code And Design."
              />
              <p className="my-4 text-base font-medium ">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className={classNames(
                    "flex items-center bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent duration-300",
                    "dark:bg-light dark:text-dark",
                    "hover:text-dark hover-bg-light hover:border-dark",
                    "hover:dark:border-light hover:dark:bg-dark hover:dark:text-light"
                  )}
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1 mb-1" />
                </Link>
                <Link
                  href="mailto:hasiburdev@gmail.com"
                  target="_blank"
                  className={classNames(
                    "ml-4 text-lg font-medium underline capitalize text-dark",
                    "dark:text-light"
                  )}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <HireMe /> */}
        {/* <div className="absolute right-8 bottom-8 inline-block w-24">
        <Image src={lightBulb} alt="Hasibur Rahman" className="w-full h-auto" />
      </div> */}
      </main>
    </>
  );
}
