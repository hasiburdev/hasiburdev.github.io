import AnimatedText from "@/components/animated-text";
import FeaturedProject from "@/components/featured-project";
import Layout from "@/components/layout";
import Head from "next/head";
import { jsbookImage } from "@/assets/images";
import Project from "@/components/project";

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
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24">
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
            <div className="col-span-6">
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
            <div className="col-span-6">
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
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
            <div className="col-span-6">
              <Project
                githubLink="https://github.com/hasiburdev/jsbook"
                summary="Lorem ipsum"
                link="https://jsbook-editor.vercel.app"
                title="Browser-based JavaScript Runtime"
                type="website"
                image={jsbookImage}
              />
            </div>
            <div className="col-span-6">
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
