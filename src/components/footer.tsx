import Link from "next/link";
import Layout from "./layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getFullYear()}
          &copy; All Rights Reserved.
        </span>
        <div className="flex items-center">
          Built with <span className="text-primary text-2xl px-1">&#9825;</span>
          <Link className="underline underline-offset-2" href="/">
            Hasibur Rahman
          </Link>
        </div>
        <Link
          href="mailto:hasiburdev@gmail.com"
          className="underline underline-offset-2"
          target="_blank"
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
