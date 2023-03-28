import Head from "next/head";
import Header from "@/components/header";
import Banner from "@/components/banner";
import AboutMe from "@/components/about-me";
import MyWorks from "@/components/my-work";
import Footer from "@/components/footer";
import HireMe from "@/components/hire-me";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Banner />
        <AboutMe />
        <MyWorks />
        <Skills />
        <Portfolio />
        <Testimonial />
        <HireMe />
        <Footer />
      </main>
    </>
  );
}