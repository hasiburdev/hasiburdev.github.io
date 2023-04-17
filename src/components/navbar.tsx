import Link from "next/link";
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

const Navbar: React.FC = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative">
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
        <motion.a
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 mx-3"
          href="https://linkedin.com"
          target="_blank"
        >
          <SunIcon />
        </motion.a>
        <motion.a
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="w-6 ml-3"
          href="/"
          target="_blank"
        >
          <MoonIcon />
        </motion.a>
      </nav>
      <div className="absolute left-1/2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
