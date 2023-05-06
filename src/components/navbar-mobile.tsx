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
        "min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-sm py-32",
        "dark:bg-light/75 "
      )}
    >
      <nav className="flex flex-col items-center justify-center py-6 gap-2">
        <NavLinkMobile href="/" title="Home" handleClose={handleClose} />
        <NavLinkMobile href="/about" title="About" handleClose={handleClose} />
        <NavLinkMobile
          href="/projects"
          title="Projects"
          handleClose={handleClose}
        />
        <NavLinkMobile href="/blog" title="Blog" handleClose={handleClose} />
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
          className={classNames(
            "w-6 mx-3 bg-light rounded-full",
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
    </motion.div>
  );
};

export default NavbarMobile;
