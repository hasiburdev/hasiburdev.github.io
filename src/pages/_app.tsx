import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import classNames from "classnames";

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={classNames(
          montserrat.variable,
          "font-mont bg-light w-full min-h-screen ",
          "dark:bg-dark"
        )}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
