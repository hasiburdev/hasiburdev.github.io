import AnimatedText from "@/components/animated-text";
import FeaturedProject from "@/components/featured-project";
import Layout from "@/components/layout";
import Head from "next/head";
import SingleProject from "@/components/project";
import classNames from "classnames";
import { Project } from "@/interfaces";
import TransitionEffect from "@/components/transition-effect";
import { GetStaticProps, NextPage } from "next";

interface ProjectsProps {
  projects: Project[];
}

const Projects: NextPage<ProjectsProps> = ({ projects }) => {
  const renderedProjects = projects.map((project, index) => {
    if (index === 0)
      return (
        <div key={index} className="col-span-12">
          <FeaturedProject
            githubLink={project.githubLink}
            image={project.image}
            link={project.link}
            summary={project.summary}
            title={project.title}
            type={"website"}
          />
        </div>
      );

    return (
      <div key={index} className={classNames("col-span-6", "sm:col-span-12")}>
        <SingleProject
          githubLink={project.githubLink}
          image={project.image}
          link={project.link}
          summary={project.summary}
          title={project.title}
          type={"website"}
        />
      </div>
    );
  });
  return (
    <>
      <Head>
        <title>Projects | Hasibur Rahman</title>
        <meta name="description" content="Coding Projects of Hasibur Rahman" />
      </Head>
      <TransitionEffect />
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
            {renderedProjects}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;

import { projects } from "../../data";

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects,
    },
  };
};
