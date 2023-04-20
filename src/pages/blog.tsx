import AnimatedText from "@/components/animated-text";
import Layout from "@/components/layout";
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
          <ul>
            <li>Featured blog - 1</li>
            <li>Featured blog - 1</li>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Blog;
