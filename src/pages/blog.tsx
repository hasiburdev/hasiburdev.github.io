import AnimatedText from "@/components/animated-text";
import BlogCard from "@/components/blog-card";
import FeaturedBlog from "@/components/featured-blog";
import Layout from "@/components/layout";
import TransitionEffect from "@/components/transition-effect";
import { BlogPageProps } from "@/interfaces/blog";
import classNames from "classnames";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { blogPageData } from "../../data/blog";

const Blog: NextPage<BlogPageProps> = ({
  animatedText,
  blogs,
  metaDescription,
  pageTitle,
}) => {
  const renderedFeaturedBlogs = blogs
    .slice(0, 2)
    .map((blog, index) => (
      <FeaturedBlog
        image={blog.image}
        link={blog.link}
        summary={blog.summary || ""}
        title={blog.title}
        key={index}
        time={blog.time || "2min read"}
      />
    ));

  const renderedBlogs = blogs
    .slice(2)
    .map((blog, index) => (
      <BlogCard
        image={blog.image}
        title={blog.title}
        date={blog.date || ""}
        link={blog.link}
        key={index}
      />
    ));
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={animatedText}
            className={classNames(
              "mb-16",
              "lg:text-6xl md:text-5xl sm:mb-8 sm:text-4xl xs:text-3xl"
            )}
          />
          <ul
            className={classNames("grid grid-cols-2 gap-16", "md:grid-cols-1")}
          >
            {renderedFeaturedBlogs}
          </ul>
          <h2
            className={classNames(
              "my-16 mt-32 w-full text-center text-4xl font-bold text-dark",
              "dark:text-light"
            )}
          >
            All Articles
          </h2>
          <ul>{renderedBlogs}</ul>
        </Layout>
      </main>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  return {
    props: blogPageData,
  };
};
