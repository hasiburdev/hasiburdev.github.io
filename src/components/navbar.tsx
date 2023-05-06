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
        "w-full px-32 py-8 font-medium flex items-center justify-between relative",
        "dark:text-light",
        "lg:px-16 md:px-12 sm:px-8 xs:px-4"
      )}
    >
      <button
        className={classNames(
          "flex flex-col justify-center items-center hidden",
          "lg:flex"
        )}
        onClick={handleIsOpen}
      >
        <span
          className={classNames(
            "bg-dark block h-0.5 w-6 rounded-sm ease-out transition-all duration-300",
            "dark:bg-light",
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          )}
        ></span>
        <span
          className={classNames(
            "bg-dark block h-0.5 w-6 ease-out transition-all duration-300 rounded-sm my-0.5",
            "dark:bg-light",
            isOpen ? "opacity-0" : "opacity-100"
          )}
        ></span>
        <span
          className={classNames(
            "bg-dark block h-0.5 w-6 rounded-sm",
            "dark:bg-light",
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          )}
        ></span>
      </button>
      <div
        className={classNames(
          "w-full flex justify-between items-center",
          "lg:hidden"
        )}
      >
        <nav>
          <NavLink href="/" title="Home" className="mr-4" />
          <NavLink href="/about" title="About" className="mx-4" />
          <NavLink href="/projects" title="Projects" className="mx-4" />
          <NavLink href="/blog" title="Blog" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-6 mr-3"
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
            className="w-6 mx-3"
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
            className="w-6 mx-3"
            href="/"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            className={classNames(
              "ml-3 p-1 flex items-center justify-center rounded-full",
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
