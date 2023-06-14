import { motion } from "framer-motion";
import NavLinkMobile from "./navlink-mobile";
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./icons";
import classNames from "classnames";
import useThemeSwitcher from "@/hooks/use-theme-switcher";

interface NavbarMobileProps {
  handleClose: () => void;
}
const NavbarMobile: React.FC<NavbarMobileProps> = ({ handleClose }) => {
  const { mode, setMode } = useThemeSwitcher();
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      className={classNames(
        "fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-between rounded-lg bg-dark/90 py-32 backdrop-blur-sm",
        "dark:bg-light/75 "
      )}
    >
      <nav className="flex flex-col items-center justify-center gap-2 py-6">
        <NavLinkMobile href="/" title="Home" handleClose={handleClose} />
        <NavLinkMobile href="/about" title="About" handleClose={handleClose} />
        <NavLinkMobile
          href="/projects"
          title="Projects"
          handleClose={handleClose}
        />
        {/* <NavLinkMobile href="/blog" title="Blog" handleClose={handleClose} /> */}
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
          className={classNames(
            "mx-3 w-6 rounded-full bg-light",
            "dark:bg-dark"
          )}
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
    </motion.div>
  );
};

export default NavbarMobile;
