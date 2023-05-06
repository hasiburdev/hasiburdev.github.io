import { jsbookImage } from "@/assets/images";
import AnimatedText from "@/components/animated-text";
import BlogCard from "@/components/blog-card";
import FeaturedBlog from "@/components/featured-blog";
import Layout from "@/components/layout";
import classNames from "classnames";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Hasibur Rahman</title>
        <meta name="description" content="Blog page of Hasibur" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words can change the world!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedBlog
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              image={jsbookImage}
              link="hasibur.me"
              time="9min read"
              summary="
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
"
            />
            <FeaturedBlog
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              image={jsbookImage}
              link="https://hasibur.me"
              time="9min read"
              summary="
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
"
            />
          </ul>
          <h2
            className={classNames(
              "font-bold text-4xl w-full text-center my-16 mt-32 text-dark",
              "dark:text-light"
            )}
          >
            All Articles
          </h2>
          <ul>
            <BlogCard
              image={jsbookImage}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              date={"March 22, 2023"}
              link={"/"}
            />

            <BlogCard
              image={jsbookImage}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              date={"March 22, 2023"}
              link={"/"}
            />

            <BlogCard
              image={jsbookImage}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              date={"March 22, 2023"}
              link={"/"}
            />
            <BlogCard
              image={jsbookImage}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              date={"March 22, 2023"}
              link={"/"}
            />
            <BlogCard
              image={jsbookImage}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              date={"March 22, 2023"}
              link={"/"}
            />
            <BlogCard
              image={jsbookImage}
              title={
                "Build A Custom Pagination Component In Reactjs From Scratch"
              }
              date={"March 22, 2023"}
              link={"/"}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Blog;
