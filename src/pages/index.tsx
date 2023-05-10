import Image from "next/image";
import Layout from "@/components/layout";
import AnimatedText from "@/components/animated-text";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import Head from "next/head";
import classNames from "classnames";
import TransitionEffect from "@/components/transition-effect";
import { GetStaticProps, NextPage } from "next";
import { HomePageProps } from "@/interfaces/home";
import { home } from "../../data";

const Home: NextPage<HomePageProps> = ({
  animatedText,
  pageTitle,
  resumeLink,
  summary,
  emailAddress,
  profileImage,
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <TransitionEffect />
      <main
        className={classNames(
          "flex justify-center items-center",
          "dark:text-light"
        )}
      >
        <Layout className={classNames("pt-0", "md:pt-16 sm:pt-8")}>
          <div
            className={classNames(
              "flex items-center justify-between w-full",
              "lg:flex-col"
            )}
          >
            <div className={classNames("w-1/2", "md:w-full")}>
              <Image
                src={profileImage}
                alt="Hasibur Rahman"
                className={classNames(
                  "w-full h-full",
                  "lg:hidden md:inline-block md:w-full"
                )}
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
            </div>
            <div
              className={classNames(
                "w-1/2 flex flex-col items-center self-center",
                "lg:w-full"
              )}
            >
              <AnimatedText
                className={classNames(
                  "text-start",
                  "xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl "
                )}
                text={animatedText}
              />
              <p
                className={classNames(
                  "my-4 text-base font-medium",
                  "lg:text-center md:text-sm"
                )}
              >
                {summary}
              </p>

              <div
                className={classNames(
                  "flex items-center w-full self-start mt-2",
                  "lg:justify-center"
                )}
              >
                <Link
                  href={resumeLink}
                  target="_blank"
                  className={classNames(
                    "flex items-center bg-dark text-light py-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent duration-300",
                    "dark:bg-light dark:text-dark",
                    "hover:text-dark hover:bg-light hover:border-dark",
                    "hover:dark:border-light hover:dark:bg-dark hover:dark:text-light",
                    "md:py-2 md:px-4 md:text-base"
                  )}
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1 mb-1" />
                </Link>
                <Link
                  href={`mailto:${emailAddress}`}
                  target="_blank"
                  className={classNames(
                    "ml-4 text-lg font-medium underline capitalize text-dark",
                    "dark:text-light",
                    "md:text-base"
                  )}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: home,
  };
};
