import Link from "next/link";
import Layout from "./layout";
import classNames from "classnames";

const Footer = () => {
  return (
    <footer
      className={classNames(
        "w-full border-t-2 border-solid border-dark font-medium text-lg",
        "dark:text-light dark:border-light",
        "sm:text-base"
      )}
    >
      <Layout
        className={classNames(
          "py-4 flex items-center justify-between",
          "lg:flex-col lg:py-2",
          "!2xl:p-8 !xl:pt-[32px] !xl:pb-[32px] !lg:p-4 !md:p-4 !sm:p-4"
        )}
      >
        <span>
          {new Date().getFullYear()}
          &copy; All Rights Reserved.
        </span>
        <div className={classNames("flex items-center", "lg:py-2")}>
          Built with{" "}
          <span
            className={classNames(
              "text-primary text-2xl px-1",
              "dark:text-primary-dark"
            )}
          >
            &#9825;
          </span>
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
