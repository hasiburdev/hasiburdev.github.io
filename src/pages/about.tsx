import { profileImageAbout } from "@/assets/images/profile";
import AnimatedNumber from "@/components/animated-number";
import AnimatedText from "@/components/animated-text";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Hasibur Rahman</title>
      </Head>
      <main
        className={classNames(
          "flex w-full flex-col items-center justify-center",
          "dark:text-light"
        )}
      >
        <Layout className="pt-16">
          <AnimatedText text="Passion fuels purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2
                className={classNames(
                  "mb-4 text-lg font-bold uppercase text-dark/75",
                  "dark:text-light"
                )}
              >
                Biography
              </h2>
              <p className="font-medium ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores id aut vel deserunt odio tempore eos obcaecati
                perspiciatis. Sit corrupti exercitationem quod veritatis modi id
                alias minus temporibus, inventore eos?
              </p>
              <p className="my-4 font-medium ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores id aut vel deserunt odio tempore eos obcaecati
                perspiciatis. Sit corrupti exercitationem quod veritatis modi id
                alias minus temporibus, inventore eos?
              </p>
              <p className="font-medium ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores id aut vel deserunt odio tempore eos obcaecati
                perspiciatis. Sit corrupti exercitationem quod veritatis modi id
                alias minus temporibus, inventore eos?
              </p>
            </div>
            <div
              className={classNames(
                "col-span-3 relative h-max rounded-3xl border-2 border-solid border-dark bg-light p-8",
                "dark:bg-dark dark:border-light"
              )}
            >
              <div
                className={classNames(
                  "absolute top-0 -right-3 -z-10 w-[102%] h-[102%] rounded-3xl bg-dark",
                  "dark:bg-light"
                )}
              />
              <Image
                src={profileImageAbout}
                alt="Hasibur Rahman"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className={classNames(
                    "text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75"
                  )}
                >
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className={classNames(
                    "text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75"
                  )}
                >
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={4} />+
                </span>
                <h2
                  className={classNames(
                    "text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75"
                  )}
                >
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
