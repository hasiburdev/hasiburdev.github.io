import { profileImageAbout } from "@/assets/images/profile";
import AnimatedNumber from "@/components/animated-number";
import AnimatedText from "@/components/animated-text";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Layout from "@/components/layout";
import Skills from "@/components/skills";
import TransitionEffect from "@/components/transition-effect";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Head>
        <title>About | Hasibur Rahman</title>
      </Head>
      <TransitionEffect />
      <main className={classNames("dark:text-light")}>
        <Layout className="pt-16">
          <AnimatedText
            text="Passion fuels purpose!"
            className={classNames(
              "mb-16",
              "lg:text-6xl sm:text-5xl xs:text-4xl"
            )}
          />
          <div className="w-[80%] mx-auto block xl:hidden">
          <div className={classNames("relative", "sm:gap-8 ")}>
            <div
              className={classNames(
                "col-span-3 max-w-[600px] bg-light p-8",
                "dark:bg-dark",
                "xl:col-span-4",
                "md:order-1 md:col-span-8"
              )}
            >
              <div className={classNames(" bg-dark", "dark:bg-light")} />
              <Image
                src={profileImageAbout}
                alt="Hasibur Rahman"
                className="h-auto w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute top-[20%] left-[43%] block lg:hidden">
            <div
              className={classNames(
                "col-span-2 flex items-end justify-between w-[745px] 2xl:w-[600px]",
                "xl:col-span-8 xl:flex-row",
                "md:order-3"
              )}
            >
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "2xl:text-5xl"
                  )}
                >
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "2xl:text-lg"
                  )}
                >
                  Satisfied Clients
                </h2>
              </div>
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end  justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "2xl:text-5xl"
                  )}
                >
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "2xl:text-lg"
                  )}
                >
                  Projects completed
                </h2>
              </div>
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end  justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "2xl:text-5xl"
                  )}
                >
                  <AnimatedNumber value={4} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "2xl:text-lg"
                  )}
                >
                  Years of Experience
                </h2>
              </div>
            </div>
            </div>
            <div className="about-description description-box absolute lg:left-0 lg:w-[100%] left-[18%] top-[55%] w-[78%] bg-[#EFEEEE] p-7">
              <div
                className={classNames(
                  "col-span-3 flex flex-col items-start justify-start",
                  "xl:col-span-4",
                  "md:order-2 md:col-span-8"
                )}
              >
                <h2
                  className={classNames(
                    "mb-4 lg:text-xl text-2xl font-bold uppercase text-dark/75",
                    "dark:text-light"
                  )}
                >
                  Biography
                </h2>
                <p className="font-medium lg:text-sm">
                  Software development is not only my choice career but also
                  it’s my hobby and passion. I have 3+ years of experience in
                  Full stack web development.
                </p>
                <p className="my-4 font-medium lg:text-sm">
                  I have worked on projects like: Online JavaScript Code Runner,
                  Project Management Software, Ecommerce Website.
                </p>
                <div className="font-medium  lg:text-sm">
                  Technologies I use frequently:
                  <p className="mt-2">
                    <strong>Frontend:</strong> React.js, Redux, Next.js, Sass,
                    TailwindCSS, Material UI, Bootstrap, Ant Design <br />
                  </p>
                  <p className="mt-2">
                    <strong>Backend:</strong>
                    Node.js, Express.js, Prisma, Nest.js, MongoDB, Postgresql{" "}
                    <br />
                  </p>
                  <p className="my-2">
                    <strong>Tools:</strong>
                    Git, GitHub, Linux Server, Postman, Figma, Adobe XD <br />{" "}
                  </p>
                  <p>
                    I am always seeking opportunities to learn and develop my
                    skills as a professional in a challenging and dynamic work
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="w-[80%] mx-auto hidden xl:block">
          <div className={classNames( "sm:gap-8 ")}>
            <div
              className={classNames(
                "col-span-3 max-w-[600px] bg-light p-8 mx-auto",
                "dark:bg-dark",
                "xl:col-span-4",
                "md:order-1 md:col-span-8"
              )}
            >
              <div className={classNames(" bg-dark", "dark:bg-light")} />
              <Image
                src={profileImageAbout}
                alt="Hasibur Rahman"
                className="h-auto w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="about-description description-box lg:w-[100%] w-[78%] mx-auto bg-[#EFEEEE] p-7 xl:mt-[-150px]">
              <div
                className={classNames(
                  "col-span-3 flex flex-col items-start justify-start",
                  "xl:col-span-4",
                  "md:order-2 md:col-span-8"
                )}
              >
                <h2
                  className={classNames(
                    "mb-4 lg:text-xl text-2xl font-bold uppercase text-dark/75",
                    "dark:text-light"
                  )}
                >
                  Biography
                </h2>
                <p className="font-medium lg:text-sm">
                  Software development is not only my choice career but also
                  it’s my hobby and passion. I have 3+ years of experience in
                  Full stack web development.
                </p>
                <p className="my-4 font-medium lg:text-sm">
                  I have worked on projects like: Online JavaScript Code Runner,
                  Project Management Software, Ecommerce Website.
                </p>
                <div className="font-medium  lg:text-sm">
                  Technologies I use frequently:
                  <p className="mt-2">
                    <strong>Frontend:</strong> React.js, Redux, Next.js, Sass,
                    TailwindCSS, Material UI, Bootstrap, Ant Design <br />
                  </p>
                  <p className="mt-2">
                    <strong>Backend:</strong>
                    Node.js, Express.js, Prisma, Nest.js, MongoDB, Postgresql{" "}
                    <br />
                  </p>
                  <p className="my-2">
                    <strong>Tools:</strong>
                    Git, GitHub, Linux Server, Postman, Figma, Adobe XD <br />{" "}
                  </p>
                  <p>
                    I am always seeking opportunities to learn and develop my
                    skills as a professional in a challenging and dynamic work
                    environment.
                  </p>
                </div>
              </div>
            </div>
            <div>
            <div
              className={classNames(
                "col-span-2 flex items-end justify-between lg:w-[100%] w-[745px] mx-auto",
                "xl:col-span-8 xl:flex-row",
                "md:order-3"
              )}
            >
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "lg:text-4xl"
                  )}
                >
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl lg:text-sm font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "lg:text-sm lg:text-center"
                  )}
                >
                  Satisfied Clients
                </h2>
              </div>
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end  justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "lg:text-4xl"
                  )}
                >
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "lg:text-sm lg:text-center"
                  )}
                >
                  Projects completed
                </h2>
              </div>
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end  justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "lg:text-4xl"
                  )}
                >
                  <AnimatedNumber value={4} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "lg:text-sm lg:text-center"
                  )}
                >
                  Years of Experience
                </h2>
              </div>
            </div>
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

{
  /* <div
            className={classNames(
              "grid w-full grid-cols-8 items-center gap-16",
              "sm:gap-8 "
            )}
            
          >
            <div
              className={classNames(
                "relative col-span-3 max-w-[600px] bg-light p-8",
                "dark:bg-dark",
                "xl:col-span-4",
                "md:order-1 md:col-span-8"
              )}
            >
              <div
                className={classNames(
                  "absolute -right-2 top-0 -z-10 bg-dark",
                  "dark:bg-light"
                )}
              />
              <Image
                src={profileImageAbout}
                alt="Hasibur Rahman"
                className="h-auto w-full"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div
              className={classNames(
                "col-span-3 flex flex-col items-start justify-start",
                "xl:col-span-4",
                "md:order-2 md:col-span-8"
              )}
            >
              <h2
                className={classNames(
                  "mb-4 text-lg font-bold uppercase text-dark/75",
                  "dark:text-light"
                )}
              >
                Biography
              </h2>
              <p className="font-medium ">
                Software development is not only my choice career but also it’s
                my hobby and passion. I have 3+ years of experience in Full
                stack web development.
              </p>
              <p className="my-4 font-medium ">
                I have worked on projects like: Online JavaScript Code Runner,
                Project Management Software, Ecommerce Website.
              </p>
              <div className="font-medium  ">
                Technologies I use frequently:
                <p className="mt-2">
                  <strong>Frontend:</strong> React.js, Redux, Next.js, Sass,
                  TailwindCSS, Material UI, Bootstrap, Ant Design <br />
                </p>
                <p className="mt-2">
                  <strong>Backend:</strong>
                  Node.js, Express.js, Prisma, Nest.js, MongoDB, Postgresql{" "}
                  <br />
                </p>
                <p className="my-2">
                  <strong>Tools:</strong>
                  Git, GitHub, Linux Server, Postman, Figma, Adobe XD <br />{" "}
                </p>
                <p>
                  I am always seeking opportunities to learn and develop my
                  skills as a professional in a challenging and dynamic work
                  environment.
                </p>
              </div>
            </div>
            <div
              className={classNames(
                "col-span-2 flex flex-col items-end justify-between",
                "xl:col-span-8 xl:flex-row",
                "md:order-3"
              )}
            >
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "md:text-6xl sm:text-5xl xs:text-4xl"
                  )}
                >
                  <AnimatedNumber value={50} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "md:text-lg sm:text-base xs:text-sm"
                  )}
                >
                  Satisfied Clients
                </h2>
              </div>
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end  justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "md:text-6xl sm:text-5xl xs:text-4xl"
                  )}
                >
                  <AnimatedNumber value={40} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "md:text-lg sm:text-base xs:text-sm"
                  )}
                >
                  Projects completed
                </h2>
              </div>
              <div
                className={classNames(
                  "my-[50px] flex flex-col items-end  justify-center",
                  "xl:items-center"
                )}
              >
                <span
                  className={classNames(
                    "inline-block text-7xl font-bold",
                    "md:text-6xl sm:text-5xl xs:text-4xl"
                  )}
                >
                  <AnimatedNumber value={4} />+
                </span>
                <h2
                  className={classNames(
                    "text-center text-xl font-medium capitalize text-dark/75",
                    "dark:text-light/75",
                    "md:text-lg sm:text-base xs:text-sm"
                  )}
                >
                  Years of Experience
                </h2>
              </div>
            </div>
          </div> */
}
