import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Open_Sans, Poppins } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--open-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  variable: "--poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className} ${openSans.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
