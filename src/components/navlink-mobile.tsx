import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkMobileProps {
  href: string;
  title: string;
  className?: string;
  handleClose: () => void;
}
const NavLinkMobile: React.FC<NavLinkMobileProps> = ({
  href,
  title,
  className = "",
  handleClose,
}) => {
  const router = useRouter();
  const handleClick = () => {
    handleClose();
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(
        className,
        "group relative text-light",
        "dark:text-dark"
      )}
    >
      {title}
      <span
        className={classNames(
          "absolute -bottom-0.5 left-0 inline-block h-[1px] bg-light transition-[width] duration-300 ease-in-out",
          router.asPath === href ? "w-full" : "w-0",
          "dark:bg-dark",
          "group-hover:w-full"
        )}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default NavLinkMobile;
