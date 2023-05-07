import AnimatedText from "@/components/animated-text";
import FeaturedProject from "@/components/featured-project";
import Layout from "@/components/layout";
import Head from "next/head";
import { jsbookImage } from "@/assets/images";
import Project from "@/components/project";
import classNames from "classnames";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Hasibur Rahman</title>
        <meta name="description" content="Coding Projects of Hasibur Rahman" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className={classNames(
              "mb-16",
              "lg:text-6xl md:text-5xl sm:mb-8 sm:text-4xl xs:text-3xl"
            )}
          />
          <div
            className={classNames(
              "grid grid-cols-12 gap-24",
              "xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-2"
            )}
          >
            <div className="col-span-12">
              <FeaturedProject
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
            <div className={classNames("col-span-6", "sm:col-span-12")}>
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
            <div className={classNames("col-span-6", "sm:col-span-12")}>
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>

            <div className={classNames("col-span-6", "sm:col-span-12")}>
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
            <div className={classNames("col-span-6", "sm:col-span-12")}>
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
