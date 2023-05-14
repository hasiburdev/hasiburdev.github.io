import { motion } from "framer-motion";
import Logo from "./logo";
import NavLink from "./navlink";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./icons";
import useThemeSwitcher from "@/hooks/use-theme-switcher";
import classNames from "classnames";
import { useState } from "react";
import NavbarMobile from "./navbar-mobile";

const Navbar: React.FC = () => {
  const { mode, setMode } = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={classNames(
        "relative flex w-full items-center justify-between px-32 py-8 font-medium",
        "dark:text-light",
        "lg:px-16 md:px-12 sm:px-8 xs:px-4"
      )}
    >
      <button
        className={classNames(
          "flex hidden flex-col items-center justify-center",
          "lg:flex"
        )}
        onClick={handleIsOpen}
      >
        <span
          className={classNames(
            "block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out",
            "dark:bg-light",
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          )}
        ></span>
        <span
          className={classNames(
            "my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out",
            "dark:bg-light",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        ></span>
        <span
          className={classNames(
            "block h-0.5 w-6 rounded-sm bg-dark",
            "dark:bg-light",
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          )}
        ></span>
      </button>
      <div
        className={classNames(
          "flex w-full items-center justify-between",
          "lg:hidden"
        )}
      >
        <nav>
          <NavLink href="/" title="Home" className="mr-4" />
          <NavLink href="/about" title="About" className="mx-4" />
          <NavLink href="/projects" title="Projects" className="mx-4" />
          {/* <NavLink href="/blog" title="Blog" className="ml-4" /> */}
        </nav>
        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="mr-3 w-6"
            href="https://twitter.com/hasiburdev"
            target="_blank"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="mx-3 w-6"
            href="https://github.com/hasiburdev"
            target="_blank"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="mx-3 w-6"
            href="/"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            className={classNames(
              "ml-3 flex items-center justify-center rounded-full p-1",
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            )}
            onClick={() =>
              setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"))
            }
          >
            {mode === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
      {isOpen && <NavbarMobile handleClose={handleIsOpen} />}

      <div
        className={classNames(
          "absolute left-1/2 translate-x-[-50%]",
          "lg:left-auto lg:right-0"
        )}
      >
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
